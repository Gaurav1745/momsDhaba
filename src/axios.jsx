import axios from "axios";

const baseURL = "https://api.spoonacular.com";

export default axios.create({
  baseURL,
  params: { apiKey: '3c4e80cf68d84f95aa06f8bbe120f8a9' },
});
