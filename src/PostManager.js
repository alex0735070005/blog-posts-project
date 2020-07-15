import PostsList from "./PostsList";
import RequestApi from "./RequestApi";
import PostFactory from "./PostFactory";
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

    this.postForm = new PostForm({
      onFetch: this.fetchPost.bind(this),
    });
  }

  showFormAddPost() {
    this.postForm.show();
  }

  fetchPost() {
    const data = this.postForm.getData();
    const post = PostFactory.create("fetch", data);

    requestApi.addPost(post).then((data) => {
      console.log(data);
      const { result, message } = data;
      if (!result) {
        return alert(message);
      }
      this.postForm.hide();
      this.renderPosts();
    });
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
