/******************************************************************************
 *  Execution       :   default node         cmd> node companyShare.js 
 *                      
 *  Purpose         :   Maintaining the List of CompanyShares in a queue So 
 *                      new CompanyShares can be added or removed easily.
 * 
 *  @description    
 * 
 *  @file           : companyShare.js
 *  @overview       : companyShare module maintains a list of company share in a queue
 *  @module         : companyShare - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v10.10.0
 *  @since          : 17-09-2018
 *
 **********************************************************/
var read = require('readline-sync');
var queue = require('../utility/queue.js');
/**
 * @description creating a queue and adding some object value to queue
 */
var object={
    companyname:"infosys",
    share:200,
    sharePrice:1000
}
queue.enqueue(object);

object={
    companyname:"tata",
    share:500,
    sharePrice:1500
}
queue.enqueue(object);

object={
    companyname:"wipro",
    share:300,
    sharePrice:2000
}
queue.enqueue(object);
console.log(queue);
var ques = read.question("enter 1 for buy, 0 for sell :");
if(ques==1)
{
   /**
    * @description to buy shares from company
    */
    var flag=false;
    var name = read.question('enter the comany name: ');
    var number = parseInt(read.question('enter how many shares you want to buy: '));
        for(var i=0;i<queue.getSize();i++)
        {
            if(queue.storage[i].companyname==name)
            {
               /**
                * @description if the users have already some shares in given company,
                *              the shares number will be increase and update to queue
                */
                flag=true;
                queue.storage[i].share+=number;
            }
        }
        if(flag==false)
        {
           /**
            * @description if the users have not any shares in given company,
            *              a new object of that company will be created and added to queue
            */
            var p=parseInt(read.question("you have no share in this company!!\n enter the share price you want to buy: "));
            object={
                companyname:name,
                share:number,
                sharePrice:p
            }
            queue.enqueue(object);
        }
    console.log(queue);
}

else if(ques==0)
{
   /**
    * @description to sell shares 
    */
    var name = read.question('enter the comany name: ');
    var number = parseInt(read.question('enter how many shares you want to sell: '));
    if(isNaN(number)||number=="")
        return console.log("invalid number of share");
    
        for(var i=0;i<queue.getSize();i++)
        {
            if(queue.storage[i].companyname==name)
            {
                if(number>queue.storage[i].share)
                    return console.log("not available");
                queue.storage[i].share-=number;
               /**
                * @description if there is insufficient stock then it will print message
                *              otherwise the number of stock will be reduced and update to queue
                */
            }
        }
    
    console.log(queue);
}
else
{
    console.log("invalid input");
}