
    console.log('War! my Friends!')

    // const SUITS = ["🐲", "☠️", "⚔️", "🦅"]; // by having SUIT & VALUES capitalized makes them a global constance variable
    // const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    
    // iterate 

//#region Deck Class
    /**
     * This is my Deck class
     * This will Assign a hand for two players
     */

    class Deck {
        constructor(){
            this.newDeck = [];
            this.deck = this.makeDeck();
        } 
      
        // This method creates a deck of cards
        makeDeck() {
            
            let face = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
            let suits =  ["🐲", "☠️", "⚔️", "🦅"];

            // for (let f of face) {
                // for (let s of suits) {
                // let card = new Card(f, s);
                // this.newDeck.push(card);
            // }


            for (let i = 0; i < suits.length; i++) {
                for (let j = 0; j < face.length; j++) {
                    let card = new Card(face[j],suits[i],j + 2) 
                    this.newDeck.push(card);
                }
                
            }

            this.shuffle(this.newDeck);

        }
        
        // This method will shuffle the cards
        shuffle(array){
            let currentIndex = array.length,  randomIndex;
        //   While there remain elements to shuffle.
            while (currentIndex != 0) {
        //   Pick a remaining element.
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
        //   And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
              }    
                 
           return array;

            }

            // This method will deal the cards

        dealCard() {
            return this.newDeck.pop();
        }

    }
    //#endregion Deck Class
 

    //#region Card Class

    /**
     * This will is my card class
     */
    
    class Card {
        constructor(face, suit, value) {
            this.face = face;
            this.suit = suit; 
            this.value = value;          
        }
    }
    //#endregion Card Class

//#region Player Class

/**
 * This is a class that makes up a player
 * 
 */

    class Player {
        constructor() {
            this.hand = [];
            this.score = 0;
        }

     // This function place a card in the players hand
        getCard(card) {
            this.hand.push(card);
        }
    }
//#endregion Player Class


//#region  Game Class


    // this plays the game
    class Game {
        constructor() {
           this.war = new Deck();
            this.player1 = new Player();
            this.player2 = new Player();
            this.player1Card;
            this.player2Card; 
        }

        // this deals the cards
    dealAllCards() {
        for (let i = 0; i < 26; i++) {
            this.player1.getCard(this.war.dealCard());
        } 
        
        for (let i = 0; i < 26; i++) {
            this.player2.getCard(this.war.dealCard());
        }
    }

    //this plays the game

    playGame() {

     for (let i = 0; i < 26; i++) {
        this.player1Card = this.player1.hand[i];
        this.player2Card = this.player2.hand[i];

        if (this.player1Card.value > this.player2Card.value) {
            this.player1.score += 1
            console.log(`player1, ${this.player1Card.face} of ${this.player1Card.suit}`);
            console.log(`player2, ${this.player2Card.face} of ${this.player2Card.suit}`);
            console.log('Player 1 scores a point')
            console.log('================================')
        }

        if (this.player1Card.value < this.player2Card.value) {
            this.player2.score += 1
            console.log(`player1, ${this.player1Card.face} of ${this.player1Card.suit}`);
            console.log(`player2, ${this.player2Card.face} of ${this.player2Card.suit}`);
            console.log('Player2 scores a point')
            console.log('================================') 
        }

        if (this.player1Card.value === this.player2Card.value) {
            console.log(`player1, ${this.player1Card.face} of ${this.player1Card.suit}`);
            console.log(`player2, ${this.player2Card.face} of ${this.player2Card.suit}`);
            console.log('Tie No Points Scored') 
            console.log('================================')
        }

        }   

    }

    //this announces the winner
    displayWinner() {
        console.log(`Player 1 Score ${this.player1.score}`);
        console.log(`Player 2 Score ${this.player2.score}`);

        if (this.player1.score > this.player2.score) {
            console.log('Player 1 wins')
        }

        if (this.player1.score < this.player2.score) {
            console.log('Player 2 wins')
        }

        if (this.player1.score === this.player2.score) {
            console.log('No winner Awarded, Ties goes to One Eyed Jack')
        }

    }

}

//#endregion Game Class


    // Write a Unit Test using Mocha and Chai for at least one of the functions you write.


    // creating a new game object, deal all cards and display winner
    let myGame = new Game();
    myGame.dealAllCards();
    myGame.playGame();
    myGame.displayWinner();






