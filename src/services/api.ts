import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:333",
  // http://localhost:333
});

export default Api;
