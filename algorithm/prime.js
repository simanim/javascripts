/******************************************************************************
 *  Execution       :   default node         cmd> node prime.js 
 *                      
 *  Purpose         :   Printing all the Prime Factors of the given number
 * 
 *  @description    
 * 
 *  @file           : prime.js
 *  @overview       : prime module takes the number as input and prints the prime factors of that number
 *  @module         : prime - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 25-08-2018
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
function prime()
{
    read.question("enter the number to find the prime factor: ",function(number)
    {
        utility.prime(number);
        read.close();
    });
}
prime();