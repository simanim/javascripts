var linkedList=require('./linkedList.js');
var stack=require('./stack.js');
module.exports={

    unOrdered : function(data,word)
    {
        var array=data.split(" ");
        for(var i=0;i<array.length;i++)
        {
            linkedList.append(array[i]);
        }
        if(linkedList.contains(word)==true)
        {
            console.log("\nelement found!!!\nElement Deleted\n");
            linkedList.remove(word);
        }
        else
        {
            console.log("\nelement not found!!!\nElement added\n");
            linkedList.append(word);
        }
        linkedList.print();
    },

    ordered : function(data,number)
    {
        var array=data.split(" ");
        for(var n=0;n<array.length;n++)
        {
            array[i]=parseInt(array[i]);
        }
        array=array.sort();
        for(var i=0;i<array.length;i++)
        {
            linkedList.append(array[i]);
        }
        if(linkedList.contains(number)==true)
        {
            console.log("\nelement found!!!\nElement Deleted\n");
            linkedList.remove(number);
        }
        else
        {
            console.log("\nelement not found!!!\nElement added\n");
            linkedList.append(number);
        }
        linkedList.print();
    },

    parentheses : function(exp)
    {
        var expArray=exp.split("");
        for(var i=0;i<expArray.length;i++)
        {
            if(expArray[i]=="(")
                stack.add(expArray[i]);

            else if(expArray[i]==")"){
                if(stack.getSize()==0)
                return (console.log("not balanced"));
                stack.remove();
            }
        }
        if(stack.getSize()==0)
            console.log("balanced");
        else
            console.log("not balanced");
    }
}