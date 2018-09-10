/******************************************************************************
 *  Execution       :   default node         cmd> node hashing.js 
 *                      
 *  Purpose         :   Hashing Function to search a Number in a slot
 * 
 *  @description    
 * 
 *  @file           : hashing.js
 *  @overview       : hashing module takes input from file and word to search and add the number to file, 
 *                    if not present. remove ,if present.
 *  @module         : hashing - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 05-09-2018
 *
 **********************************************************/
var readlineSync=require('readline-sync');
var utility=require('../utility/oopsUtility.js');

function demonstration()
{
    var firstName=readlineSync.question("enter the first name: ");
}
demonstration();