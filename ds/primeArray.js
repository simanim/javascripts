/******************************************************************************
 *  Execution       :   default node         cmd> node primeArray.js 
 *                      
 *  Purpose         :   Printing all the prime number between 1 to 1000 in 2D array format
 * 
 *  @description    
 * 
 *  @file           : primeArray.js
 *  @overview       : primeArray module prints all the prime numbers between 1 to 1000 in 2D format
 *  @module         : primeArray - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 07-09-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../utility/dsUtility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function primeArray()
{
    read.question("enter the minimum value : ",function(min)
    {
        read.question("enter the maximum value : ",function(max)
        {
            if(isNaN(min)||(min=="")||isNaN(max)||(max=="")||min<0||max>1000||min>max)
                console.log("invalid input");
            else{
                if(min==0)
                    min=1;
                utility.primeArray(min,max);
            }
            read.close();
        });
    });
}
primeArray();