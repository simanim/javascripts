var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function leapYear()
{
    read.question("enter the 4 digit year: ",function(userinput)
    {
        utility.leapyear(userinput);
        read.close();
    });
}
leapYear();
