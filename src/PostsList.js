import Post from "./Post";

class PostsList {
  /**
   * Constructor handler
   *
   * @param {Array} posts
   * @param {string} containerId
   */
  constructor(posts, containerId) {
    this.posts = posts;
    this.container = document.querySelector(`#${containerId}`);
  }

  /**
   * Render list posts handler
   */
  render() {
    const htmlPosts = this.posts.map((postData) => new Post(postData).render());

    this.container.append(...htmlPosts);
  }
}

export default PostsList;
