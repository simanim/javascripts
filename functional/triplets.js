/******************************************************************************
 *  Execution       :   default node         cmd> node triplets.js 
 *                      
 *  Purpose         :   program to count the number of triples that sum to exactly 0.
 * 
 *  @description    
 * 
 *  @file           : triplets.js
 *  @overview       : triplets module takes the elements from user and prints the triplets that sum is 0
 *                    and the number of triplets
 *  @module         : triplets - 
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
function triplets()
{
    read.question("enter the size: ",function(size)
    {
            utility.triplets(read,size);
    });
}
triplets();