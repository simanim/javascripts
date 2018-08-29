var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function permutation()
{
    read.question("enter the string: ",function(input)
    {
        var string=input.split("");
        utility.permutation(string,0,string.length-1);    
        read.close();
    });
}
permutation();