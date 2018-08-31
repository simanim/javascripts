/******************************************************************************
 *  Execution       :   default node         cmd> node AnagPal.js 
 *                      
 *  Purpose         :   Printing prime numbers between 0 to 1000
 * 
 *  @description    
 * 
 *  @file           : AnagPal.js
 *  @overview       : AnagPal module 
 *  @module         : AnagPal - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 31-08-2018
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
function AnagPal()
{
    utility.AnagPal(1,1000);
    read.close();
}
AnagPal();