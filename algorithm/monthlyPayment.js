/******************************************************************************
 *  Execution       :   default node         cmd> node monthlyPayment.js 
 *                      
 *  Purpose         :   Calculating the monthly payment by using formula
 * 
 *  @description    
 * 
 *  @file           : monthlyPayment.js
 *  @overview       : monthlyPayment module takes 3 inputs i.e,principle amount,time in year,interest
 *                    and returns monthly payment amount.
 *  @module         : monthlyPayment - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 01-09-2018
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
function monthlyPayment()
{
    read.question("enter the principal amount: ",function(P)
    {
        read.question("enter the time in year: ",function(Y)
        {
            read.question("enter the percent of interest per year: ",function(R)
            {
                utility.monthlyPayment(P,Y,R);
                read.close();
            });
        });
    });
}
monthlyPayment();