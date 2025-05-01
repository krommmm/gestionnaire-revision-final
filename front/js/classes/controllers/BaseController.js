export class BaseController {
  constructor() {
    this.initBase();
  }

  initBase() {
    this.bindCommonEvents();
  }

  bindCommonEvents() {
    document.querySelector("#formSearchBar").addEventListener("submit", this.handleSubmitHeaderForm.bind(this));
  }

  handleSubmitHeaderForm(e) {
    e.preventDefault();
    const form = e.target;
    form.reset();
  }


}