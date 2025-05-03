export class AgendaUi {
    constructor() {
        this.root = document.querySelector("#root");
    }

    determinateDayElement() {
        return document.querySelector(".frontColor");
    }

    createElem(elementKind, elementClass) {
        const element = document.createElement(elementKind);
        element.className = elementClass; 
        return element;
    }
    
    displayAgenda(weekRangeDateAndCards) {

        const agenda = this.createElem("div", "agenda");
        const agenda__container = this.createElem("section", "agenda__container fondColor");

        const agenda__container__header = this.createElem("div", "agenda__container__header entreColor");
        const days = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

        for (let i = 0; i < 7; i++) {
            const day = document.createElement("div");
            day.className = `agenda__container__header__day ${days[i]} ${weekRangeDateAndCards[i].isCurrentDay ? "frontColor" : "backColor"}`;

            const dayName = this.createElem("p", "agenda__container__header__day--day");
            dayName.textContent = days[i];
            day.appendChild(dayName);

            const date = this.createElem("span", "date");
            const dateString = weekRangeDateAndCards[i].date;
            const newDate = new Date(dateString);
            const formattedDate = newDate.toLocaleDateString("fr-CA");
            const orderedDateArr = formattedDate.split("-");
            const dateNum = orderedDateArr[2];
            date.textContent = dateNum;
            day.appendChild(date);

            const cardsLength = this.createElem("span", "cardsLength");
            cardsLength.textContent = weekRangeDateAndCards[i].cards.length;
            if (weekRangeDateAndCards[i].cards.length > 0) {
                day.appendChild(cardsLength);
            }

            agenda__container__header.appendChild(day);
        }

        const agenda__container__main = this.createElem("div", "agenda__container__main");
        const ul = this.createElem("ul", "agenda__container__main__cards");
        agenda__container__main.appendChild(ul);

        const btn = this.createElem("button", "btn-red btn-addCard");
        btn.textContent = "Add card";
        agenda__container__main.appendChild(btn);

        agenda__container.appendChild(agenda__container__header);
        agenda__container.appendChild(agenda__container__main);
        agenda.appendChild(agenda__container);

        this.root.innerHTML = "";
        this.root.appendChild(agenda);
    }

    loadCards(weekRangeDateAndCards, $dayEl) {
        const dayClicked = $dayEl.querySelector(".agenda__container__header__day--day").textContent;
        const dayObj = weekRangeDateAndCards.filter((cell) => cell.day === dayClicked);
        const cards = dayObj[0].cards;
        const ulContainer = document.querySelector(".agenda__container__main__cards");
        ulContainer.innerHTML = "";

        for (let i = 0; i < cards.length; i++) {
            const li = this.createElem("li", "agenda__container__main__cards__li");
            li.setAttribute("data-id", cards[i].id);
            const img = this.createElem("img", "agenda__container__main__cards__img");
            img.src = `./assets/pictures/icons/${cards[i].matiere}.png`;
            const para = this.createElem("p", "agenda__container__main__cards__para");
            para.textContent = cards[i].name;
            li.appendChild(img);
            li.appendChild(para);
            ulContainer.appendChild(li);
        }

    }
}