var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function windchill()
{
    read.question("enter the value of temperature in Fahrenheit: ",function(t)
    {
        read.question("enter the value of wind speed in Miles/hr: ",function(v)
        {
            utility.windchill(t,v);
            read.close();
        });
    });
}
windchill();