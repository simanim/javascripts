var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function harmonic()
{
    read.question("enter the harmonic value: ",function(userinput)
    {
        utility.harmonic(userinput);
        read.close();
    });
}
harmonic();