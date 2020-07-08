import Request from "./Request";

/**
 * Request blog Api class
 */
class RequestApi {
  getPosts() {
    return new Request("posts").send();
  }

  getPost(postId) {
    return new Request(`posts/${postId}`).send();
  }

  deletePost(postId) {
    return new Request(`posts/${postId}`).setMethod("DELETE").send();
  }

  addPost(post) {
    return new Request(`posts`).setMethod("POST").setBody(post).send();
  }

  updatePost(post, postId) {
    return new Request(`posts/${postId}`).setMethod("PUT").setBody(post).send();
  }
}

export default RequestApi;
