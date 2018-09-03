/******************************************************************************
 *  Execution       :   default node         cmd> node bubbleSort.js 
 *                      
 *  Purpose         :   Bubble Sort of a list of Words
 * 
 *  @description    
 * 
 *  @file           : bubbleSort.js
 *  @overview       : bubbleSort module takes string inputs from the users as word format and sorts
 *                    those words using bubble sort method.
 *  @module         : bubbleSort - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 01-09-2018
 *
 ******************************************************************************/
var readlineSync=require('readline-sync');
var utility=require('../utility/algorithmUtility.js');
var array=[];
var size;
function bubbleSort()
{
    size=readlineSync.question("\nenter the size of string array: ");
    if(isNaN(size))
    {
        console.log("you have not enter the valid input");
    }
    else
    {
        for(var j=0;j<size;j++)
        {
            var word= readlineSync.question("enter the "+j+"th value : ");
            array.push(word);
        }
        console.log("String elements are: "+array+"\n");
        var bubbleSort=utility.bubbleSort(array,size);
        console.log("\nsorted array : "+bubbleSort);
    }
}
bubbleSort();