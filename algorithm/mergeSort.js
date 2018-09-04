/******************************************************************************
 *  Execution       :   default node         cmd> node mergeSort.js 
 *                      
 *  Purpose         :   Sorting of strings using Merge Sort Method
 * 
 *  @description    
 * 
 *  @file           : mergeSort.js
 *  @overview       : mergeSort module takes a list of string inputs and sorts that array using merge sort
 *  @module         : mergeSort - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 04-09-2018
 *
 ******************************************************************************/
var readlineSync=require('readline-sync');
var utility=require('../utility/algorithmUtility.js');
var array=[];
function mergeSort()
{
    size=readlineSync.question("enter the size of string array: ");
    if(isNaN(size))
    {
        console.log("you have not enter the valid input");
    }
    else
    {
        for(var i=0;i<size;i++)
        {
            var string= readlineSync.question("enter the "+i+"th value : ");
            array.push(string);
        }
        console.log("sorted array: "+utility.mergeSort(array));
    }
}
mergeSort();