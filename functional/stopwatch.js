var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function stopwatch()
{   
    read.question("enter to start",function()
    {   
        var start=utility.currentTime(); //to get starting time
        read.question("enter to stop",function()
        {
            var stop=utility.currentTime(); // to get stopping time
            utility.elapsedTime(start,stop);
            read.close();
        });
    });
}
stopwatch();