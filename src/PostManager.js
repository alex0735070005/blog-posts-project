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

    this.postForm = null;
  }

  showFormAddPost() {
    this.postForm = new PostForm({
      onFetch: this.fetchAddPost.bind(this),
      btnSendText: "Create post",
    });
    this.postForm.show();
  }

  showFormEditPost(post) {
    const onFetchPost = this.fetchEditPost.bind(this);

    this.postForm = new PostForm({
      onFetch: () => onFetchPost(post.id),
      btnSendText: "Update post",
      title: post.title,
      short_description: post.short_description,
    });
    this.postForm.show();
  }

  fetchAddPost() {
    const data = this.postForm.getData();
    const post = PostFactory.create({ type: "fetch", data });

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

  fetchEditPost(postId) {
    const data = this.postForm.getData();
    const post = PostFactory.create({ type: "fetch", data });

    requestApi.updatePost(post, postId).then((data) => {
      console.log(data);
      const { result, message } = data;
      if (!result) {
        return alert(message);
      }
      this.postForm.hide();
      this.renderPosts();
    });
  }

  deletePost(postId) {
    const isDelete = confirm("Do You delete this post ?");

    if (!isDelete) {
      return false;
    }

    requestApi.deletePost(postId).then((data) => {
      console.log(data);
      const { result, message } = data;
      if (!result) {
        return alert(message);
      }
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

      const deletePost = this.deletePost.bind(this);
      const showFormEditPost = this.showFormEditPost.bind(this);

      const postsList = new PostsList({
        posts,
        containerId: this.containerId,
        deletePost,
        showFormEditPost,
      });

      postsList.render();
    });
  }
}

export default PostsManager;
