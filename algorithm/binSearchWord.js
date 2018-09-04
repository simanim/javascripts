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
// var readlineSync=require('readline-sync');
// var utility=require('../utility/algorithmUtility.js');
// var array=[];
// var size;
var readline=require('readline');
var utility=require('../utility/algorithmUtility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function binSearchWord()
{
    var fs = require("fs");
    try 
    {
        var data = fs.readFileSync("binSearch.txt", "utf8");
    }
    catch(e)
    {
        console.log("Error:", e.stack);
    }
    var arr = data.split(" ");
    var array=arr.sort();
    read.question("\nenter the string you want to search: ",function(word)
    {
        utility.binarySearch(array,word);
        read.close();
    });
}
binSearchWord();