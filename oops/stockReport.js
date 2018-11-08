/******************************************************************************
 *  Execution       :   default node         cmd> node stockReport.js 
 *                      
 *  Purpose         :   reading in Stock Names, Number of Share, Share Price from file. Printing a 
 *                      Stock Report with total value of each Stock and the total value of Stock.
 * 
 *  @description    
 * 
 *  @file           : stockReport.js
 *  @overview       : stockReport module takes N number of Stocks, for Each Stock Read In the Share Name, 
 *                    Number of Share, and Share Price and Prints the Stock Report.
 *  @module         : stockReport - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v10.10.0
 *  @since          : 11-09-2018
 *
 **********************************************************/
var fs=require('fs');
var data=fs.readFileSync("stockReport.json");
var obj=JSON.parse(data);
var utility=require('../utility/oopsUtility.js');
var stock=obj.stock;
utility.stockReport(stock);