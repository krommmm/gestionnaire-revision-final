export class Accueil {
    constructor() {

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