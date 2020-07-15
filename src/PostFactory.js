import PostFetch from "./PostFetch";
import PostView from "./PostView";

class PostFactory {
  static create(type, data) {
    switch (type) {
      case "fetch":
        return new PostFetch(data);
      case "view":
        return new PostView(data);
    }
  }
}

export default PostFactory;
