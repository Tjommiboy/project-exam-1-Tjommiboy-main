import handleHamburger from "./hamburger.js";
import getPosts from "./api/getPosts.js";
import renderPosts from "./ui/renderPosts.js";
import { showLoader, hideLoader } from "./loader/loader.js";

handleHamburger();

async function displayPosts() {
  const boardsElement = document.querySelector(".carousel");

  try {
    showLoader();
    const posts = await getPosts();
    renderPosts(posts, boardsElement);
  } catch (error) {
    boardsElement.innerHTML = error.message;
  }
  hideLoader();
}

displayPosts();
