/******************************************************************************
 *  Execution       :   default node         cmd> node insertionSort.js 
 *                      
 *  Purpose         :   Insertion Sort of a list of Words
 * 
 *  @description    
 * 
 *  @file           : insertionSort.js
 *  @overview       : insertionSort module takes string inputs from the users as word format and sorts
 *                    those words using insertion sort method.
 *  @module         : insertionSort - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 01-09-2018
 *
 ******************************************************************************/
var readlineSync=require('readline-sync');
var utility=require('../utility/algorithmUtility.js');
var array=[];
var size;
function insertionSort()
{
    size=readlineSync.question("\nenter the size of string array: ");
    for(var j=0;j<size;j++)
    {
        var word= readlineSync.question("enter the "+j+"th value : ");
        array.push(word);
    }
    console.log("String elements are: "+array+"\n");
    var insertion=utility.insertionSort(array,size);
    console.log("\nsorted array : "+insertion);
}
insertionSort();