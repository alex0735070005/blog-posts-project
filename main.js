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
}

const requestApi = new RequestApi(projectSettings);

requestApi.getPosts().then((dataPosts) => {
  console.log(dataPosts);
});
