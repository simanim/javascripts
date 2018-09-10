/******************************************************************************
 *  Execution       :   default node         cmd> node anagramQueue.js 
 *                      
 *  Purpose         :   Printing prime numbers between 1 to 1000 that are Anagram, in queue format.
 * 
 *  @description    
 * 
 *  @file           : anagramQueue.js
 *  @overview       : anagramQueue module prints all the prime numbers between 1 to 1000 that are Anagram,
 *                    in queue format
 *  @module         : anagramQueue - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 08-09-2018
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
function anagramQueue()
{
    read.question("enter the minimum value : ",function(min)
    {
        read.question("enter the maximum value : ",function(max)
        {
            if(isNaN(min)||(min=="")||isNaN(max)||(max=="")||min<0||max>1000)
                console.log("invalid input");
            else{
                if(min==0)
                    min=1;
                utility.anagramQueue(min,max);
            }
            read.close();
        });
    });
}
anagramQueue();