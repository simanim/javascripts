/******************************************************************************
 *  Execution       :   default node         cmd> node cashCounter.js 
 *                      
 *  Purpose         :   Simulating Banking Cash Counter
 * 
 *  @description    
 * 
 *  @file           : cashCounter.js
 *  @overview       : cashCounter module simulates bank cash counter by adding people in a queue and after 
 *                    deposit or withdraw of cash, it removes people
 *  @module         : cashCounter - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 08-09-2018
 *
 ******************************************************************************/
var readlineSync=require('readline-sync');
var utility=require('../utility/dsUtility.js');
function cashCounter()
{
    var people=readlineSync.question("enter number of people standing in the queue: ");
    if(people==""||isNaN(people)||people<1)
        return console.log("invalid");
    utility.cashCounter(readlineSync,people);
}
cashCounter();