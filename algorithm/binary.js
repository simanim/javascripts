/******************************************************************************
 *  Execution       :   default node         cmd> node binary.js 
 *                      
 *  Purpose         :   program to takes a command­line argument and guess the answer with questions.
 * 
 *  @description    
 * 
 *  @file           : binary.js
 *  @overview       : binary module takes N commandline arguement and guess the answer with n question
 *                    where N=2^n
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
        if(isNaN(decimal))
            console.log("invalid input");
        else
        {
            utility.binary(utility.toBinary(decimal));
        }
        read.close();
    });
}
binary();