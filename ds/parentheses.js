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
function parentheses()
{
    read.question("enter the expression: ",function(exp)
    {
        utility.parentheses(exp);
        read.close();
    });       
}
parentheses();