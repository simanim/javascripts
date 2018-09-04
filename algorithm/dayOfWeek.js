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
var readlineSync=require('readline-sync');
var utility=require('../utility/algorithmUtility.js');
function dayOfWeek()
{
    var date=readlineSync.question("enter the year, month and date-->");
    var array=date.split(' ');
   /**
    * @description values are taken in command line and storing in an array by splitting the string
    */
    if(isNaN(array[0])||isNaN(array[1])||isNaN(array[2]))
        console.log("invalid inputs");
    else
        utility.dayOfWeek(arr1[0],arr1[1],arr1[2]);           
}
dayOfWeek();