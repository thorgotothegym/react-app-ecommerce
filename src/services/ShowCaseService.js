import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com/products?limit=4",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});