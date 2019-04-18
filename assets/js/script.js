import $ from 'jquery';
import '../css/style.css';
import 'bootstrap';
//import gNews from './modules/gNews.js';
//import { newsTemplate } from './modules/templates.js';
import axios from 'axios';
const apiKey = "321faa72901c4849bb47e8334170b75a";

export default axios.create({
  method: "get",
  baseURL: "https://newsapi.org/v2",
  params: {
    pageSize: 4
  },
  headers: {
    Authorization: apiKey
  }
});
export const newsTemplate = news => `
<li class="list-group-item">
   <h2>${news.title}</h2>
   <img src="${news.urlToImage}" alt="newsImage">
   <p>${news.description}</p>
</li>
`;

const getSocialNews = async () => {
    try {
      let resp = await gNews("/everything?q=social");
      let newsList = resp.data.articles.map(news => newsTemplate(news));
      $("#socialNews").html(newsList);
    } catch (error) {
      console.log(error);
    }
  };