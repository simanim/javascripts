/******************************************************************************
 *  Execution       :   default node         cmd> node demonstration.js 
 *                      
 *  Purpose         :   Reading a text from a file and replace the strings
 * 
 *  @description    
 * 
 *  @file           : demonstration.js
 *  @overview       : demonstration module reads a file and takes input from users(firstName,fullName,
 *                    contactNo and date of joinig)and replace the firstName as users 
 *                    first name, fullName as users full name, contact number and date of joining
 *  @module         : demonstration - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 11-09-2018
 *
 **********************************************************/
var readlineSync=require('readline-sync');
var utility=require('../utility/oopsUtility.js');

function demonstration()
{
    var firstName=readlineSync.question("enter your first name: ");
    var fullName=readlineSync.question("enter your full name: ");
    var contactNo=readlineSync.question("enter your contact number: ");
    var date=readlineSync.question("enter your date of joining in dd/mm/yyyy format: ");
    var fs = require("fs");
    try 
    {
        var data = fs.readFileSync("demonstrationFile.txt", "utf8");
    }
    catch(e)
    {
        console.log("Error:", e.stack);
    }
    
    utility.demonstration(data,firstName,fullName,contactNo,date);
    
}
demonstration();