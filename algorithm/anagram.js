/******************************************************************************
 *  Execution       :   default node         cmd> node anagram.js 
 *                      
 *  Purpose         :   program for checking two strings are anagram or not
 * 
 *  @description    
 * 
 *  @file           : anagram.js
 *  @overview       : anagram module takes 2 strings as input and checks the strings are anagram or not.
 *  @module         : anagram - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 31-08-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../utility/algorithmUtility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function anagram()
{
    read.question("enter the first string: ",function(str1)
    {
        read.question("enter the second string: ",function(str2)
        {
            if(str1=="" || str2=="")
                console.log("invalid");
            else
            {
                var string1=str1.trim();
                var string2=str2.trim();
                var result=utility.anagram(string1,string2);
                if(string1.length==string2.length)
                {
                    if(result[0]==result[1])
                    {
                        console.log("Two Strings are ANAGRAM");
                    }
                    else
                    {
                        console.log("Two Strings are NOT ANAGRAM");
                    }
                }
            }
            read.close();
        });
    })
}
anagram();