class PostFetch {
  constructor(data) {
    this.title = data.title;
    this.short_description = data.short_description;
    this.full_description = "";
    this.status = true;
    this.seo_url = "";
  }
}

export default PostFetch;
