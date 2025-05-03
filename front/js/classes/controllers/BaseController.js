export class BaseController {
  constructor() {
    this.initBase();
  }

  initBase() {
    this.bindCommonEvents();
  }

  bindCommonEvents() {
    document.addEventListener("click", this.handleClickNav.bind(this));
  }

  handleClickNav(e) {
    if (e.target.classList.contains("agendaNav")) {
      console.log(e.target);
    } else if (e.target.classList.contains("toDoListNav")) { 
      console.log(e.target);
    } else if (e.target.classList.contains("photosNav")) {
      console.log(e.target);
    } else if (e.target.classList.contains("roadMapNav")) {
      console.log(e.target);
    }
  }


}