/******************************************************************************
 *  Execution       :   default node         cmd> node calender.js 
 *                      
 *  Purpose         :   Printing the calenders in 2D array format by taking year and month as input
 * 
 *  @description    
 * 
 *  @file           : calender.js
 *  @overview       : calender module prints the calenders in 2D array format by taking year and month as input
 *  @module         : calender - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 08-09-2018
 *
 ******************************************************************************/
var readlineSync=require('readline-sync');
var utility=require('../utility/dsUtility.js');
function calender()
{
    var input=readlineSync.question("enter the year and month :");
    input=input.split(" ");
    if(input[0]==""||isNaN(input[0])||input[0]<1||input[1]==""||isNaN(input[1])||input[1]<1||input[1]>12)
        return console.log("invalid input");
    utility.calender(input[0],input[1]);
}
calender();