require("dotenv").config();
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.ENDPOINT_URL,
  apiKey: process.env.X_API_KEY,
});
