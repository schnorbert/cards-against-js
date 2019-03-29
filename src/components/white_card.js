export class WhiteCard {
    constructor(text){
        this.text = text;
        this.card = this.createCard();
    }

    placeCard(place){
        place.appendChild(this.card);
    }

    createCard(){
        let card = document.createElement("DIV");
        card.classList.add("card");
        card.classList.add("white-card");

        let text = document.createElement("DIV");
        text.innerHTML = this.text;

        card.appendChild(text);
        return card;
    }
}
