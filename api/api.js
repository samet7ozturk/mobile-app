import axios from "axios";
import { URL } from "@env";

console.log("API_URL:", URL);

const api = axios.create({
  baseURL: URL,
});

export default api;
