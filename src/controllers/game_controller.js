import cards from '../cards';
import { BlackCard } from "../components/black_card";
import { WhiteCard } from "../components/white_card";

export class GameController {
    constructor(){
        this.czar = document.getElementById("czar-hand");
        this.player_hand = document.getElementById("player-hand");

        this.selectBlackCard(this.czar, cards.blackCards);
        this.dealWhiteCards(this.player_hand, cards.whiteCards, 5);
    }

    // todo: it can deal the same card twice
    dealWhiteCards(player_hand, deck, amount){
        this.whites = [];
        for(let i = 0; i < amount; i++) {
            let text = deck[Math.floor(Math.random() * deck.length)];
            this.whites.push(new WhiteCard(text));
            this.whites[i].placeCard(player_hand);
        }
    }

    // todo: it can deal the same card twice
    selectBlackCard(caesar_hand, deck) {
        let rawCard = deck[Math.floor(Math.random() * deck.length)];
        this.black = new BlackCard(rawCard.text, rawCard.pick);
        this.black.placeCard(caesar_hand)
    }
}
