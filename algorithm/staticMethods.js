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
    var start=utility.currentTime();
   /**
    * @description Binary Search of Integer Elements
    */
    var binArr=[];
    var start1=utility.currentTime();
    var array1=["2","5","6","8","11","12","13","15","16","19","20","22","25","26","28","30"];
    var valueInt=readlineSync.question("enter the integer value you want to search(1-30)->");
    if(valueInt==""||isNaN(valueInt))
        console.log("\ninvalid");
    else
    {
        for(var i=0;i<array1.length;i++)
        {
            binArr[i]=parseInt(array1[i]);
        }
        utility.binarySearch(binArr,parseInt(valueInt));
    }
    var stop1=utility.currentTime();
    console.log("\nelapsed time = "+((stop1-start1)/1000)+" sec\n");
    

   /**
    * @description Insertion Sort of Integer Elements
    */
    var insertionArr=[];
    var start2=utility.currentTime();
    var IntInsertion=readlineSync.question("\nenter the integer elements(Insertion sort)-->");
    if(IntInsertion=="")
        console.log("\ninvalid");
    else
    {
        var arr1=IntInsertion.split(' ');
        for(var i=0;i<arr1.length;i++)
        {
            insertionArr[i]=parseInt(arr1[i]);
        }
        console.log("\nsorted array(insertion sort) : "+utility.insertionSortInt(insertionArr,arr1.length));
    }
    var stop2=utility.currentTime();
    console.log("\nelapsed time = "+((stop2-start2)/1000)+" sec");
    

   /**
    * @description Bubble Sort of Integer Elements
    */
    var bubbleArr=[];
    var start3=utility.currentTime();
    var IntBubble=readlineSync.question("\nenter the integer elements(Bubble sort)-->");
    if(IntBubble=="")
        console.log("\ninvalid");
    else
    {
        var arr2=IntBubble.split(' ');
        for(var i=0;i<arr2.length;i++)
        {
            bubbleArr[i]=parseInt(arr2[i]);
        }
        console.log("\nsorted array(bubble sort) : "+utility.bubbleSortInt(bubbleArr,arr2.length));
    }
    var stop3=utility.currentTime();
    console.log("\nelapsed time = "+((stop3-start3)/1000)+" sec");

   /**
    * @description Binary Search of String Elements
    */
    var start4=utility.currentTime();
    var array2=["a","b","c","d","f","h","i","j","m","o","r","s","t","v","y","z"];
    var valueStr=readlineSync.question("\nenter the string value you want to search(a-z)->");
    if(valueStr=="")
        console.log("\ninvalid");
    else
        utility.binarySearch(array2,valueStr);
    var stop4=utility.currentTime();
    console.log("\nelapsed time = "+((stop4-start4)/1000)+" sec");

   /**
    * @description Insertion Sort of String Elements
    */
    var start5=utility.currentTime();
    var StrInsertion=readlineSync.question("\nenter the string elements(Insertion sort)-->");
    if(StrInsertion=="")
        console.log("\ninvalid");
    else
    {
        var arr3=StrInsertion.split(' ');
        console.log("\nsorted array(insertion sort) : "+utility.insertionSort(arr3,arr3.length));
    }
    var stop5=utility.currentTime();
    console.log("\nelapsed time = "+((stop5-start5)/1000)+" sec");

   /**
    * @description Bubble Sort of String Elements
    */
    var start6=utility.currentTime();
    var StrBubble=readlineSync.question("\nenter the integer elements(Bubble sort)-->");
    if(StrBubble=="")
        console.log("\ninvalid");
    else
    {
        var arr4=StrBubble.split(' ');
        console.log("\nsorted array(bubble sort) : "+utility.bubbleSort(arr4,arr4.length));
    }
    var stop6=utility.currentTime();
    console.log("\nelapsed time = "+((stop6-start6)/1000)+" sec");

    var stop=utility.currentTime();
    console.log("\ntotal time is: "+((stop-start)/1000)+" sec");
}
staticMethods();