/******************************************************************************
 *  Execution       :   default node         cmd> node stopwatch.js 
 *                      
 *  Purpose         :   Measuring the time that elapses between the start and end clicks
 * 
 *  @description    
 * 
 *  @file           : stopwatch.js
 *  @overview       : stopwatch module measures the elapsed time between start_click and end_click
 *  @module         : stopwatch - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v.4.2.6
 *  @since          : 29-08-2018
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
function stopwatch()
{   
    read.question("enter to start",function()
    {   
        var start=utility.currentTime();
       /**
        * @description to get starting time
        */
        read.question("enter to stop",function()
        {
            var stop=utility.currentTime();
           /**
            * @description to get stop time
            */
            utility.elapsedTime(start,stop);
            read.close();
        });
    });
}
stopwatch();