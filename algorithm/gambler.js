/******************************************************************************
 *  Execution       :   default node         cmd> node gambler.js 
 *                      
 *  Purpose         :   Simulating a gambler startting with $stake and place fair $1 bets until
                        he/she goes broke or reach $goal.
 * 
 *  @description    
 * 
 *  @file           : gambler.js
 *  @overview       : gambler module takes 3 inputs stake,goal,time and it will return the score
 *  @module         : gambler - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 27-08-2018
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
function gambler()
{
    read.question("enter stake: ",function(stake)
    {
        read.question("enter goal: ",function(goal)
        { 
            read.question("how many times you want to play the game: ",function(time)
            { 
                utility.gambler(stake,goal,time);
                read.close();
            });
        });
    });
}
gambler();