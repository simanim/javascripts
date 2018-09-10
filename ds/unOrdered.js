/******************************************************************************
 *  Execution       :   default node         cmd> node unOrdered.js 
 *                      
 *  Purpose         :   Reading a text from a file,splitting and arranging it in a linkedlist
 *                      and by taking a string input from user, adding or removing from list.
 * 
 *  @description    
 * 
 *  @file           : unOrdered.js
 *  @overview       : unOrdered module reads a text from a file, splits it and takes input string from
 *                    users.if the word is present, it removes,otherwise it addes to file and saves.
 *  @module         : unOrdered - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 05-09-2018
 *
 **********************************************************/
var readline=require('readline');
var utility=require('../utility/dsUtility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function unOrdered()
{
    var fs = require("fs");
    try 
    {
        var data = fs.readFileSync("unOrderedFile.txt", "utf8");
       /**
        * @description reading the text from file "unOrderedFile.js"
        */
    }
    catch(e)
    {
        console.log("Error:", e.stack);
    }
    read.question("enter the word, you want to search: ",function(word)
    {
        if(word=="")
            console.log("invalid");
        else
        {
            var output=utility.unOrdered(data,word.toLowerCase());
            fs.writeFileSync("unOrderedFile.txt",output);
           /**
            * @description the changed text is saved to the file.
            */
        }
        read.close();
    });
}
unOrdered();