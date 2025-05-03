export class CemetaryUi {
    constructor() {
        this.root = document.querySelector("#root");
        this.monthNames = [
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
            "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
        ];
    }

    getPage() {
        const str = window.location.href;
        const url = new URL(str);
        let page = parseInt(url.searchParams.get("page"));
        if (!page) {
            page = 1;
        }
        return page;
    }

    createElem(elementKind, elementClass) {
        const element = document.createElement(elementKind);
        element.className = elementClass;
        return element;
    }

    displayCemetary(ghostsCards) {
        this.cleanCemetaryElements(); 
        if (ghostsCards.length <= 0) {
            return;
        }
        this.displayCemetaryHeader(ghostsCards);
        this.displayCemetaryBody(ghostsCards);
        this.displayCemetaryPagination(ghostsCards);
    }

    cleanCemetaryElements() {
        const cemetaryElement = document.querySelector(".cemetary");
        const cemetaryCardsElement = document.querySelector(".cemetary__body");
        if (cemetaryElement) cemetaryElement.remove();
        if (cemetaryCardsElement) cemetaryCardsElement.remove();
    }

    displayCemetaryHeader(ghostsCards) {
        const page = this.getPage();

        const cemetary = this.createElem("div", "cemetary");
        const cemetary__header = this.createElem("div", "cemetary__header");
        const cemetary__header__page = this.createElem("div", "cemetary__header__page");
        cemetary__header__page.textContent = page;
        const cemetary__header__img = this.createElem("div", "cemetary__header__img");
        const cemetary__header__imgContainer = this.createElem("div", "cemetary__header__img--container");
        const cemetary__header__imgImg = this.createElem("img", "cemetary__header__img--img");
        cemetary__header__imgImg.src = "./assets/pictures/others/poro_christmass.webp";
        const imgLength = this.createElem("p", "cemetary__header__img--length");
        imgLength.textContent = ghostsCards.length;
        const cemetary__header__text = this.createElem("div", "cemetary__header__text");
        const cemetary__header__textTitle = this.createElem("p", "cemetary__header__text--title");
        cemetary__header__textTitle.textContent = "Cimetière des cartes";

        cemetary__header.appendChild(cemetary__header__page);
        cemetary__header__img.appendChild(cemetary__header__imgContainer);
        cemetary__header__imgContainer.appendChild(cemetary__header__imgImg);
        cemetary__header__img.appendChild(imgLength);
        cemetary__header__text.appendChild(cemetary__header__textTitle);
        cemetary__header.appendChild(cemetary__header__page);
        cemetary__header.appendChild(cemetary__header__img);
        cemetary__header.appendChild(cemetary__header__text);
        cemetary.appendChild(cemetary__header);
        this.root.appendChild(cemetary);
    }

    displayCemetaryBody(ghostsCards) {
        //body
        const page = this.getPage();
        const cemetary = document.querySelector(".cemetary");

        const cemetary__body = this.createElem("div", "cemetary__body");
        const cemetary__body__categories = this.createElem("div", "cemetary__body__categories");
        cemetary__body.appendChild(cemetary__body__categories);

        //table
        const table = document.createElement("table");
        cemetary__body__categories.appendChild(table);
        //thead
        const thead = document.createElement("thead");
        thead.innerHTML = `
            <tr>
                <th>step</th>
                <th>matiere</th>
                <th>name</th>
                <th>date</th>
            </tr>
        `;
        table.appendChild(thead);
        //tbody
        const tbody = document.createElement("tbody");
        let isTableFront = true;
        for (let i = ((page - 1) * 4); i < (page * 4); i++) {
            if (i + 1 > ghostsCards.length) {
                break;
            }
            const tr = document.createElement("tr");
            tr.className = isTableFront ? "tableBack" : "tableFront";
            isTableFront = !isTableFront;
            const tdStep = this.createElem("td", "tdStep");
            tdStep.textContent = ghostsCards[i].step;
            tr.appendChild(tdStep);

            const tdImg = document.createElement("td");
            const img = document.createElement("img");
            img.src = `./assets/pictures/icons/${ghostsCards[i].matiere}.png`;
            tdImg.appendChild(img);
            tr.appendChild(tdImg);

            const tdName = this.createElem("td", "tdName");
            tdName.textContent = ghostsCards[i].name;
            tr.appendChild(tdName);

            const tdDate = document.createElement("td");
            const date = new Date(ghostsCards[i].date);
            const formattedDate = date.toLocaleDateString("fr-CA");
            const orderedDateArr = formattedDate.split("-");
            const orderedDate = `${orderedDateArr[2]} ${this.monthNames[parseInt(orderedDateArr[1]) - 1]} ${orderedDateArr[0]}`;

            tdDate.textContent = orderedDate;
            tr.appendChild(tdDate);

            const tdIcons = this.createElem("td", "tableIcons");
            tdIcons.setAttribute("data-id", ghostsCards[i].id);
            tdIcons.innerHTML = `<i class="fa-regular fa-trash-can deleteGhostCard"></i><i class="fa-solid fa-arrows-rotate resetGhostCard"></i>`;
            tr.appendChild(tdIcons);

            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        cemetary.appendChild(cemetary__body);
        this.root.appendChild(cemetary);
    }

    displayCemetaryPagination(ghostsCards) {
        const nbPages = Math.ceil(ghostsCards.length / 4);
        const cemetary = document.querySelector(".cemetary");
        const cemetary__body = document.querySelector(".cemetary__body");

        const cemetary__body__pagination = this.createElem("div", "cemetary__body__pagination");
        cemetary__body__pagination.innerHTML = `
        <div class="cemetary__body__pagination__container">
                            <div class="cemetary__body__pagination__container--square goLeft"><i class="fa-solid fa-angle-left goLeft"></i></div>
                            <div class="cemetary__body__pagination__container--numeros"></div>
                            <div class="cemetary__body__pagination__container--square goRight"><i class="fa-solid fa-angle-right goRight"></i></div>
                        </div>
        `;

        cemetary__body.appendChild(cemetary__body__pagination);

        this.root.appendChild(cemetary);
        this.root.appendChild(cemetary__body);

        const numeros = document.querySelector(".cemetary__body__pagination__container--numeros");
        const host = window.location.href.split("?")[0];
        for (let i = 0; i < nbPages; i++) {
            const a = document.createElement("a");

            a.setAttribute("href", `${host}?page=${i + 1}`);
            const numPage = this.createElem("div", "cemetary__body__pagination__container--square");
            numPage.textContent = i + 1;
            a.appendChild(numPage);
            numeros.appendChild(a);

        }
    }


}