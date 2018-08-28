var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function quadratic()
{
    read.question("enter the value of a: ",function(a)
    {
        read.question("enter the value of b: ",function(b)
        { 
            read.question("enter the value of c: ",function(c)
            { 
                utility.quadratic(a,b,c);
                read.close();
            });
        });
    });
}
quadratic();