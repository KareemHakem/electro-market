import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "i49qr9n0",
  dataset: "production",
  apiVersion: "2022-08-22",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
