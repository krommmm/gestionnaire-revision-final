export class BaseController {
  constructor() {
    this.isAgenda = true;
    this.isTodoList = false;
    this.isPhotos = false;
    this.isRoadMap = false;


    this.classMap = {
      agendaNav: 'isAgenda',
      toDoListNav: 'isTodoList',
      photosNav: 'isPhotos',
      roadMapNav: 'isRoadMap'
    };

    this.handleClickNav = this.handleClickNav.bind(this); 
    this.initBase();
  }

  initBase() {
    this.bindCommonEvents();
  }

  bindCommonEvents() {
    document.addEventListener("click", this.handleClickNav);
  }

  handleClickNav(e) {
    for (const className in this.classMap) {
      if (e.target.classList.contains(className)) {
        console.log(e.target);
        this.majNavBool(this.classMap[className]);
        break;
      }
    }
  }

  majNavBool(activeKey) {
    Object.values(this.classMap).forEach(key => {
      this[key] = false;
    });

    if (Object.values(this.classMap).includes(activeKey)) {
      this[activeKey] = true;
    } else {
      console.warn(`State "${activeKey}" is not recognized.`);
    }
  }

  destroy() {
    document.removeEventListener("click", this.handleClickNav);
  }
}
