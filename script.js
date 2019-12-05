//Create a Deck of Cards
class Deck {
    constructor(){
        this.deck = [];
        this.dealt_cards = [];
    }
    generate_deck(){
        let card = (suit, value) =>{
            this.name = value + ' of ' + suit;
            this.suits = suits;
            this.values = values;

            return {name:this.name,suit:this.suit, value:this.value}
        }
        let values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        let suits = ['Clubs', 'Diamonds','Spades','Hearts']
            for(let i = 0; i < suits.length; i++){
                for(let s = 0; s < values.length; s++){
                    this.deck.push(card(suits[s], values[v]))
                }
            }
    }
}

deck = new Deck()

deck.generate_deck() 