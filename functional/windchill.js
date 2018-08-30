/******************************************************************************
 *  Execution       :   default node         cmd> node windchill.js 
 *                      
 *  Purpose         :   printing the roots of the quadratic equation, a*x*x + b*x + c
 * 
 *  @description    
 * 
 *  @file           : windchill.js
 *  @overview       : windchill module takes temperature(t) and wind-pressure(v) as inputs and calculates the 
 *                    value of windchill and prints the result.
 *  @module         : windchill - 
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
function windchill()
{
    read.question("enter the value of temperature in Fahrenheit(0 to 50): ",function(t)
    {
        read.question("enter the value of wind speed in Miles/hr(3 to 120): ",function(v)
        {
            utility.windchill(t,v);
            read.close();
        });
    });
}
windchill();