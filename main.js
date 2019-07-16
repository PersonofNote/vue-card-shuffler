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
  //Add actions
  methods: {
  displayInitialDeck() {/*Initialize id at 1, initialize value as [], loop through.*/},
  }
});