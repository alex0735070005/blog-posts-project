import PostsList from "./PostsList";
import RequestApi from "./RequestApi";
import settings from "./settings";

const requestApi = new RequestApi(settings);

/**
 * Main blog manager
 */
class PostsManager {
  constructor() {
    this.containerId = "container";
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
