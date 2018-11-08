/******************************************************************************
 *  Execution       :   default node         cmd> node binaryTree.js 
 *                      
 *  Purpose         :   Printing number of binary search tree
 *  @description    
 * 
 *  @file           : binaryTree.js
 *  @overview       : binaryTree module takes nodes as input and prints the number of binary tree
 *  @module         : binaryTree - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 11-09-2018
 *
 **********************************************************/
var readlineSync=require('readline-sync');
var utility=require('../utility/dsUtility.js');
function binaryTree()
{
    var numbers=readlineSync.question("enter the nodes of the tree -->");
    var numberArray=numbers.split(" ");
    for(var i=0;i<numberArray.length;i++)
    {
        if(isNaN(numberArray[i])||numberArray[i]=="")
            return console.log("invalid input");
    }
    try {
        utility.binaryTree(numberArray.length);
    }
    catch(err) {
        console.log("error");
    }
        
}
binaryTree();