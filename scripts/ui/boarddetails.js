console.log("Script loaded");
const product_container = document.querySelector(".keyboard_id");

export function createHtml(details) {
  product_container.innerHTML += `
    <div class="specificposts">
      <h2 class="boardcardspesific">${details.title.rendered}</h2>
      <div class="carddivided">
        <div>
          <img class="imgboard image-thumbnail" src="${details._embedded["wp:featuredmedia"]?.[0].source_url}" alt="Image">
        </div>
        <div class=boardspecification>
          <p>${details.excerpt.rendered}</p>
        </div>
      </div>
      <div class="detail__title">
        <p>${details.content.rendered}</p>
      </div>
    </div>`;

  const lastChild = product_container.lastElementChild;
  lastChild.querySelector(".imgboard").onload = function () {
    const lastImage = lastChild.querySelector(".image-thumbnail");

    if (lastImage) {
      lastImage.addEventListener("click", function () {
        document.getElementById(
          "modal-content"
        ).innerHTML = `<img src="${details._embedded["wp:featuredmedia"]?.[0].source_url}" alt="Image">`;

        document.getElementById("imageModal").style.display = "flex";
      });
    } else {
      console.error("No .image-thumbnail found in the last child.");
    }

    document
      .getElementById("close-modal")
      .addEventListener("click", function () {
        document.getElementById("imageModal").style.display = "none";
      });
  };
}
