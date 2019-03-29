export class BlackCard {
    constructor(text, pick){
        this.text = text;
        this.pick = pick;
        this.card = this.createCard();
        this.placeholders = this.createPlaceholders();
    }

    placeCard(place){
        place.appendChild(this.card);
        this.placeholders.forEach(placeholder => {
            place.appendChild(placeholder);
        })
    }

    createCard(){
        let card = document.createElement("DIV");
        card.classList.add("card");
        card.classList.add("black-card");

        let text = document.createElement("DIV");
        text.innerHTML = this.text;

        card.appendChild(text);
        return card;
    }

    createPlaceholders(){
        let placeholders = [];
        for(let i = 0; i < this.pick; i++){
            let card = document.createElement("DIV");
            card.classList.add("card");
            card.classList.add("placeholder-card");

            let text = document.createElement("DIV");
            text.innerHTML = `placeholder #${i+1}`;

            card.appendChild(text);
            placeholders.push(card);
        }
        return placeholders;
    }
}
