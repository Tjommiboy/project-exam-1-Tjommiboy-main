import handleHamburger from "./hamburger.js";
import { createHtml } from "./ui/boarddetails.js";

const product_container = document.querySelector(".keyboard_id");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
  "https://www.fjord1design.com/pe1/wp-json/wp/v2/posts/" + id + "?_embed";

handleHamburger();

async function getproduct() {
  try {
    const response = await fetch(url);
    const board = await response.json();

    product_container.innerHTML = "";
    createHtml(board);
  } catch (error) {
    console.log(error);
    product_container.innerHTML = ("error", error);
  }
}

getproduct();
