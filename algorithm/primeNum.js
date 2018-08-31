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
var utility=require('../utility/algorithmUtility.js');
function primeNum()
{
    var primeArray=utility.primeNum(1,1000);
    console.log("Prime numbers between 0 and 1000 are :"+primeArray);
}
primeNum();