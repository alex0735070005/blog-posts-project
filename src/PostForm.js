class PostForm {
  constructor({ onFetch, btnSendText, title = "", short_description = "" }) {
    this.title = title;
    this.short_description = short_description;
    this.btnSendText = btnSendText;

    this.formBackground = document.createElement("div");
    this.formContainer = document.createElement("div");

    this.formCloseBtn = document.createElement("span");
    this.formCloseBtn.onclick = this.hide.bind(this);

    this.formSendBtn = document.createElement("button");
    this.isValid = true;

    this.formSendBtn.onclick = () => {
      this.validate();

      if (this.isValid) {
        onFetch();
      }
    };

    this.formRenderContainer = document.querySelector("body");

    this.inputName = document.createElement("input");
    this.inputNameError = document.createElement("span");
    this.inputDesctiption = document.createElement("textarea");
    this.inputDesctiptionError = document.createElement("span");

    this.render();
  }

  show() {
    this.formRenderContainer.appendChild(this.formBackground);
  }

  hide() {
    this.formRenderContainer.removeChild(this.formBackground);
    this.clear();
  }

  clear() {
    this.inputName.value = "";
    this.inputDesctiption.value = "";
  }

  getData() {
    return {
      title: this.inputName.value,
      short_description: this.inputDesctiption.value,
    };
  }

  clearError(time = 0) {
    setTimeout(() => {
      this.inputNameError.innerHTML = "";
      this.inputDesctiptionError.innerHTML = "";
    }, time);
  }

  validate() {
    const { title, short_description } = this.getData();
    this.isValid = true;
    this.clearError(5000);

    if (!/^[a-zA-Z0-9\s\-\_]{5,50}$/.test(title)) {
      this.isValid = false;
      this.inputNameError.innerHTML = "title is not valid";
    }

    if (!/^[a-zA-Z0-9\s\-\_]{5,100}$/.test(short_description)) {
      this.isValid = false;
      this.inputDesctiptionError.innerHTML = "desctiption is not valid";
    }
  }

  render() {
    this.formBackground.className = "postForm";
    this.formContainer.className = "postForm__container";

    this.formSendBtn.className = "postForm__send";
    this.formSendBtn.innerHTML = this.btnSendText;

    this.formCloseBtn.className = "btnClose";
    this.formCloseBtn.innerHTML = "x";

    this.inputName.className = "postForm__input";
    this.inputName.value = this.title;
    this.inputNameError.className = "postForm__error";
    this.inputName.placeholder = "Enter post name";

    this.inputDesctiption.className = "postForm__input";
    this.inputDesctiption.value = this.short_description;
    this.inputDesctiptionError.className = "postForm__error";
    this.inputDesctiption.placeholder = "Enter post description";

    this.formContainer.append(
      this.inputName,
      this.inputNameError,
      this.inputDesctiption,
      this.inputDesctiptionError,
      this.formSendBtn,
      this.formCloseBtn
    );

    this.formBackground.appendChild(this.formContainer);
  }
}

export default PostForm;
