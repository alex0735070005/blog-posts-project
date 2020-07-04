import { API_KEY, BASE_URL } from "./settings";

class Request {
  constructor(path = "") {
    const pathStr = path ? `/${path}` : "";
    this.query = {};
    this.url = `${BASE_URL}${pathStr}`;
    this.apiKey = API_KEY;
    this.body = null;
    this.method = "GET";
    this.isGetParams = false;
  }

  setGetParams(params) {
    const keys = Object.keys(params);

    const paramsStr = keys.reduce((ak, key, i) => {
      ak += `${key}=${params[key]}&`;
    }, "");

    this.url += `?${paramsStr}`;

    this.isGetParams = true;

    return this;
  }

  setBody(params) {
    this.body = JSON.stringify(params);
  }

  setBody(method) {
    this.method = method;
  }

  build() {
    const options = {};
    options.method = this.method;
    const del = !this.isGetParams ? "?" : "";
    this.url += `${del}api_key=${this.apiKey}`;

    if (this.body) {
      options.body = this.body;
    }
    return fetch(this.url, options).then((response) => response.json());
  }
}

export default Request;
