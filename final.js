

class Card {
    constructor(suit, value) {
      this.suit = suit;
      this.value = value;
    }
  }
  
  class Deck {
    constructor() {
      this.cards = [];
  
      const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  
      for (let suit of suits) {
        for (let i = 1; i <= 13; i++) {
          this.cards.push(new Card(suit, i));   
        }  
      }  
  
    }   
    
    
  shuffle() { //shuffle the deck of cards using Fisher-Yates algorithm 

    let currentIndex = this.cards.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);  

      currentIndex -= 1; 
      temporaryValue = this.cards[currentIndex]; //store the value of card at current index in a temp variable 

      this.cards[currentIndex] = this.cards[randomIndex]; //swap the values of card at current index and random index  

      this.cards[randomIndex] = temporaryValue; //assign the temp variable to card at random index  

    }  

    return this; //return the shuffled deck object  

  }  

    describe(){
        this.cards.forEach(element => {
            console.log(element.value);
        });
    }


}
  

    //create class for card player 
   class CardPlayer {

        constructor() {
            this.name = "";
            this.cards = [];
        }
      
        getName() {
          return this.name;
        }
      
        getCards() {
          return this.cards;
        }
      
        setCards(newCards) {
          this.cards = newCards;
        }
      
        addCard(card) {
          this.cards.push(card);
        }
      
        removeCard(card) {
          const index = this.cards.indexOf(card);
      
          if (index > -1) {
            this.cards.splice(index, 1);
          } else {
            console.log('Card not found!');
          }  												
        } 

        describe(){
            this.cards.forEach(element => {
                console.log(element.value);
            });
        }
     
      }

      class CardGame{
        cardGame(player1,player2){
            this.player1 = player1;
            this.player2 = player2;
        }

        play() {
            let p1Score = 0;
            let p2Score = 0;
          
            // Iterate through the turns where each Player plays a Card
            for (let i = 0; i < player1.cards.length; i++) {
          
              // Award a point to the Player with the higher Card
              if (player1.cards[i].value> player2.cards[i].value) {
                p1Score++;
              } else if (player2.cards[i].value > player1.cards[i].value) {
                p2Score++;
              // Ties result in zero points for both Players  
              } else {
                p1Score += 0;
                p2Score += 0;
              }
          
            }
          
            // After all cards have been played, display the score and declare the winner.  
            console.log(`Player 1 score: ${p1Score}`);
            console.log(`Player 2 score: ${p2Score}`);
          
            if (p1Score > p2Score) {
              console.log('Player 1 wins!');
            } else if (p2Score > p1Score) {
              console.log('Player 2 wins!');  
            } else {   // Tie  
              console.log('It\'s a tie!');  
            }  																     
          }
    

      }

      // write a funtion to deal 26 cards from a dec between 2 players

      //write a unit test for dealCards function in this file 
      function dealCards(numCards,player1,player2,deck) {
        // Deal the cards to each player
        for (let cardIdx = 0; cardIdx < numCards; cardIdx++) {  
          player1.addCard(deck.cards[cardIdx]);   // deal first card to player1  
          player2.addCard(deck.cards[cardIdx + numCards]); // deal second card to player2  
        }            


      }  

//cretae a new 
      let deck = new Deck();
      deck.shuffle();
      let player1 = new CardPlayer();
      let player2 = new CardPlayer();


      dealCards(26,player1,player2,deck);

      let cardGame = new CardGame(player1,player2);
      cardGame.play();


      

      //Unit Tests

      var chai = require("chai");
      var assert = chai.assert;
      
      // Test to test dealCards function        
      describe('dealCards', function() {   
    
        it('should deal 26 cards between 2 players from a deck ', function() { 
          let player1 = new CardPlayer();
          let player2 = new CardPlayer();
    
          let deck = new Deck();

          dealCards(26,player1,player2,deck);
          
    
          assert.equal(player1.cards.length, 26); // assert that the player 1 has 26 cards 
          assert.equal(player2.cards.length, 26); // assert that the player 2 has 26 cards 

        });
    
      });
  
      