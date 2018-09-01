/******************************************************************************
 *  Execution       :   default node         cmd> node coupon.js 
 *                      
 *  Purpose         :   Program to generate random coupon numbers and to process distinct coupons
 * 
 *  @description    
 * 
 *  @file           : coupon.js
 *  @overview       : coupon module will generate random coupon numbers and show the distinct coupons
 *  @module         : coupon - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v4.2.6
 *  @since          : 27-08-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function coupon()
{
    read.question("enter the min value : ",function(min)
    {
        read.question("enter the max value : ",function(max)
        {
            utility.coupon(min,max); 
            read.close();
        });
    });
}
coupon();