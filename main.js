new Vue({
    /*In this instance, the new Vue is like the deck. This helps a lot with visualization.
    * So you have your deck, and :
    * -el is where you put your deck
    * -data is how you'd describe the cards in your deck.
    * -created is how you first set out your deck
    * -methods are everything you do with the deck
    * -this is... this deck.
    * */
    el: '#app',
    data: {
      ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
      //Not doing anything with this yet
      majorRanks: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22' ],
      suits: ['♥','♦','♠','♣'],
      cards: [],
      suitColor: {
        '♠': 'black',
        '♣': 'black',
        '♦': 'red',
        '♥': 'red',
      },
    },
    created() {
        this.displayInitialDeck();
      }, 
    methods: {
      displayInitialDeck() {
        let id = 1;
        this.cards = [];
  
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
    },
  });