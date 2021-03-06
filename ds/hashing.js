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
var utility=require('../utility/dsUtility.js');

function hashing()
{
    var fs = require("fs");
    try 
    {
        var data = fs.readFileSync("hashingFile.txt", "utf8");
    }
    catch(e)
    {
        console.log("Error:", e.stack);
    }
    var size=parseInt(readlineSync.question("enter the size of array: "));
    if(isNaN(size)||size=="")
        return console.log("invalid number");
    var number=parseInt(readlineSync.question("enter the number you want to search: "));
        if(isNaN(number)||number=="")
        return console.log("invalid number");
    
    var dataArray=data.split(" ");
    var output=utility.hashing(dataArray,size,number);
    fs.writeFileSync("hashingFile.txt",output);
}
hashing();