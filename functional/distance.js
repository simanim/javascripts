/******************************************************************************
 *  Execution       :   default node         cmd> node distance.js 
 *                      
 *  Purpose         :   printing distance of the given point from origin.
 * 
 *  @description    
 * 
 *  @file           : distance.js
 *  @overview       : distance module takes the co-ordinate of a point(x,y) and prints the distance of
 *                    that point from origin(0,0)
 *  @module         : distance - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 26-08-2018
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
function distance()
{
    read.question("enter the value of x: ",function(x)
    {
        read.question("enter the value of y: ",function(y)
        {
            utility.distance(x,y);
            read.close();
        });
    });
}
distance();