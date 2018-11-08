var fs=require('fs');
var data=fs.readFileSync("addressBook.json");
var object=JSON.parse(data);
var read=require('readline-sync');
console.log("\n*****************************************\n1.Search person in address book");
console.log("2.Add new person to address book\n3.Edit existing information about a person");
console.log("4.Delete person from address book\n5.Print the address book");
var choice=parseInt(read.question("*****************************************\n\nEnter your choice: "));
if(isNaN(choice)||choice=="")
{
    return console.log("invalid input");
}


switch(choice)
{
    case 1:
       search();
        break;

    case 2:
        add();
        break;

    case 3:
        edit();
        break;

    case 4:
        remove();
        break;
    case 5: 

        console.log(object);
        break;

    default:
        console.log("invalid input!!!");
}


function search()
{
    var first=read.question("enter first name you want to search: ");
    var last=read.question("enter last name you want to search: ");
    if(first==""||last=="")
        return console.log("invalid input");
    var flag=false;
    for(var i=0;i<object.person.length;i++)
    {
        if(object.person[i].firstName==first && object.person[i].lastName==last)
        {
            console.log(object.person[i]);
            flag=true;
        }
    }
    if(flag==false)
        console.log("not found");
}
function add()
{
    var first=read.question("enter first name: ");
    var last=read.question("enter last name: ");
    var city1=read.question("enter city: ");
    var state1=read.question("enter state: ");
    var zip1=parseInt(read.question("enter zip code: "));
    var phNo=parseInt(read.question("enter phone number: "));
    if(first==""||last==""||city1==""||state1==""||zip1==""||phNo=="")
        return console.log("please enter all the input");
    if(isNaN(zip1)||isNaN(phNo))//||zip1.length!=6||phNo.length!=10)
        return console.log("invalid input");
    var object1={
        firstName   :first,
        lastName    :last,
        city        :city1,
        state       :state1,
        zip         :zip1,
        phoneNo     :phNo
    }
    fs.writeFileSync('addressBook.json', JSON.stringify(object1));
}
function edit()
{
    var first=read.question("enter first name: ");
    var last=read.question("enter last name: ");
    if(first==""||last=="")
        return console.log("invalid input");
    var j,flag=false;
    for(i=0;i<object.person.length;i++)
    {
        if(object.person[i].firstName==first && object.person[i].lastName==last)
        {
            j=i;
            flag=true;
        }
    }
    if(flag==false)
    {
        console.log("not found");
    }
    else
    {
        console.log("\n1.city\n2.state\n3.zip\n4.phone number");
        var choice2=parseInt(read.question("Enter what you want to edit: "));
        if(choice2==""||isNaN(choice2))
            return console.log("invalid input");
        switch (choice2)
        {
            case 1:
                var cityEdit=read.question("enter the new city name: ");
                if(cityEdit=="")
                    return console.log("invalid input");
                object.person[j].city=cityEdit;console.log(object);
                fs.writeFileSync("addressBook.json");
                break;
            case 2:
                var stateEdit=read.question("enter the new state name: ");
                if(stateEdit=="")
                    return console.log("invalid input");
                object.person[j].state=stateEdit;console.log(object);
                fs.writeFileSync("addressBook.json");
                break;
            case 3:
                var zipEdit=read.question("enter the new zip code: ");
                if(zipEdit==""||isNaN(zipEdit)||zipEdit.length!=6)
                    return console.log("invalid input");
                object.person[j].zip=zipEdit;console.log(object);
                fs.writeFileSync("addressBook.json");
                break;
            case 4:
                var numEdit=read.question("enter the new phone number: ");
                if(numEdit==""||isNaN(numEdit)||numEdit.length!=10)
                    return console.log("invalid input");
                object.person[j].phoneNo=numEdit;console.log(object);
                fs.writeFileSync("addressBook.json");
                break;
            default:
                console.log("invalid entry");
        }
    }
}
function remove()
{
    var first=read.question("enter first name you want to delete: ");
    var last=read.question("enter last name you want to delete: ");
    if(first==""||last=="")
        return console.log("invalid input");
    var flag=false;
    for(var i=0;i<object.person.length;i++)
    {
        if(object.person[i].firstName==first && object.person[i].lastName==last)
        {
            flag=true;
            delete(object.person[i]);
        }
    }
    fs.writeFileSync("addressBook.json");
    console.log(object);
    if(flag==false)
        console.log("not found");
}
