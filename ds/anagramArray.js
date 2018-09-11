/******************************************************************************
 *  Execution       :   default node         cmd> node anagramArray.js 
 *                      
 *  Purpose         :   Printing prime numbers between 1 to 1000 that are Anagram, in 2D array format
 * 
 *  @description    
 * 
 *  @file           : anagramArray.js
 *  @overview       : anagramArray module prints all the prime numbers between 1 to 1000 that are Anagram,
 *                    in 2D array format
 *  @module         : anagramArray - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 07-09-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../utility/dsUtility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function anagramArray()
{
    read.question("enter the minimum value : ",function(min)
    {
        read.question("enter the maximum value : ",function(max)
        {
            if(isNaN(min)||(min=="")||isNaN(max)||(max=="")||min<0||max>1000)
                console.log("invalid input");
            else{
                try{
                    if(min==0)   min=1;
                    utility.anagramArray(min,max);
                }
                catch(err) {
                    console.log("error");
                }

            }
            read.close();
        });
    });
}
anagramArray();