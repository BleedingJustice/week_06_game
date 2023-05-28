const expect = chai.expect;
const assert = chai.assert;


//
describe('warTest', () => {

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

    let testDeck = new Deck()

    describe('Testing the number of cards', () => {
        it('#The output should be the the total number if cards in the deck', () => {
           
        })
        expect(testDeck.newDeck.length).to.deep.equal(52)
    })
    
    describe('This will deal a single card', () => {
        it('#This should only deal one card', () => {
            testDeck.dealCard()
            expect(testDeck.newDeck.length).to.deep.equal(51)
        })
    }) 

}) 