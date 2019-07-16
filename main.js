new Vue({
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
            //swap cards[i] with cards[random]
            let temp = this.cards[i];
            this.cards[i] = this.cards[randomIndex];
            this.cards[randomIndex] = temp;
          }
      },
    },
  });