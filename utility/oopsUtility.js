module.exports={

/**
 * @description Printing the Modified Message.
 * @function demonstration it reads the text from a file, take first name, full name, contact number from
 *                         users and replace the name, firstname, contact number and current date.
 * @return {modified message} modify the text 
 */
    demonstration : function(data,firstName,fullName,contactNo)
    {
        var contact=contactNo.split("");
        if(firstName==""||fullName==""||contactNo=="")
            return console.log("please enter all the inputs");
        else if(/\d/.test(firstName)==true||/\d/.test(fullName)==true)
        {
            return console.log("invalid!!\n name doesnot contain any number");
           /**
            * @description it will check the input names are valid or not
            */
        
        }
        else if(isNaN(contactNo)||contact.length!=10)
            return console.log("invalid contact number");
            /**
            * @description it will check the contact number if of 10 digit or not
            */
        firstName=firstName.toUpperCase();
        fullName=fullName.toUpperCase();
        var date=new Date();
        var presentDate=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
        var regex = /<<name>>/gi;
        data=data.replace(regex, firstName);
           /**
            * @description it will replace the <<name>> by firstName
            */
        regex = /<<full name>>/gi;
        data=data.replace(regex, fullName);
           /**
            * @description it will replace the <<full name>> by fullName
            */
        regex = /­xxxxxxxxxx/gi;
        data=data.replace(regex, contactNo);
           /**
            * @description it will replace the xxxxxxxxxx by contactNo
            */
        regex = /<<01.01.2016>>/gi;
        data=data.replace(regex, presentDate);
           /**
            * @description it will replace the date by current date
            */
        console.log(data);
    },


/**
 * @description reading in Stock Names, Number of Share, Share Price from file. Printing a Stock Report with total 
 *              value of each Stock and the total value of Stock.
 * @function stockReport it takes N number of Stocks, for Each Stock Read In the Share Name, Number of
 *                       Share, and Share Price
 * @return {modified message} Prints the Stock Report.
 */
    stockReport : function(stock)
    {
        for(var key in stock)  
        {
            console.log(stock[key]);
            console.log("total price of "+stock[key].stock_name+" is "+stock[key].no_of_share*stock[key].price+"\n");
           /**
            * @description it prints the stock reports
            */
        }
        var total=0;
        for(var i=0;i<stock.length;i++)
        {
            total+=stock[i].no_of_share*stock[i].price;
        }
        console.log("Total Price is: "+total);
       /**
        * @description it prints the total price of N stocks
        */
    },


/**
 * @description reading a JSON file
 * @function inventory it takes size, stock name, no of share, share price as input
 * @return it returns the stock report
 */
    inventory : function(size,object,readlineSync,fs)
    {
        try{
        while(size>0)
        {
            var name=readlineSync.question("enter name of stock: ");
            if(name=="")
                return console.log("invalid inputs");
            var share=parseInt(readlineSync.question("enter no of share: "));
            if(share==""||isNaN(share))
                return console.log("invalid inputs");
            var price=parseInt(readlineSync.question("enter price of each share: "));
            if(price==""||isNaN(price))
                return console.log("invalid inputs");
        
            object.stock.push({
                share_name  :name,
                no_of_share :share,
                price       :price
            })
           /**
            * @description it creates an object of stock and push the data to the stock
            */
            console.log();console.log(object);console.log();
            size--;
            fs.writeFileSync('inventory.json',JSON.stringify(object));
           /**
            * @description the data created by the users will saved to the file
            */
            var stock=object.stock;
            for(var key in stock)
            {
               console.log("The Total Price of stock is: "+parseInt(stock[key].no_of_share*stock[key].price));
            }
           /**
            * @description prints the stock report
            */
        }}
        catch(err) {
            console.log("error");
        }    
    },


/**
 * @description sorting
 * @function Mysort it sorts according to the string
 * @return it returns sorted values
 */
    Mysort : function(alphabet){
        
        return function (a, b) {
            var index_a = alphabet.indexOf(a[0]),
                index_b = alphabet.indexOf(b[0]);

            if (index_a === index_b) {
                // same first character, sort regular
                if (a < b) {
                    return -1;
                } else if (a > b) {
                    return 1;
                }
                return 0;
            } else {
                return index_a - index_b;
            }
        }
    },


/**
 * @description maintaining a list of company share objects
 * @function stockAccount takes name and number of share from users
 * @return it maintain the share
 */
    stockAccount : function(objstock,objuser,fs,read)
    {
        var users = read.question("enter the name of user :");
        var count = 0;
        for(var i=0; i<objuser.user.length; i++)
        {
            if(users==objuser.user[i]["name"])
            {
           /**
            * @description it checks the user is present or not
            */
                count++;
                console.log("user is present");
                console.log(users + " have " +objuser.user[i]["No_of_share"]+ " share of " +objuser.user[i]["company_name"]);
                var val = read.question("\n press 0 for sell, press 1 for buy :");
        
                if(val=='0')
                {
                    var val1 = read.question("enter how many share you want to sell :");
                    if(objuser.user[i]["No_of_share"]<val1)
                        return console.log("you dont have this many of shares");
                    objuser.user[i]["No_of_share"]=objuser.user[i]["No_of_share"]-val1;
                    console.log(objuser.user[i]["No_of_share"]);
                    fs.writeFileSync('customer.json', JSON.stringify(objuser));
               /**
                * @description if the user wants to sell, then it will take input from user and update
                *              to the file
                */
                }
                if(val=='1')
                {
                    var val2 = read.question("enter how many share you want to buy :");
                    var cn = read.question("enter company name from you want to buy :");
                    for(var j=0; j<objstock.stock.length; j++)
                    {
                        if(cn==objstock.stock[j]["companyname"])
                        {
                            if(objstock.stock[j]["Share"]<val2)
                                return console.log("not available");
                            objstock.stock[j]["Share"]=objstock.stock[j]["Share"]-parseInt(val2);
                            fs.writeFileSync('company.json', JSON.stringify(objstock));
                            console.log("succesfully bought");
                        }
                    }
                    objuser.user[i]["No_of_share"]=objuser.user[i]["No_of_share"]+parseInt(val2);
                    fs.writeFileSync('customer.json', JSON.stringify(objuser));
                    console.log("upadate successfull ");
               /**
                * @description if the user wants to buy, then it will take input from user and update
                *              to the file
                */
                }
            }
        }
        if(count==0)
        {
           /**
            * @descriptionif the user is not present then it creates a new user object and save it to the file
            */
            console.log("user is not present here we are adding a user :");
            var cname = read.question("enter company name :");
            var share = parseInt(read.question("enter no. of share :"));
            var myObj = {
                "name" : users,    
                "company_name" : cname,
                "No_of_share" : share 
            };
            objuser.user.push(myObj);
            fs.writeFileSync('customer.json', JSON.stringify(objuser));
            console.log(objuser); 
        }
    }


}