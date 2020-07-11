import PostsList from "./PostsList";
import RequestApi from "./RequestApi";
import PostForm from "./PostForm";

const requestApi = new RequestApi();

/**
 * Main blog manager
 */
class PostsManager {
  constructor() {
    this.containerId = "container";

    this.addPost = document.querySelector("#add-post");

    this.addPost.onclick = this.showFormAddPost.bind(this);
  }

  showFormAddPost() {
    const postForm = new PostForm();
    postForm.show();
  }

  renderPosts() {
    // Get lists posts from API
    requestApi.getPosts().then((data) => {
      const { posts, result, message } = data;

      if (!result) {
        return alert(message);
      }

      const postsList = new PostsList(posts, this.containerId);

      postsList.render();
    });
  }
}

export default PostsManager;
