var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function leafYear()
{
    read.question("enter the 4 digit year: ",function(userinput)
    {
        utility.leafyear(userinput);
        read.close();
    });
}
leafYear();