import { showLoader, hideLoader } from "./loader/loader.js";

const api_url = "https://www.fjord1design.com/pe1/wp-json/wp/v2/posts?_embed";
const boardsElement = document.querySelector(".boardscontainer");
const loadMoreButton = document.querySelector("#loadMoreButton");

let currentPage = 1;
const itemsPerPage = 8;

export default async function getSynths() {
  try {
    console.log("Before showLoader");
    showLoader();

    const response = await fetch(
      `${api_url}&page=${currentPage}&per_page=${itemsPerPage}`
    );
    const synths = await response.json();

    if (synths.length === 0) {
      loadMoreButton.style.display = "none";
    }

    if (currentPage === 1) {
      boardsElement.innerHTML = "";
    }

    for (let i = 0; i < synths.length; i++) {
      if (synths[i]) {
        boardsElement.innerHTML += `
          <a class="specificcard" href="productspecific.html?id=${synths[i].id}">
            <div class="boardsposts">
              <img class="imgboards" src="${synths[i]._embedded["wp:featuredmedia"][0].source_url}" />
              <h2 class="boardcard">${synths[i].title.rendered}</h2>
            </div>
          </a>`;
      }
    }

    hideLoader();

    if (synths.length === itemsPerPage) {
      loadMoreButton.style.display = "block";
    } else {
      loadMoreButton.style.display = "none";
    }
  } catch (error) {
    console.log(error);
    hideLoader();
  }
}

loadMoreButton.addEventListener("click", () => {
  currentPage++;
  getSynths();
});

getSynths();
