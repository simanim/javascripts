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