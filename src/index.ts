import axios from "axios";
import { Post } from "./models/post.models";

async function loadPosts(): Promise<Post[] | any> {
  try {
    const result = await axios("https://jsonplaceholder.typicode.com/posts");
    return await result["data"];
  } catch (err) {
    return Promise.reject(err);
  }
}

loadPosts()
  .then(posts => {
    posts.map(post => console.log(post));
  })
  .catch(err => console.error(err));
