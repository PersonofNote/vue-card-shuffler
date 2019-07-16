//First, create Vue instance and initialize three properties
new Vue({
  el: '#app',
  //Note for self later. Need an extra suit, extra ranks, and a whole
  //extra set of ranks for the Major Arcana to shuffle in.
  //Add variables/constants
  data: {
    ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    suits: ['♥','♦','♠','♣'],
    cards: [],
  },
  //Add create event
  created() {
      this.displayInitialDeck();
  }
  //Add actions
  methods: {
  displayInitialDeck() {
      let id = 1;
      this.cards = [];

      for( let s=0; s < this.suits.length; s++ ) {
          for ( let r=0; r < this.ranks.length; r++ ) {
              let card = {
                  id: id,
                  rank: this.ranks[r],
                  suit: this.suits[s]
              }
              this.cards.push(card);
              id++;
          }
          //No return needed; data variables are reactive by default
          //(When the variable changes, the view re-renders)
      }
  },
  }
});