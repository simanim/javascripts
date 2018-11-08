/******************************************************************************
 *  Execution       :   default node         cmd> node parentheses.js 
 *                      
 *  Purpose         :   Simple Balanced Parentheses
 * 
 *  @description    
 * 
 *  @file           : parentheses.js
 *  @overview       : parentheses module takes a expression as input and checks it is balanced or not
 *  @module         : parentheses - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 06-09-2018
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
function parentheses()
{
    read.question("enter the expression: ",function(exp)
    {
        if(exp=="")
            console.log("invalid");
        else
            utility.parentheses(exp);
        read.close();
    });       
}
parentheses();