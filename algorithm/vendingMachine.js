/******************************************************************************
 *  Execution       :   default node         cmd> node vendingMachine.js 
 *                      
 *  Purpose         :   calculating the minimum number of notes as well as the notes to be returned 
 *                      by the Vending Machine as a Change
 * 
 *  @description    
 * 
 *  @file           : vendingMachine.js
 *  @overview       : vendingMachine module takes amount of money as input and returns the minimum number 
 *                    of notes as well as the notes returned by vending machine 
 *  @module         : vendingMachine - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 03-09-2018
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
function vendingMachine()
{
    read.question("enter the amount: ",function(amount)
    {
        if(isNaN(amount))
            console.log("invalid input");
        else
            utility.vendingMachine(amount);
        read.close();
    });
}
vendingMachine();