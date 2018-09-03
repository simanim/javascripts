/******************************************************************************
 *  Execution       :   default node         cmd> node binSearchWord.js 
 *                      
 *  Purpose         :   reading a list of words from users and doing binary search of a particular
 *                      word given by user.
 * 
 *  @description    
 * 
 *  @file           : binSearchWord.js
 *  @overview       : binSearchWord module takes a list of words from users and search for a particular
 *                    word given by user and returns the position of that word.
 *  @module         : binSearchWord - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 01-09-2018
 *
 **********************************************************/
var readlineSync=require('readline-sync');
var utility=require('../utility/algorithmUtility.js');
var array=[];
var size;
function binSearchWord()
{
    size=readlineSync.question("\nenter the size of string array: ");
    if(isNaN(size))
    {
        console.log("you have not enter the valid input");
    }
    else
    {
        for(var j=0;j<size;j++)
        {
            var word= readlineSync.question("enter the "+j+"th value : ");
            array.push(word);
        }
        console.log("String elements are: "+array+"\n");
        array.sort();
        console.log("Sorted elements are: "+array+"\n");
        var position=readlineSync.question("\nenter the string you want to search: ");
        utility.binarySearch(array,position);
    }
}
binSearchWord();