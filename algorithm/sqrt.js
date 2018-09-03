/******************************************************************************
 *  Execution       :   default node         cmd> node sqrt.js 
 *                      
 *  Purpose         :   Printing the square root of a number
 * 
 *  @description    
 * 
 *  @file           : sqrt.js
 *  @overview       : sqrt module takes non-negative number as input and prints its square-root
 *  @module         : sqrt - 
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
function sqrt()
{
    read.question("enter a positive number : ",function(number)
    {
        if(isNaN(number)||number<0)
            console.log("invalid input");
        else
            utility.sqrt(number);
        read.close();
    });
}
sqrt();