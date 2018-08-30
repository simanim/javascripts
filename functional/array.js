/******************************************************************************
 *  Execution       :   default node         cmd> node array.js 
 *                      
 *  Purpose         :   program to reading values in 2D arrays and printing them
 * 
 *  @description    
 * 
 *  @file           : array.js
 *  @overview       : array module takes the elements of the 2D_array and it prints the array
 *  @module         : array - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 28-08-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function array()
{
    read.question("eneter the row size: ",function(row)
    {
        read.question("enter the column size: ",function(col)
        {
            utility.array(read,row,col); 
        });
    });
}
array();