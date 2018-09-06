/******************************************************************************
 *  Execution       :   default node         cmd> node unOrdered.js 
 *                      
 *  Purpose         :   
 * 
 *  @description    
 * 
 *  @file           : unOrdered.js
 *  @overview       : unOrdered module
 *  @module         : unOrdered - 
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
function unOrdered()
{
    var fs = require("fs");
    try 
    {
        var data = fs.readFileSync("unOrderedFile.txt", "utf8");
    }
    catch(e)
    {
        console.log("Error:", e.stack);
    }
    read.question("enter the word, you want to search: ",function(word)
    {
        utility.unOrdered(data,word);
        read.close();
    });
}
unOrdered();