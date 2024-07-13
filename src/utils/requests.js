import axios from "axios";
import { org_id, apiKey, appid } from "./config";

const config = {
  headers: { Authorization: `Bearer ${apiKey}` },
};

// get list of products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(
      `https://api.timbu.cloud/products?organization_id=9e9018be597f42d2a22613fa757f20d3&Appid=8BK3V334E1ZMO9O&Apikey=5bfc932bce134ee389811bc18828262620240712220136734749`,
      {}
    );
    console.log("Api response:", response.data.items);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
