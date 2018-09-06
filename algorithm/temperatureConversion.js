/******************************************************************************
 *  Execution       :   default node         cmd> node temperatureConversion.js 
 *                      
 *  Purpose         :   Converting temperature from Celsius to Fahrenheit and viceversa.
 * 
 *  @description    
 * 
 *  @file           : temperatureConversion.js
 *  @overview       : temperatureConversion module takes temperature value in Celsius and converts it 
 *                    to Fahrenheit and Fahrenheit to Celsius.
 *  @module         : temperatureConversion - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 01-09-2018
 *
 ******************************************************************************/
var readlineSync=require('readline-sync');
var utility=require('../utility/algorithmUtility.js');
function temperatureConversion()
{
    var celsius=readlineSync.question("enter the temperature in Celsius: ");
    if(isNaN(celsius)||celsius=="")
        console.log("please enter a valid input");
    else
        utility.temperatureConversion(celsius,1);
    var fahrenheit=readlineSync.question("enter the temperature in Fahrenheit: ");
    if(isNaN(fahrenheit)||fahrenheit=="")
        console.log("please enter a valid input");
    else
        utility.temperatureConversion(fahrenheit,0);
}
temperatureConversion();