class Post {
  constructor(data) {
    this.data = data;

    this.DivContainer = document.createElement("div");
    this.H3Title = document.createElement("h3");
    this.SpanDate = document.createElement("span");
    this.PSDesc = document.createElement("p");
  }

  render() {
    const { id, title, date_update, short_description } = this.data;

    this.DivContainer.className = "post";

    this.H3Title.innerHTML = title;

    this.H3Title.onclick = () => {
      alert(title);
    };

    this.SpanDate.innerHTML = date_update.date;

    this.PSDesc.innerHTML = short_description;

    this.DivContainer.append(this.H3Title, this.SpanDate, this.PSDesc);

    return this.DivContainer;
  }
}

export default Post;
