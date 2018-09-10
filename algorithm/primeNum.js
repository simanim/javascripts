/******************************************************************************
 *  Execution       :   default node         cmd> node primeNum.js 
 *                      
 *  Purpose         :   Printing prime numbers between 0 to 1000
 * 
 *  @description    
 * 
 *  @file           : primeNum.js
 *  @overview       : primeNum module prints all the prime numbers between 0 to 1000
 *  @module         : primeNum - 
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
function primeNum()
{
    read.question("enter the min value between 1 to 1000: ", function(min)
    {
        read.question("enter the max value between 1 to 1000: ", function(max)
        {
            if(min==0)min=1;
            min=parseInt(min);
            max=parseInt(max);if(min==0)min=1;
            if(isNaN(min)||(min=="")||isNaN(max)||(max=="")||min>=max||min<1||max>1000)
                console.log("invalid input");
            else
                console.log("Prime numbers are :"+utility.primeNum(min,max));
            read.close();
        });
    });
}
primeNum();