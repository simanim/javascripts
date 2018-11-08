/******************************************************************************
 *  Execution       :   default node         cmd> node deckOfCardSort.js 
 *                      
 *  Purpose         :   Shuffle the cards, distribute 9 Cards to 4 Players arrange the cards in a 
 *                      Queue implemented using Linked List and Print the Cards
 * 
 *  @description    
 * 
 *  @file           : deckOfCardSort.js
 *  @overview       : deckOfCardSort module shuffle the cards, distribute 9 Cards to 4 Players arrange the 
 *                    cards and Print the Cards the received by the 4 Players
 *  @module         : deckOfCardSort - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v10.10.0
 *  @since          : 15-09-2018
 *
 **********************************************************/
var queue=require('../utility/queue.js'); 
var list1=require('../utility/listClass');

var utility=require('../utility/oopsUtility.js');
var suit = ["♣", "♦", "♥", "♠"];
var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var deck = new Array();
/**
 * @description declaring an empty array
 */
for (var i = 0; i < suit.length; i++) {
    for (var j = 0; j < rank.length; j++) {
        var temp = "";
        deck.push(temp + rank[j] + suit[i]);
    }
}
for (var i = 0; i < deck.length; i++) 
{
/**
 * @description shuffling deck of cards
 */
    var index = parseInt(Math.random() * deck.length);
    var temp = deck[i];
    deck[i] = deck[index];
    deck[index] = temp;
}
var array2 = [];var x=0,y=9;
for (var i = 0; i < 4; i++) 
{
/**
 * @description shuffling deck of cards
 */
    var array = [];
    for (var j = x; j < y; j++) 
    {
        array.push(deck[j]);
    }
    var sorter = utility.Mysort('2345679891JQKA');
    array.sort(sorter);
    array2.push(array);
   /**
    * @description sorting the cards
    */
    x = x + 9;
    y = y + 9;
}
for(var i=1;i<=array2.length;i++)
{ 
    var list=new list1();
    for(var j=0;j<9;j++)
    {
        list.add(array2[i-1][j]);
       /**
        * @description cards of each players is added to linkedlist
        */
    }
    queue.enqueue(i+" player's cards :"+list.printList1()+"\n");
   /**
    * @description each linkedlist is added to queue
    */
}
queue.print();