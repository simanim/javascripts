/******************************************************************************
 *  Execution       :   default node         cmd> node binaryTree.js 
 *                      
 *  Purpose         :   
 *  @description    
 * 
 *  @file           : binaryTree.js
 *  @overview       : binaryTree module takes 
 *  @module         : binaryTree - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 11-09-2018
 *
 **********************************************************/
var readline=require('readline');
var utility=require('../utility/dsUtility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function binaryTree()
{
    read.question("enter the number of node in the tree: ", function(node)
    {
        if(isNaN(node)){
            console.log("please enter a valid number");
        }
        else{
            try {
                utility.binaryTree(node)
            }
            catch(err) {
                console.log("error");
            }
        }
        read.close();
    });
}
binaryTree();