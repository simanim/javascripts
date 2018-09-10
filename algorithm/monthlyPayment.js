/******************************************************************************
 *  Execution       :   default node         cmd> node monthlyPayment.js 
 *                      
 *  Purpose         :   Calculating the monthly payment by using formula
 * 
 *  @description    
 * 
 *  @file           : monthlyPayment.js
 *  @overview       : monthlyPayment module takes 3 inputs i.e,principle amount,time in year,interest
 *                    and returns monthly payment amount.
 *  @module         : monthlyPayment - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 01-09-2018
 *
 ******************************************************************************/
var readlineSync=require('readline-sync');
var utility=require('../utility/algorithmUtility.js');
function monthlyPayment()
{
    var input=readlineSync.question("enter principal amount,time in year and interest percent in year-->");
    var inputArr=input.split(' ');
   /**
    * @description values are taken in command line and storing in an array by splitting the string
    */
    if(isNaN(inputArr[0])||isNaN(inputArr[1])||isNaN(inputArr[2])||
    inputArr[0]==""||inputArr[0]==""||inputArr[0]=="")
        console.log("Enter valid inputs");
    else
        utility.monthlyPayment(inputArr[0],inputArr[1],inputArr[2]);
}
monthlyPayment();