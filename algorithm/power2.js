/******************************************************************************
 *  Execution       :   default node         cmd> node power2.js 
 *                      
 *  Purpose         :   printing the table of power of 2
 * 
 *  @description    
 * 
 *  @file           : power2.js
 *  @overview       : power2 module takes N as input and prints a table of the
                      powers of 2 that are less than or equal to 2^N.
 *  @module         : power2 - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 24-08-2018
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
function power2()
{   
    read.question("enter the power value : ",function(N)
    {   
        utility.power2(N);
        read.close();
    });
}
power2();