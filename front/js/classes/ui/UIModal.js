export class UIModal {
    constructor() {
        this.modal = document.getElementById("modal");
    }

    open() {
        this.modal.style.display = "flex";
    }

    close() {
        this.modal.style.display = "none";
    }

    displayFormAddCard() {
        this.modal.innerHTML = `
        <div class=modal>
 <div class="modal__quit">
         <div class="modal__header__matieres">
                <img src="./assets/pictures/icons/js_icon.png" />
                <img src="./assets/pictures/icons/ts_icon.png" />
                <img src="./assets/pictures/icons/debian_icon.png" />
            </div>
            <i class="fa-solid fa-square-xmark modal__quit--quitBtn"></i>
        </div>
 
        <h2>Create a card</h2>
        <form id="form-AddCard" method="POST">
            <div class="form-AddCard__inputs">
                <input type="text" name="card" placeholder="Ex: Asynchrone" />
                <select name="matiere">
                    <option value="js_icon">JS</option>
                    <option value="nodejs_icon">NodeJs</option>
                    <option value="mySql_icon">MySql</option>
                    <option value="react_icon">React</option>
                    <option value="github_icon">Github</option>
                    <option value="debian_icon">Devian</option>
                    <option value="jest_icon">Jest</option>
                    <option value="ts_icon">Ts</option>
                    <option value="php_icon">PHP</option>
                </select>
            </div>
            <button class="btn-red" type="submit">Submit</button>
        </form>
        </div>
                `;
    }

    displayUpdateCard(card, infoNextStep) {
        this.modal.innerHTML = `
                <div class=modal>
                <div class="modal__quit">
                    <i class="fa-solid fa-square-xmark modal__quit--quitBtn"></i>
                </div>
                <div class="modal__header">

                  
                    <div class="modal__header__card">
                      <img src="./assets/pictures/icons/${card.matiere}.png"/>  <p>${card.name}</p>
                    </div>
                </div>
                <h2>Update a card</h2>
                <div class="modal__buttons">
                    <button class="btn-blue modal__buttons__nextStep" data-id="${card.id}">Prochaine étape (${infoNextStep})</button>
                    <button class="btn-blue modal__buttons__delay" data-id="${card.id}">Remettre à demain</button>
                    <button class="btn-blue modal__buttons__reset" data-id="${card.id}">Reset</button>
                    <button class="btn-red modal__buttons__delete" data-id="${card.id}">Delete</button>
                </div>
            </div>
        `;
    }
}