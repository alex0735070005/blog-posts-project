import { API_KEY, BASE_URL } from "./settings";

class Request {
  constructor(path) {
    this.url = `${BASE_URL}/${path}`;
    this.method = "GET";
    this.body = null;
  }

  setMethod(method) {
    this.method = method;
    return this;
  }

  setBody(body) {
    this.body = JSON.stringify(body);
    return this;
  }

  setParams(params) {
    return this;
  }

  send() {
    const options = {};

    options.method = this.method;

    if (this.body) {
      options.body = this.body;
    }

    this.url += `?api_key=${API_KEY}`;

    return fetch(this.url, options).then((response) => response.json());
  }
}

export default Request;
