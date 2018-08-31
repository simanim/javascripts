/******************************************************************************
 *  Execution       :   default node         cmd> node staticMethods.js 
 *                      
 *  Purpose         :   
 * 
 *  @description    
 * 
 *  @file           : staticMethods.js
 *  @overview       : staticMethods module 
 *  @module         : staticMethods - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 31-08-2018
 *
 **********************************************************/
var readline=require('readline');
var algorithmUtility=require('../utility/algorithmUtility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function staticMethods()
{
    read.question("enter the size of array: ",function(size)
    {
        algorithmUtility.staticMethods(read,size);
    });
}
staticMethods();