/******************************************************************************
 *  Execution       :   default node         cmd> node leapyear.js 
 *                      
 *  Purpose         :   checking whether the given year is leapyear or not
 * 
 *  @description    
 * 
 *  @file           : leapyear.js
 *  @overview       : leapyear module takes 4 digit year as input, check the year is leapyear or not
 *                    and print the result
 *  @module         : leapyear - 
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
function leapYear()
{
    read.question("enter the 4 digit year: ",function(year)
    {
        utility.leapyear(year);
        read.close();
    });
}
leapYear();
