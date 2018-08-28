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
        utility.permutation(input);    
        read.close();
    });
}
permutation();