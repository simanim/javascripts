/******************************************************************************
 *  Execution       :   default node         cmd> node toBinary.js 
 *                      
 *  Purpose         :   program for representing decimal to binary value
 * 
 *  @description    
 * 
 *  @file           : toBinary.js
 *  @overview       : toBinary module takes decimal input and prints its binary value
 *  @module         : toBinary - 
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
function toBinary()
{
    read.question("enter the decimal value : ",function(decimal)
    {
        if(isNaN(decimal)||decimal=="")
            console.log("invalid input");
        else
        {
            console.log("binary value of "+decimal+" is : "+(utility.toBinary(decimal)).join(""));
        }
        read.close();
    });
}
toBinary();