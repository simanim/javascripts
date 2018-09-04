/******************************************************************************
 *  Execution       :   default node         cmd> node anagPal.js 
 *                      
 *  Purpose         :   program for finding the number 
 * 
 *  @description    
 * 
 *  @file           : findNum.js 
 *  @overview       : findNum module takes a command­line argument N, asks the users to think of a number
 *                    between 0 and N­-1, where N = 2^n, and always guesses the answer with n questions.
 *  @module         : findNum - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 03-09-2018
 *
 ******************************************************************************/
var utility=require('../utility/algorithmUtility.js');
var range=process.argv[2];
console.log("\n think a number between 0 and "+range);
console.log("\nfollow the instruction\n");
utility.findNum(range);