import axios from "axios";
import { Product } from "../types/Product";

const API_URL = "http://localhost:3000/products";

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get(API_URL);
  return data;
};
