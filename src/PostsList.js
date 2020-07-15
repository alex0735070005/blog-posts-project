import PostFactory from "./PostFactory";

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
    const htmlPosts = this.posts.map((postData) =>
      PostFactory.create("view", postData).render()
    );
    this.container.innerHTML = "";
    this.container.append(...htmlPosts);
  }
}

export default PostsList;
