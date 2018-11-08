/******************************************************************************
 *  Execution       :   default node         cmd> node inventory.js 
 *                      
 *  Purpose         :   creating an inventory from JSON file
 * 
 *  @description    
 * 
 *  @file           : inventory.js
 *  @overview       : inventory module reads a JSON file and create an inventory, prints the report
 *  @module         : inventory - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v10.10.0
 *  @since          : 14-09-2018
 *
 **********************************************************/
var fs=require('fs');
var readlineSync=require('readline-sync')
var data=fs.readFileSync("inventory.json");
var object=JSON.parse(data);
var utility=require('../utility/oopsUtility.js');
var size=parseInt(readlineSync.question("enter the size: "));
if(size==""||isNaN(size))

    console.log("invalid input");
else
    utility.inventory(size,object,readlineSync,fs);