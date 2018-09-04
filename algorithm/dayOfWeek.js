/******************************************************************************
 *  Execution       :   default node         cmd> node dayOfWeek.js 
 *                      
 *  Purpose         :   Printing day by taking date input
 * 
 *  @description    
 * 
 *  @file           : dayOfWeek.js prints day of week by taking date input
 *  @overview       : dayOfWeek module takes year, month, date as input and prints the day of week
 *  @module         : dayOfWeek - 
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
function dayOfWeek()
{
    read.question("enter the year : ",function(year)
    {
        read.question("enter the month number : ",function(month)
        {
            read.question("enter the date : ",function(date)
            {
                if(isNaN(year)||isNaN(month)||isNaN(date))
                    console.log("invalid inputs");
                else
                    utility.dayOfWeek(year,month,date);
                read.close();
            });
        });
    });
}
dayOfWeek();