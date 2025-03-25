import axios from "axios";

const Api = axios.create({
  baseURL: "https://api-mirelland.herokuapp.com",
  // https://api-mirelland.herokuapp.com
  // http://localhost:333
});

export default Api;
