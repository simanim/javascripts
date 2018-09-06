/******************************************************************************
 *  Execution       :   default node         cmd> node ordered.js 
 *                      
 *  Purpose         :   
 * 
 *  @description    
 * 
 *  @file           : ordered.js
 *  @overview       : ordered module
 *  @module         : ordered - 
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
function ordered()
{
    var fs = require("fs");
    try 
    {
        var data = fs.readFileSync("orderedFile.txt", "utf8");
    }
    catch(e)
    {
        console.log("Error:", e.stack);
    }
    read.question("enter the number, you want to search: ",function(number)
    {
        utility.ordered(data,number);
        read.close();
    });
}
ordered();