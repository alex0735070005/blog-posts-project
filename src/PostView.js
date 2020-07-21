class PostView {
  constructor(params) {
    const { data, deletePost, showFormEditPost } = params;
    this.data = data;

    this.DivContainer = document.createElement("div");
    this.H3Title = document.createElement("h3");
    this.SpanDate = document.createElement("span");
    this.PSDesc = document.createElement("p");
    this.deletePostBtn = document.createElement("span");
    this.editPostBtn = document.createElement("span");

    this.deletePostBtn.onclick = () => {
      deletePost(this.data.id);
    };

    this.editPostBtn.onclick = () => {
      showFormEditPost(this.data);
    };
  }

  render() {
    const { id, title, date_update, short_description } = this.data;

    this.deletePostBtn.className = "btnClose";
    this.deletePostBtn.innerHTML = "x";

    this.editPostBtn.className = "btnEdit";
    this.editPostBtn.innerHTML = "Edit";

    this.DivContainer.className = "post";

    this.H3Title.innerHTML = title;

    this.SpanDate.innerHTML = date_update.date;

    this.PSDesc.innerHTML = short_description;

    this.DivContainer.append(
      this.editPostBtn,
      this.deletePostBtn,
      this.H3Title,
      this.SpanDate,
      this.PSDesc
    );

    return this.DivContainer;
  }
}

export default PostView;
