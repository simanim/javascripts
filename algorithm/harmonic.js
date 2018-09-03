/******************************************************************************
 *  Execution       :   default node         cmd> node harmonic.js 
 *                      
 *  Purpose         :   Printing the Nth harmonic number: 1/1 + 1/2 + ... + 1/N
 * 
 *  @description    
 * 
 *  @file           : harmonic.js
 *  @overview       : harmonic module takes the input N and prints the harmonic number in fraction form
 *  @module         : harmonic - 
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
function harmonic()
{
    read.question("enter the harmonic value: ",function(userinput)
    {
        utility.harmonic(userinput);
        read.close();
    });
}
harmonic();