/******************************************************************************
 *  Execution       :   default node         cmd> node anagPal.js 
 *                      
 *  Purpose         :   Printing prime numbers that are Anagram and Palindrome
 * 
 *  @description    
 * 
 *  @file           : findNum.js
 *  @overview       : findNum module 
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