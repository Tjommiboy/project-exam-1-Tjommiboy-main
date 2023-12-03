export default function renderPosts(posts, boardsElement) {
  const carouselTrackContainer = document.createElement("div");
  carouselTrackContainer.classList.add("carousel__track-container");

  const carouselTrack = document.createElement("div");
  carouselTrack.classList.add("carousel__track");
  carouselTrackContainer.appendChild(carouselTrack);

  let parent;

  for (let i = 0; i < posts.length; i++) {
    if (i % 3 === 0) {
      parent = document.createElement("div");
      parent.classList.add("posts-parent", "current-slide");
      carouselTrack.appendChild(parent);
    }

    const post = posts[i];
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const anchorElement = document.createElement("a");
    anchorElement.classList.add("specificcard");
    anchorElement.href = `productspecific.html?id=${post.id}`;

    anchorElement.appendChild(postElement);
    parent.appendChild(anchorElement);

    if (
      post.featured_media &&
      post._embedded &&
      post._embedded["wp:featuredmedia"] &&
      post._embedded["wp:featuredmedia"][0]
    ) {
      const imageUrl = post._embedded["wp:featuredmedia"][0].source_url;
      const imageElement = document.createElement("img");
      imageElement.classList.add("imgboards");
      imageElement.src = imageUrl;
      postElement.appendChild(imageElement);

      const titleElement = document.createElement("h2");
      titleElement.classList.add("boardcard");
      titleElement.textContent = post.title.rendered;
      postElement.appendChild(titleElement);
    }
  }

  boardsElement.appendChild(carouselTrackContainer);
}
