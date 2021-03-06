/******************************************************************************
 *  Execution       :   default node         cmd> node ordered.js 
 *                      
 *  Purpose         :   Taking a list of numbers from a file,arranging it in ascending order in a linkedlist
 *                      and by taking a number from user, adding or removing from list.
 * 
 *  @description    
 * 
 *  @file           : ordered.js
 *  @overview       : ordered module takes a list of numbers from a file,arranges it in ascending order 
 *                    in a linkedlist. it takes a number from user and finds the number in the list.
 *                    if it is present, removes it and if not present, adds it and saves to file.
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
var fs = require("fs");
try 
{
    var data = fs.readFileSync("orderedFile.txt", "utf8");
}
catch(e)
{
    console.log("Error:", e.stack);
}
console.log(data);
data = data.toString().split(' ');
data.sort(function (a, b) {
    return a - b;
});
function ordered()
{
    read.question('Enter the element to search: ', function (number)
    {
        if(isNaN(number)||number=="") 
        {
            console.log("Please enter a valid input");
            return;
        }
        string=utility.ordered(data,number);
        fs.writeFileSync('/home/bridgeit/myJavascripts/ds/orderedFile.txt', string);
        read.close();

    });
}
ordered();