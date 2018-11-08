/******************************************************************************
 *  Execution       :   default node         cmd> node calenderStack.js 
 *                      
 *  Purpose         :   Printing the calenders in in stack by taking year and month as input
 * 
 *  @description    
 * 
 *  @file           : calenderStack.js
 *  @overview       : calenderStack module prints the calenders in stack by taking year and month as input
 *  @module         : calenderStack - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 12-09-2018
 *
 ******************************************************************************/
var readlineSync=require('readline-sync');
var utility=require('../utility/dsUtility.js');
function calenderStack()
{
    var input=readlineSync.question("enter the year and month :");
    input=input.split(" ");
    if(input[0]==""||isNaN(input[0])||input[0]<1||input[1]==""||isNaN(input[1])||input[1]<1||input[1]>12)
        return console.log("invalid input");
    utility.calenderStack(input[0],input[1]);
}
calenderStack();