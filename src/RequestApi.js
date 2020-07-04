import Request from "./Request";

/**
 * Request blog Api class
 */
class RequestApi {
  getPosts() {
    return new Request("posts").build();
  }

  getPost(postId) {
    return new Request(postId).build();
  }

  deletePost(postId) {
    return new Request(postId).setMethod("DELETE").build();
  }

  addPost(post) {
    return new Request().setMethod("POST").addBody(post).build();
  }

  updatePost(post, postId) {
    return new Request(postId).setMethod("PUT").addBody(post).build();
  }
}

export default RequestApi;
