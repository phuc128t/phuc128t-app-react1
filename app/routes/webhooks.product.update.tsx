import type { ActionFunctionArgs } from "react-router";
import { authenticate } from "../shopify.server";
import db from "../db.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const { shop, topic, payload } = await authenticate.webhook(request);

  if (topic !== "PRODUCTS_UPDATE") {
    throw new Response("Unhandled webhook topic", { status: 404 });
  }

  console.log(`Received ${topic} webhook for ${shop}`);

  return new Response();
};
