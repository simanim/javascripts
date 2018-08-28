var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function power()
{   
    read.question("enter the power value : ",function(userinput)
    {   
        utility.power(userinput);
        read.close();
    });
}
power();