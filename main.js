new Vue({
    /*In this instance, the new Vue is like the deck. This helps a lot with visualization.
    * So you have your deck, and :
    * -el is where you put your deck
    * -data is how you'd describe the cards in your deck.
    * -created is how you first set out your deck (and is inside data? Wait...)
    * -methods are everything you do with the deck (except the create event, I guess)
    * -this is... this deck.
    * */
    el: '#app',
    data: {
      currentCard: 0,
      ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'P', 'Kn','Q', 'K'],
      majorRanks: ['Fool - 0', 'Magician - 1', 'High Priestess - 2', 'Empress - 3', 'Emperor - 4', 'Hierophant - 5', 'Lovers - 6', 'Chariot - 7', 'Strength - 8', 'Hermit - 9', 'Wheel of Fortune - 10', 'Justice - 11', 'Hanged Man - 12', 'Death - 13', 'Temperance - 14', 'Devil - 15', 'Tower - 16', 'Star - 17', 'Moon - 18', ' Sun - 19', ' Judgement - 20', 'World - 21' ],
      suits: ['♥','♦','♠','♣'],
      cards: [],
      suitColor: {
        '♠': 'black',
        '♣': 'black',
        '♦': 'red',
        '♥': 'red',
      },
      shuffleSpeed: 'shuffleMedium',
    },
    created() {
        this.displayInitialDeck();
      }, 
    methods: {
      displayInitialDeck() {
        let id = 1;
        this.cards = [];
        //Regular cards
        for( let s = 0; s < this.suits.length; s++ ) {
          for( let r = 0; r < this.ranks.length; r++ ) {
            let card = {
              id: id,
              rank: this.ranks[r],
              suit: this.suits[s]
            }
            this.cards.push(card);
            id++;
          }
        }
        //Major Arcana
        for (let t = 0; t < this.majorRanks.length; t++){
            let card = {
                id: id, //See if this increments properly
                rank: this.majorRanks[t],
                suit: "❗"
            }
            this.cards.push(card);
            id++
        }
      },
      shuffleDeck() {
        for(let i = this.cards.length - 1; i > 0; i--) {
            //get random
            let randomIndex = Math.floor(Math.random() * i);
            //swap cards[i] with cards[random].
            //Fischer Yates isn't very random because random() isn't very random, 
            //consider refactoring at the end.
            let temp = this.cards[i];
            //Change to Vue.set because Vue doesn't pick up changes when array values/length are directly set.
            Vue.set(this.cards, i, this.cards[randomIndex]);
            Vue.set(this.cards, randomIndex, temp);
          }
      },
      next() {
        if (this.currentCard+1 < this.cards.length) {
            this.currentCard++;
            console.log(this.cards[this.currentCard]);
        }
    }
    },
  });