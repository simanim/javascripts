/******************************************************************************
 *  Execution       :   default node         cmd> node anagPal.js 
 *                      
 *  Purpose         :   Printing prime numbers that are Anagram and Palindrome
 * 
 *  @description    
 * 
 *  @file           : anagPal.js
 *  @overview       : anagPal module prints all the prime numbers which are anagram and palindrome
 *                    between 0 t0 1000.
 *  @module         : anagPal - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 31-08-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../utility/algorithmUtility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function anagPal()
{
    utility.anagPal(1,1000);
    read.close();
}
anagPal();