/******************************************************************************
 *  Execution       :   default node         cmd> node binary.js 
 *                      
 *  Purpose         :   program to covert decimal to binary and performing some functions
 * 
 *  @description    
 * 
 *  @file           : binary.js
 *  @overview       : program for converting a decimal to binary and 
 *                      1.Swapping nibbles and finding the new number
 *                      2.Finding the resultant number is the number is a power of 2
 *  @module         : binary - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 03-09-2018
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
function binary()
{
    read.question("enter the decimal value : ",function(decimal)
    {
        if(isNaN(decimal)||(decimal==""))
            console.log("invalid input");
        else
        {
            var bin=utility.toBinary(decimal);
            console.log("binary value of "+decimal+" is: "+bin.join(""));
            utility.binary(bin);
        }
        read.close();
    });
}
binary();