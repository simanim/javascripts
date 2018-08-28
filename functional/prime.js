var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function prime()
{
    read.question("enter the number to find the prime factor: ",function(userinput)
    {
        utility.prime(userinput);
        read.close();
    });
}
prime();