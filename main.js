const projectSettings = {
  apiKey: "0341fa9c389dbce7dae6d3af488683d4",
  baseUrl: "http://blog.api.axenov-it.com/v1/posts",
};

class RequestApi {
  constructor(settings) {
    const { apiKey, baseUrl } = settings;

    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  getPosts() {
    const url = `${this.baseUrl}?api_key=${this.apiKey}`;
    return fetch(url).then((response) => response.json());
  }

  getPost(postId) {
    const url = `${this.baseUrl}/${postId}?api_key=${this.apiKey}`;
    return fetch(url).then((response) => response.json());
  }

  deletePost(postId) {
    const url = `${this.baseUrl}/${postId}?api_key=${this.apiKey}`;
    return fetch(url, {
      method: "DELETE",
    }).then((response) => response.json());
  }

  addPost(post) {
    const url = `${this.baseUrl}?api_key=${this.apiKey}`;
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(post),
    }).then((response) => response.json());
  }

  updatePost(post, postId) {
    const url = `${this.baseUrl}/${postId}?api_key=${this.apiKey}`;
    return fetch(url, {
      method: "PUT",
      body: JSON.stringify(post),
    }).then((response) => response.json());
  }
}

const requestApi = new RequestApi(projectSettings);

/**
 * Build Post constructor
 */
class Post {
  constructor(data) {
    this.data = data;
  }

  render() {
    const {
      id,
      title,
      date_update,
      full_description,
      short_description,
      seo_url,
      status,
    } = this.data;

    return `<div class="post">
        <h3>${title}</h3>
        <span>${date_update.date}</span>
        <p>${short_description}</p>
    </div>`;
  }
}

/**
 * Render list posts constructor
 */
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
    const html = this.posts
      .map((postData) => {
        const post = new Post(postData);

        return post.render();
      })
      .join("");

    this.container.innerHTML = html;
  }
}

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

const postsManager = new PostsManager();

postsManager.renderPosts();
