import { showLoader, hideLoader } from "./loader/loader.js";
const api_url = "https://www.fjord1design.com/pe1/wp-json/wp/v2/posts?_embed";
const boardsElement = document.querySelector(".boardscontainer");

export default async function getSynths() {
  try {
    showLoader();
    const response = await fetch(api_url);
    const synths = await response.json();

    boardsElement.innerHTML = "";

    for (let i = 0; i < synths.length && i < 8; i++) {
      if (synths[i]) {
        boardsElement.innerHTML += `
        <a class"specificcard" href="productspecific.html?id=${synths[i].id}">
          <div class="boardsposts">
            <img class="imgboards" src="${synths[i]._embedded["wp:featuredmedia"][0].source_url}" />
              <h2 class="boardcard">${synths[i].title.rendered}</h2>
           
          </div>
 
          </a>`;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
