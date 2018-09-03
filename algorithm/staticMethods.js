/******************************************************************************
 *  Execution       :   default node         cmd> node staticMethods.js 
 *                      
 *  Purpose         :   taking list integers and strings and doing some static methods and returning 
 *                      the elapsed time
 * 
 *  @description    
 * 
 *  @file           : staticMethods.js
 *  @overview       : staticMethods module takes 2 list of values i.e, list of integers and list of strings.
 *                    it will perform 1.Binary Search 2.Insertion Sort 3.Bubble Sort 
 *                    and time elapsed for each task.
 *  @module         : staticMethods - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 01-09-2018
 *
 **********************************************************/
var readlineSync=require('readline-sync');
var utility=require('../utility/algorithmUtility.js');
var arrayInt=[];var sizeInt;
var arrayStr=[];var sizeStr;
var start; var stop;
function staticMethods()
{
    sizeInt=readlineSync.question("enter the size of integer array: ");
    if(isNaN(sizeInt))
    {
        console.log("you have not enter the valid input");
    }
    else
    {
        for(var i=0;i<sizeInt;i++)
        {
            var int= readlineSync.question("enter the "+i+"th value : ");
            arrayInt.push(Number(int));
        }
        console.log("Integer elements are: "+arrayInt);

        start=utility.currentTime();
        var insertionInt=utility.insertionSort(arrayInt,sizeInt);
        stop=utility.currentTime();
        console.log("\nsorted array(insertion sort) : "+insertionInt);
        console.log("elapsed time = "+utility.elapsedTime(start,stop)+" sec");

        start=utility.currentTime();
        var bubbleInt=utility.bubbleSort(arrayInt,sizeInt);
        stop=utility.currentTime();
        console.log("\nsorted array(bubble sort) : "+bubbleInt);
        console.log("elapsed time = "+utility.elapsedTime(start,stop)+" sec");

        start=utility.currentTime();
        var posInt=readlineSync.question("\nenter the value you want to search: ");
        utility.binarySearch(arrayInt,posInt);
        stop=utility.currentTime();
        console.log("elapsed time = "+utility.elapsedTime(start,stop)+" sec");
    }

    sizeStr=readlineSync.question("\nenter the size of string array: ");
    if(isNaN(sizeStr))
    {
        console.log("you have not enter the valid input");
    }
    else
    {
        for(var j=0;j<sizeStr;j++)
        {
            var str= readlineSync.question("enter the "+j+"th value : ");
            arrayStr.push(str);
        }
        console.log("String elements are: "+arrayStr+"\n");

        start=utility.currentTime();
        var insertionStr=utility.insertionSort(arrayStr,sizeStr);
        stop=utility.currentTime();
        console.log("\nsorted array(insertion sort) : "+insertionStr);
        console.log("elapsed time = "+utility.elapsedTime(start,stop)+" sec");

        start=utility.currentTime();
        var bubbleStr=utility.bubbleSort(arrayStr,sizeInt);
        stop=utility.currentTime();
        console.log("\nsorted array(bubble sort) : "+bubbleStr);
        console.log("elapsed time = "+utility.elapsedTime(start,stop)+" sec");

        start=utility.currentTime();
        var posStr=readlineSync.question("\nenter the string you want to search: ");
        utility.binarySearch(arrayStr,posStr);
        stop=utility.currentTime();
        console.log("elapsed time = "+utility.elapsedTime(start,stop)+" sec");
    }
}
staticMethods();