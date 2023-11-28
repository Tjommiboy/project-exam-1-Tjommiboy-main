import { postsUrl } from "../constants/api.js";

export default async function getPosts() {
  const response = await fetch(postsUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await response.json();
  return data;
}
