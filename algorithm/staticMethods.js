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
 *  @since          : 04-09-2018
 *
 **********************************************************/
var readlineSync=require('readline-sync');
var utility=require('../utility/algorithmUtility.js');
function staticMethods()
{
    var start,stop;

   /**
    * @description Binary Search of Integer Elements
    */
    var binArr=[];
    var array1=["2","5","6","8","11","12","13","15","16","19","20","22","25","26","28","30"];
    var valueInt=parseInt(readlineSync.question("enter the integer value you want to search(1-30)->"));
    for(var i=0;i<array1.length;i++)
    {
        binArr[i]=parseInt(array1[i]);
    }
    start=utility.currentTime();
    utility.binarySearch(binArr,valueInt);
    stop=utility.currentTime();
    console.log("elapsed time = "+(stop-start)+" milisec\n");

   /**
    * @description Insertion Sort of Integer Elements
    */
    var insertionArr=[];
    var IntInsertion=readlineSync.question("enter the integer elements(Insertion sort)-->");
    start=utility.currentTime();
    var arr1=IntInsertion.split(' ');
    for(var i=0;i<arr1.length;i++)
    {
        insertionArr[i]=parseInt(arr1[i]);
    }
    console.log("\nsorted array(insertion sort) : "+utility.insertionSort(insertionArr,arr1.length));
    stop=utility.currentTime();
    console.log("elapsed time = "+(stop-start)+" milisec\n");

   /**
    * @description Bubble Sort of Integer Elements
    */
    var bubbleArr=[];
    var IntBubble=readlineSync.question("enter the integer elements(Bubble sort)-->");
    start=utility.currentTime();
    var arr2=IntBubble.split(' ');
    for(var i=0;i<arr2.length;i++)
    {
        bubbleArr[i]=parseInt(arr2[i]);
    }
    console.log("\nsorted array(bubble sort) : "+utility.bubbleSort(bubbleArr,arr2.length));
    stop=utility.currentTime();
    console.log("elapsed time = "+(stop-start)+" milisec\n");

   /**
    * @description Binary Search of String Elements
    */
    var array2=["a","b","c","d","f","h","i","j","m","o","r","s","t","v","y","z"];
    var valueStr=readlineSync.question("enter the string value you want to search(a-z)->");
    start=utility.currentTime();
    utility.binarySearch(array2,valueStr);
    stop=utility.currentTime();
    console.log("elapsed time = "+(stop-start)+" milisec\n");

   /**
    * @description Insertion Sort of String Elements
    */
    var StrInsertion=readlineSync.question("enter the string elements(Insertion sort)-->");
    start=utility.currentTime();
    var arr3=StrInsertion.split(' ');
    console.log("\nsorted array(insertion sort) : "+utility.insertionSort(arr3,arr3.length));
    stop=utility.currentTime();
    console.log("elapsed time = "+(stop-start)+" milisec\n");

   /**
    * @description Bubble Sort of String Elements
    */
    var StrBubble=readlineSync.question("enter the integer elements(Bubble sort)-->");
    start=utility.currentTime();
    var arr4=StrBubble.split(' ');
    console.log("\nsorted array(bubble sort) : "+utility.bubbleSort(arr4,arr4.length));
    stop=utility.currentTime();
    console.log("elapsed time = "+(stop-start)+" milisec\n");
}
staticMethods();