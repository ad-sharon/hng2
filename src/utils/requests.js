// FOR USE WITH TIMBU API FROM HNG
import axios from "axios";
// import { apiKey } from "./config";

// const config = {
//   headers: { Authorization: `Bearer ${apiKey}` },
// };

// get list of all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(
      `https://api.timbu.cloud/products?organization_id=9e9018be597f42d2a22613fa757f20d3&Appid=8BK3V334E1ZMO9O&Apikey=5bfc932bce134ee389811bc18828262620240712220136734749`,
      {}
    );
    console.log(response.data.items);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// get a single product
export const fetchProductbyId = async (unique_id) => {
  try {
    const response = await axios.get(
      `https://api.timbu.cloud/products/${unique_id}?organization_id=9e9018be597f42d2a22613fa757f20d3&Appid=8BK3V334E1ZMO9O&Apikey=5bfc932bce134ee389811bc18828262620240712220136734749`,
      {}
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

//get makeup products
// export const fetchMakeupProducts = async () => {
//   try {
//     const response = await axios.get(
//       `https://api.timbu.cloud/categories/745354c3a1494bdb93f65896b2c7b5f9/entities?organization_id=9e9018be597f42d2a22613fa757f20d3&Appid=8BK3V334E1ZMO9O&Apikey=5bfc932bce134ee389811bc18828262620240712220136734749&model_type=products`,
//       {}
//     );
//     console.log("Api response:", response.data.items);
//     return response.data.items;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// };

// fetchMakeupProducts();
