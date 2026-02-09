import axios from "axios";

const API = axios.create({
  baseURL: "https://example-api.com", // nanti ganti
});

export const getHeadline = () => API.get("/headline");
export const getPopular = () => API.get("/popular");
export const getRecommendation = () => API.get("/recommendation");

export default API;
