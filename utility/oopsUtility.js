module.exports={

    isDate : function(txtDate)
    {
        var currVal = txtDate;
        var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; //Declare Regex
        var dtArray = currVal.match(rxDatePattern); // is format OK?

        if (dtArray == null) 
            return false;

    //Checks for mm/dd/yyyy format.
        dtMonth = dtArray[3];
        dtDay= dtArray[1];
        dtYear = dtArray[5];        

        if (dtMonth < 1 || dtMonth > 12) 
            return false;
        else if (dtDay < 1 || dtDay> 31) 
            return false;
        else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
            return false;
        else if (dtMonth == 2) 
        {
            var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
            if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
        }
        return true;
    },
    demonstration : function(data,firstName,fullName,contactNo,date)
    {
        var contact=contactNo.split("");
        if(firstName==""||fullName==""||contactNo==""||date=="")
            return console.log("please enter all the inputs");
        else if(/\d/.test(firstName)==true||/\d/.test(fullName)==true)
            return console.log("invalid!!\n name doesnot contain any number");
        else if(isNaN(contactNo)||contact.length!=10)
            return console.log("invalid contact number");
        else if(this.isDate(date)==false)
            return console.log("invalid date");

        var regex = /<<name>>/gi;
        data=data.replace(regex, firstName);
        regex = /<<full name>>/gi;
        data=data.replace(regex, fullName);
        regex = /­xxxxxxxxxx/gi;
        data=data.replace(regex, contactNo);
        regex = /<<01.01.2016>>/gi;
        data=data.replace(regex, date);
        console.log(data);
    }
}