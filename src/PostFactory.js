import PostFetch from "./PostFetch";
import PostView from "./PostView";

class PostFactory {
  static create(params) {
    switch (params.type) {
      case "fetch":
        return new PostFetch(params);
      case "view":
        return new PostView(params);
    }
  }
}

export default PostFactory;
