/******************************************************************************
 *  Execution       :   default node         cmd> node quadratic.js 
 *                      
 *  Purpose         :   printing the roots of the quadratic equation, a*x*x + b*x + c
 * 
 *  @description    
 * 
 *  @file           : quadratic.js
 *  @overview       : quadratic module takes values of a,b,c and gives the roots of x
 *  @module         : quadratic - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 25-08-2018
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
function quadratic()
{
    read.question("enter the value of a: ",function(a)
    {
        read.question("enter the value of b: ",function(b)
        { 
            read.question("enter the value of c: ",function(c)
            { 
                utility.quadratic(a,b,c);
                read.close();
            });
        });
    });
}
quadratic();