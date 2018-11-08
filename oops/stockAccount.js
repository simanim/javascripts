/******************************************************************************
 *  Execution       :   default node         cmd> node stockAccount.js 
 *                      
 *  Purpose         :   maintaining a list of company share objects
 * 
 *  @description    
 * 
 *  @file           : stockAccount.js
 *  @overview       : stockAccount module maintains a list of share objects
 *  @module         : stockAccount - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v10.10.0
 *  @since          : 15-09-2018
 *
 **********************************************************/
var fs = require('fs');
var read = require('readline-sync');
var utility=require('../utility/oopsUtility.js');
var data = fs.readFileSync("company.json")
var objstock = JSON.parse(data)

var datauser = fs.readFileSync("customer.json")
var objuser = JSON.parse(datauser)
utility.stockAccount(objstock,objuser,fs,read);