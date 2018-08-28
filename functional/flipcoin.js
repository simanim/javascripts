var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function flipcoin()
{
   read.question("enter the time you want to flip the coin: ",function(userinput)
   {
        utility.flipcoin(userinput);
        read.close();
   });
}
flipcoin();