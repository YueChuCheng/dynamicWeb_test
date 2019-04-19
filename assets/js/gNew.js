import axios from 'axios';
const apiKey = "321faa72901c4849bb47e8334170b75a";

export default axios.create({
  method: "get",
  baseURL: "https://newsapi.org/v2",
  params: {
    pageSize: 6
  },
  headers: {
    Authorization: apiKey
  }
});