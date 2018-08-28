var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function triplets()
{
    read.question("eneter the size: ",function(size)
    {
            utility.triplets(read,size);
    });
}
triplets();