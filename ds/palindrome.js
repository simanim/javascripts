/******************************************************************************
 *  Execution       :   default node         cmd> node palindrome.js 
 *                      
 *  Purpose         :   Palindrome checker
 * 
 *  @description    
 * 
 *  @file           : palindrome.js
 *  @overview       : palindrome module takes a string input from users and check the string is palindrome
 *                    or not using deque.
 *  @module         : palindrome - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 07-09-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../utility/dsUtility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function palindrome()
{
    read.question("enter the word: ", function(word)
    {
        if(word=="")
            console.log("invalid input");
        else{
        var word1=word.toUpperCase().trim();
        utility.palindrome(word1);
        }
        read.close();
    });
}
palindrome();