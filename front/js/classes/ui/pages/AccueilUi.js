export class AccueilUi {
    constructor() {
        this.root = document.querySelector("#root");
    }

    
    determinateDayElement() {
        return document.querySelector(".frontColor");
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

    createElem(elementKind, elementClass) {
        const element = document.createElement(elementKind);
        element.className = elementClass;
        return element;
    }

    displayAccueil() {
        this.root.innerHTML = `
                   <div class="accueil">
                <div class="accueil__header">
                    <h2>Flash cards</h2>
                    <p>Bienvenue sur l'application de flash cards</p>
                </div>
     
                <div class="accueil__main">
                    <div class="accueil__main__img"> <img src="./assets/pictures/others/sexy.png" /></div>

                    <div class="accueil__main__presentation">
                        <p class="accueil__main__presentation--title">Bienvenue sur l'application de flash Cards</p>
                        <p class="accueil__main__presentation--description">Dispositif d'apprentissage fondé sur la
                            technique de la répétition espacée.</p>
                        <p class="accueil__main__presentation--description">
                            Cette technique d'apprentissage a été mise au point dans les années 1970 par Sebastian
                            Leitner (en) (chroniqueur scientifique allemand, 1919-1989) à la suite des travaux de
                            Hermann Ebbinghaus1. </p>
                            <div class="accueil__main__presentation__footer">
                                <p>Ajouter une carte pour débuter ...</p>
                                <button class="btn-blue btn-addCard">Add card</button>
                            </div>
                    </div>
                </div>
            </div>
        `;
    }
}