/******************************************************************************
 *  Execution       :   default node         cmd> node dataManagement.js 
 *                      
 *  Purpose         :   JSON Inventory Data Management of Rice, Pulses and Wheats
 * 
 *  @description    
 * 
 *  @file           : dataManagement.js
 *  @overview       : dataManagement module calculates value for each inventory
 *  @module         : dataManagement - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v10.10.0
 *  @since          : 13-09-2018
 *
 **********************************************************/
var fs=require('fs');
var data=fs.readFileSync("dataManagement.json");
var obj=JSON.parse(data);

var rice=obj.rice;
var wheat=obj.wheat;
var pulses=obj.pulses;
/**
 * @description it creates 3 objects(rice,wheat,pulses)
 */
for(var key in rice)  
{
    console.log(rice[key]);
    console.log("total price of "+rice[key].name+" is "+rice[key].weight*rice[key].price);
/**
 * @description prints total price of rice objects
 */
}
for(var key in wheat)
{
    console.log(wheat[key]);
    console.log("total price of "+wheat[key].name+" is "+wheat[key].weight*wheat[key].price);
/**
 * @description prints total price of wheat objects
 */
}
for(var key in pulses)
{
    console.log(pulses[key]);
    console.log("total price of "+pulses[key].name+" is "+pulses[key].weight*pulses[key].price);
/**
 * @description prints total price of pulses objects
 */
}