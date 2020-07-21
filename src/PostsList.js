import PostFactory from "./PostFactory";

class PostsList {
  /**
   * Constructor handler
   *
   * @param {Array} posts
   * @param {string} containerId
   */
  constructor(params) {
    const { posts, containerId, deletePost, showFormEditPost } = params;

    this.deletePost = deletePost;
    this.showFormEditPost = showFormEditPost;
    this.posts = posts;
    this.container = document.querySelector(`#${containerId}`);
  }

  /**
   * Render list posts handler
   */
  render() {
    const htmlPosts = this.posts.map((postData) => {
      const post = PostFactory.create({
        type: "view",
        data: postData,
        deletePost: this.deletePost,
        showFormEditPost: this.showFormEditPost,
      });

      return post.render();
    });

    this.container.innerHTML = "";
    this.container.append(...htmlPosts);
  }
}

export default PostsList;
