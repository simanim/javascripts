/******************************************************************************
 *  Execution       :   default node         cmd> node helloname.js 
 *                      
 *  Purpose         :   taking username input and printing String Template “Hello <<UserName>>, How are you?”.
 * 
 *  @description    
 * 
 *  @file           : helloname.js
 *  @overview       : helloname module takes username as input and print the message 
 *                     “Hello <<UserName>>, How are you?”
 *  @module         : helloname - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 24-08-2018
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
function helloname()
{
    read.question("enter your name: ",function(username)
    {
        utility.helloname(username);
        read.close();
    });
}
helloname();