/******************************************************************************
 *  Execution       :   default node         cmd> node permutation.js 
 *                      
 *  Purpose         :   printing all the permutations of given string.
 * 
 *  @description    
 * 
 *  @file           : permutation.js
 *  @overview       : permutation module takes a string as input and it prints all the permutations
 *  @module         : permutation - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 29-08-2018
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
function permutation()
{
    read.question("enter the string: ",function(input)
    {
        var string=input.split(""); 
       /**
        * @description splitting the string and store each character in an array called string
        */ 
        utility.permutation(string,0,string.length-1);    
        read.close();
    });
}
permutation();