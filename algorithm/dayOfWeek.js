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
    var day=31;
    var date=readlineSync.question("enter the year, month and date-->");
    var array=date.split(' ');
   /**
    * @description values are taken in command line and storing in an array by splitting the string
    */
    if(array[1]==2)
    {
        if(((array[0]%4==0)&&(array[0]%100!=0))||(array[0]%400==0))
        {
        day=29;
        }
        else day=28;
    }
<<<<<<< HEAD
    else if(array[1]==4||array[1]==6||array[1]==9||array[1]==11)
    {
       day=30;
    }
=======
   else if(array[1]==4||array[1]==6||array[1]==9||array[1]==11)
   {
       day=30;
   }
>>>>>>> d1d46546f329df9db3f9c76df25ee1917336220e
    if(isNaN(array[0])||isNaN(array[1])||isNaN(array[2])||(array[0]=="")||(array[1]=="")||(array[2]=="")||
        (array[0]<0)||(array[1]>12)||(array[1]<0)||(array[2]>day)||(array[2]<0))
        console.log("invalid inputs");
    else
        utility.dayOfWeek(array[0],array[1],array[2]);           
}
dayOfWeek();