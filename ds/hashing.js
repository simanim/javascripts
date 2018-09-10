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
var readline=require('readline');
var utility=require('../utility/dsUtility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
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
    read.question("enter the number, you want to search: ",function(number)
    {
        if(isNaN(number)||number=="")
            console.log("invalid number");
        else
        {
            var output=utility.hashing(data,number);
            fs.writeFileSync("hashingFile.txt",output);
        }
        read.close();
    });
}
hashing();