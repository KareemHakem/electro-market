// import Stripe from "stripe";

// const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       // Create Checkout Sessions from body params.
//       const params = {
//         submit_type: "pay",
//         mode: "payment",
//         payment_method_types: ["card"],
//         billing_address_collection: "auto",
//         shipping_options: [

//         ],

//         line_items: req.body.map((item) => {
//           const img = item.image[0].asset._ref;
//           const newImage = img
//             .replace(
//               "image-",
//               "https://cdn.sanity.io/images//production/"
//             )
//             .replace("-webp", ".webp");

//           return {
//             price_data: {
//               currency: "usd",
//               product_data: {
//                 name: item.name,
//                 images: [newImage],
//               },
//               unit_amount: item.price * 100,
//             },
//             adjustable_quantity: {
//               enabled: true,
//               minimum: 1,
//             },
//             quantity: item.quantity,
//           };
//         }),

//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//       };
//       const session = await stripe.checkout.sessions.create(params);
//       res.status(200).json(session);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }

import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51LfNW9CYhpNte0822VZnPGwGPQTkTnF1VTVw4sBVOvqgnqRzESFDrBVXBfmVpyl2p2N1RRX8rQIyUtq5z4TowBzw00Dprng1TU"
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1LfNpVCYhpNte08287LsbSCa" },
          { shipping_rate: "shr_1LfNrlCYhpNte082SmdJjFqR" },
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/i49qr9n0/production/"
            )
            .replace("-webp", ".webp");

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/Success`,
        cancel_url: `${req.headers.origin}/canceled`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
