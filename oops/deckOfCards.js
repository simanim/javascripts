/******************************************************************************
 *  Execution       :   default node         cmd> node deckOfCards.js 
 *                      
 *  Purpose         :   Shuffle the cards distribute 9 Cards to 4 Players and Print the Cards 
 * 
 *  @description    
 * 
 *  @file           : deckOfCards.js
 *  @overview       : deckOfCards module Shuffle the cards using Random method and then distribute 9 Cards 
 *                    to 4 Players and Print the Cards the received by the 4 Players using 2D Array
 *  @module         : deckOfCards - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v10.10.0
 *  @since          : 15-09-2018
 *
 **********************************************************/
var deck = new Array();
/**
 * @description declaring an empty array
 */
var suit =["♣", "♦", "♥", "♠"];
var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
for(var i=0;i<suit.length;i++)
{
    for(j=0;j<rank.length;j++)
    {
        var temp=" ";
        deck.push(temp+suit[i]+rank[j]);
       /**
        * @description To concatenate the rank & suit elements
        */
    }
}
/**
 * @description For loop & the temeperaray variable is used to shuffle the cards
 */
for (var i = 0; i < deck.length; i++) 
{
    var index = parseInt((Math.random() * deck.length));
   /**
    * @description Math.random() is used to get the random elements
    */
    var temp = deck[i];
    deck[i] = deck[index];
    deck[index] = temp;
}
var x=0;var y=9;
var newArr = [];
console.log("The cards received by the 4 players using 2-D array : \n");
for(var i=0;i<4;i++)
{
    var array=[];
   /**
    * @description Reinitializing the array to get a new 1-D array 
    */
    for(var j=x;j<y;j++)
    {
        array.push(deck[j]);
   /**
    * @description pushing the shuffled deck into the array
    */
    }
    x=x+9;
    y=y+9;
    while (array.length) 
        newArr.push(array.splice(0, 10));
   /**
    * @description Always checking the array length pushing into the new array 
    *              because the array is reinitialized always
    */
}
for(var i=1;i<=4;i++)
{
    console.log(i+" Player's cards: "+newArr[i-1]+"\n");
}