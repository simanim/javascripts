var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function array()
{
    read.question("eneter the row size: ",function(row)
    {
        read.question("enter the column size: ",function(col)
        {
            utility.array(read,row,col); 
        });
    });
}
array();