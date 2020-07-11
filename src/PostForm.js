class PostForm {
  constructor() {
    this.formBackground = document.createElement("div");
    this.formContainer = document.createElement("div");

    this.formCloseBtn = document.createElement("span");
    this.formCloseBtn.onclick = this.hide.bind(this);

    this.formSendBtn = document.createElement("button");
    this.formRenderContainer = document.querySelector("body");

    this.inputName = document.createElement("input");
    this.inputDesctiption = document.createElement("textarea");

    this.render();
  }

  show() {
    this.formRenderContainer.appendChild(this.formBackground);
  }

  hide() {
    this.formRenderContainer.removeChild(this.formBackground);
  }

  render() {
    this.formBackground.className = "postForm";
    this.formContainer.className = "postForm__container";

    this.formSendBtn.className = "postForm__send";
    this.formSendBtn.innerHTML = "create post";

    this.formCloseBtn.className = "postForm__close";
    this.formCloseBtn.innerHTML = "x";

    this.inputName.className = "postForm__input";
    this.inputName.placeholder = "Enter post name";

    this.inputDesctiption.className = "postForm__input";
    this.inputDesctiption.placeholder = "Enter post description";

    this.formContainer.append(
      this.inputName,
      this.inputDesctiption,
      this.formSendBtn,
      this.formCloseBtn
    );

    this.formBackground.appendChild(this.formContainer);
  }
}

export default PostForm;
