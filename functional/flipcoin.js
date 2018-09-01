/******************************************************************************
 *  Execution       :   default node         cmd> node flipcoin.js 
 *                      
 *  Purpose         :   Flipping a coin and printing percentage of Heads and Tails
 * 
 *  @description    
 * 
 *  @file           : flipcoin.js
 *  @overview       : flipcoin module prints the percentage of getting head and tail 
 *                    by flipping a coin multiple times
 *  @module         : flipcoin - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 26-08-2018
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
function flipcoin()
{
   read.question("enter the time you want to flip the coin: ",function(input)
   {
        utility.flipcoin(input);
        read.close();
   });
}
flipcoin();