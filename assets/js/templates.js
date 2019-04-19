
let x =0;
export const newsTemplate = news => 

`

      <div class=" item item--${x++,x%6} background="">
      <img  class="news_img"src="${news.urlToImage}" alt="newsImage">
      </div>
  
`;

