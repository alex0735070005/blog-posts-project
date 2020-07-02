/**
 * Request blog Api class
 */
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

export default RequestApi;
