var linkedList=require('./linkedList.js'); 
var stack=require('./stack.js');
var queue=require('./queue.js');
var deque=require('./deque.js'); 
var queueLink=require('./queLink.js'); var queueLink=new queueLink();
var listClass=require('./listClass.js');var list = new listClass();
module.exports={

/**
 * @description program to reading a text from a file,splitting and arranging it in a linkedlist
 *              and by taking a string input from user, adding or removing from list.
 * @function unOrdered it takes a text from file and a word from user to search
 * @return {array of strings}  if the word is present, it removes,otherwise it addes to file and saves.
 */
    unOrdered : function(data,word)
    {
        var list=new linkedList();
        var array=data.split(" ");
        for(var i=0;i<array.length;i++)
        {
            list.append(array[i]);
       /**
        * @description the text file is splitted and stored in linkedlist
        */
        }
        if(list.contains(word)==true)
        {
            console.log("\nelement found!!!\nElement Deleted\n");
            list.remove(word);
       /**
        * @description if the given word is present in list, then it will be removed from linked list
        */
        }
        else
        {
            console.log("\nelement not found!!!\nElement added\n");
            list.append(word);
       /**
        * @description if the given word is not present in list, then it will be added to linked list
        */
        }
        return linkedList.print();
    },


/**
 * @description program to reading a list of number from a file arranging in ascending order in a 
 *              linkedlist and by taking a number input from user, adding or removing from list.
 * @function ordered it takes a list of number from file and a number from user to search
 * @return {array of number}  if the number is present, it removes,otherwise it addes to file and saves.
 */
    ordered : function(data,number)
    {
        for (var i = 0; i < (data.length); i++) 
        {
            list.add(data[i]);
           /**
            * @description adding data to list
            */
        }
    console.log("\nascending order of list: ");
    var string = list.printList1();
   /**
    * @description ascending order representation of list
    */
    console.log(string);
    if (list.indexOf(number) == -1) 
    {
        list.insertSort(parseInt(number));
       /**
        * @description inserts an element at appropriate position,if not present
        */
       console.log("\nelement not found!!  adding..\n new list");
    }
    else 
    {
        list.removeElement(number);    
       /**
        * @description removes an element from list, if present
        */
       console.log("\nelement found!!  removing..\n new list");
    }
    string = list.printList1();
   /**
    * @description again arranging the list
    */
    console.log(string);   
    return string;  
    },


/**
 * @description program to check the given arithmatic expression is balanced or not
 * @function parentheses it takes a arithmatic expression as input
 * @return {}  it returns the expression is balanced or not
 */
    parentheses : function(exp)
    {
        var stack1=new stack();
        var expArray=exp.split("");
        for(var i=0;i<expArray.length;i++)
        {
            if(expArray[i]=="("||expArray[i]=="{"||expArray[i]=="[")
                stack1.add(expArray[i]);
           /**
            * @description open parenthesis adds to stack
            */

            else if(expArray[i]==")"||expArray[i]=="}"||expArray[i]=="]"){
                if(stack1.getSize()==0)
                return (console.log("not balanced"));
                stack1.remove();
           /**
            * @description close parenthesis pops the stack
            */
            }
        }
        if(stack1.getSize()==0)
            console.log("balanced");
        else
            console.log("not balanced");
       /**
        * @description at the end, if there is no parenthesis in stack then it is balanced, otherwise not balanced
        */
    },


/**
 * @description program to simulate bank cash counter by adding people in a queue and after 
 *                    deposit or withdraw of cash, it removes people.
 * @function cashCounter it takes a number of people standing in a queue.
 * @return simulating bank cash counter
 */
    cashCounter : function(readlineSync,people)
    {
        var amount=100000;
        for(var i=0;i<people;i++)
        {
            queue.enqueue(i);
        }
       /**
        * @description adding people to queue
        */
        while(queue.getSize()>0)
        {
            var data=readlineSync.question("\nfor deposit enter 1, for withdraw enter 2-->");
            if(data!=1&&data!=2)
                console.log("invalid entry");
            if(data==1)
            {
                var money=readlineSync.question("enter the deposit amount: ");
                if(isNaN(money)||money=="")
                    console.log("invalid");
                else
                {
                    amount+=parseInt(money);
                    console.log("available balance is: "+amount);
                }
                queue.dequeue();
               /**
                * @description after deposit, removing from queue
                */
            }
            if(data==2)
            {
                var money=readlineSync.question("enter the withdraw amount: ");
                if(money<=0||isNaN(money)||money=="")
                    console.log("please enter a valid input");
                else if(amount<money)
                    console.log("no balance");
                else
                {
                    amount-=parseInt(money);
                    console.log("available balance is: "+amount);
                }
                queue.dequeue();
               /**
                * @description after withdraw, removing from queue
                */
            }
        }
    },


/**
 * @description program to check the word is palindrome using deque
 * @function palindrome it takes a word from user
 * @return {statement} returns the word is palindrome or not
 */
    palindrome : function(word)
    {
        var array=word.split("");
        for(var i=0;i<array.length;i++)
        {
            deque.addRear(array[i]);
           /**
            * @description it splits the word and adds to deque
            */
        }
        var string1=deque.print();
        for(var j=array.length;j>0;j--)
        {
            deque.removeFront();
            deque.addRear(array[j-1]);
            string2=deque;
           /**
            * @description it process the deque from left to right and add each character to
            *              the rear of the deque.
            */
        }
        var string2=deque.print();
        for(var s=0;s<string1.length;s++)
        {
           /**
            * @description it checks the both strings are same or not
            */
            if(string1[s]!=string2[s])
                return console.log("not palindrome");
        }
        console.log("palindrome");
    },


/**
 * @description program printing the calenders in 2D array format by taking year and month as input.
 * @function calender it takes year and month as input.
 * @return {2d array} returns the calender 
 */
    calender : function(year,month)
    {
        var day=31;
        if(month==2)
        {
            if(((year%4==0)&&(year%100!=0))||(year%400==0))
            {
                day=29;
            }
            else 
                day=28;
           /**
            * @description if the month is 2,it checks leapyear or not
            */
        }
        else if(month==4||month==6||month==9||month==11)
        {
            day=30;
           /**
            * @description if month is 4,6,9,11 then 30 days in that month
            */
        }

        var y=parseInt(year);
        var m=parseInt(month);
        var d=1;
        var y0=y-Math.floor((14-m)/12);
        var x=y0+Math.floor(y0/4)-Math.floor(y0/100)+Math.floor(y0/400);
        var m0=m+12*Math.floor((14-m)/12)-2;
        var d0=(d+x+Math.floor(31*m0/12))%7;
        d0=parseInt(d0);
       /**
        * @description it checks the day of week in the given year on starting day of month
        */

        console.log("sun mon tue wed thu fri sat");
        arr1=[];
        var date=1;
        for(var i=0;i<d0;i++)
        {
            arr1[i]="   ";
       /**
        * @description it adds space to array if the calender does not start with sunday upto that day
        */
        }
        while(date<=day)
        {
            if(date<10)
            arr1.push(" "+date+" ");
            else
            arr1.push(date+" ");
            date++;
       /**
        * @description it adds date to calender according to day name
        */
        }
        var remain=42-d0-day;
        for(var i=0;i<remain;i++)
        {
            arr1.push("   ");
       /**
        * @description it adds space after adding date to calender.other wise it will show undefined instead
        */
        }
            
        var v=0;
        arr2 = [];
        var string = ""; 
        for(var i=0;i<6;i++)
        {
            for(var j=0;j<7;j++)
            {
                string = string + arr1[v] + " "; 
                v++;
            }
           arr2.push(string); 
           string = "";
       /**
        * @description it stores in 2d format by converting the rows as strings 
        */
        }
        for (var pos = 0; pos < arr2.length; pos++)
        {
            console.log(arr2[pos]); 
        }
    },


/**
 * @description program find the prime number
 * @function prime it takes min and max as input
 * @return {integer} returns prime numbers between that range
 */
    prime : function(min,max)
    {
        min=parseInt(min);
        max=parseInt(max);
        var primeArray=[];
        for(var i=min+1;i<=max;i++){
            var flag=1;
            for(var j=2;j<=i/2;j++){
                if(i%j==0){   
                    flag=0;
                    break;
                }
            }
            if(flag!=0){
                primeArray.push(i);
           /**
            * @description it stores only those numbers that are not divisible by any other numbers
            */
            } 
        }
        return primeArray;
    },   


/**
 * @description program find the prime number and stores in 2d format
 * @function primeArray it takes min and max as input
 * @return {2d array} returns prime numbers between that range in 2d format.
 *                    0-100, 100-200, 200-300 like this
 */
    primeArray : function(min,max)
    { 
        var primeArray=this.prime(min,max);
       /**
        * @description it finds the prime numbers by calling prime function
        */
        var arr1=[],arr2=[],arr3=[],arr4=[],arr5=[],arr6=[],arr7=[],arr8=[],arr9=[],arr10=[];
        for(var j=0;j<primeArray.length;j++)
        {
            /**
            * @description it stores the numbers according to range i.e, if it is between 0-100 then in
            *              arr1, 100-200 in arr2 and so on.
            */
            if(primeArray[j]<100){
                arr1.push(primeArray[j]);
            }
            else if(primeArray[j]<200){
                arr2.push(primeArray[j]);
            }
            else if(primeArray[j]<300){
                arr3.push(primeArray[j]);
            }
            else if(primeArray[j]<400){
                arr4.push(primeArray[j]);
            }
            else if(primeArray[j]<500){
                arr5.push(primeArray[j]);
            }
            else if(primeArray[j]<600){
                arr6.push(primeArray[j]);
            }
            else if(primeArray[j]<700){
                arr7.push(primeArray[j]);
            }
            else if(primeArray[j]<800){
                arr8.push(primeArray[j]);
            }
            else if(primeArray[j]<900){ 
                arr9.push(primeArray[j]);
            }
            else{
                arr10.push(primeArray[j]);
            }
        }
        var arrayMain=[];arrayMain.push("0-100    :");
        arrayMain.push(arr1.join(" "));arrayMain.push("101-200  :");
        arrayMain.push(arr2.join(" "));arrayMain.push("201-300  :");
        arrayMain.push(arr3.join(" "));arrayMain.push("301-400  :");
        arrayMain.push(arr4.join(" "));arrayMain.push("401-500  :");
        arrayMain.push(arr5.join(" "));arrayMain.push("501-600  :");
        arrayMain.push(arr6.join(" "));arrayMain.push("601-700  :");
        arrayMain.push(arr7.join(" "));arrayMain.push("701-800  :");
        arrayMain.push(arr8.join(" "));arrayMain.push("801-900  :");
        arrayMain.push(arr9.join(" "));arrayMain.push("901-1000 :");
        arrayMain.push(arr10.join(" "));
       /**
        * @description it stores the range and values in one array.
        */

        var v=0;
        main = [];
        var string = ""; 
        for(var i=0;i<10;i++){
            for(var j=0;j<2;j++){
                string = string + arrayMain[v] + " "; 
                v++;
            }
            main.push(string); 
            string = "";
        }
        for (var pos = 0; pos < main.length; pos++){
            console.log(main[pos]); 
        }
       /**
        * @description it prints the array in 2d format by converting the row as strings
        */
    },


/**
 * @description program check the anagram numbers in a given array
 * @function anagram it takes an array as input
 * @return {array of intergers} returns the array of anagram numbers in the array
 */
    anagram : function(primeArray)
    {
        var anagramArray=[];
        for(var k=0;k<primeArray.length;k++)
        {
            for(var j=k+1;j<primeArray.length;j++)
            {
           /**
            * @description here two numbers are checking for anagram
            */
                var charNum1=((primeArray[k].toString()).split("")).sort();
                var charNum2=((primeArray[j].toString()).split("")).sort();
                var num1=charNum1.join("");
                var num2=charNum2.join("");
                if(num1==num2)
                { 
                    anagramArray.push(primeArray[k]);
                    anagramArray.push(primeArray[j]);
                }
            }
        }
        var unique_array = [];
        for(var j =0;j < anagramArray.length; j++){
            if(unique_array.indexOf(anagramArray[j]) == -1){
                unique_array.push(anagramArray[j])
            }
           /**
            * @description the repeated numbers will removed here
            */
        }
        return unique_array;
    },


/**
 * @description program list the numbers which are not anagram
 * @function notAnagram it takes 2 array as input. one is list of numbers and another one is list 
 *                      of anagram numbers
 * @return {array of intergers} returns the array of numbers which are not present in anagram array
 */
    notAnagram : function(primeArray,anagramArray)
    {
        var unique = [];
        for(var i = 0; i < primeArray.length; i++){
            var found = false;     
            for(var j = 0; j < anagramArray.length; j++){
                if(primeArray[i] == anagramArray[j]){
                found = true;
                break; 
                }
            }
            if(found == false){
                unique.push(primeArray[i]);
            }
       /**
        * @description it will find the unique numbers from both arrays.
        */
        }
        return unique;
    },


/**
 * @description program list the numbers which are anagram and which are not anagram in 2d format
 * @function anagramArray it takes min and max range
 * @return {array of intergers} returns the 2d array of numbers which are anagram and which are not anagram
 */
    anagramArray : function(min,max)
    {
        var primeArray=this.prime(min,max);
        var anagramArray=this.anagram(primeArray);
        var notAnagramArr=this.notAnagram(primeArray,anagramArray);
       /**
        * @description primeArray is the array where all the prime numbers are stored
        *              anagramArray :prime and anagram
        *              notAnagramArr :prime and not anagram
        */

        var array=[];
        array.push("anagram:  ");
        array.push(anagramArray.join(" "));
        array.push("not anag: ");
        array.push(notAnagramArr.join(" "));

        var v=0;
        main = [];
        var string = ""; 
        for(var i=0;i<2;i++){
            for(var j=0;j<2;j++){
                string = string + array[v] + " "; 
                v++;
            }
            main.push(string); 
            string = "";
       /**
        * @description it prints the anagram numbers and the numbers which is not anagram in 2d format
        */
        }
        for (var pos = 0; pos < main.length; pos++){
            console.log(main[pos]+"\n"); 
        }
    },


/**
 * @description program list the numbers which are anagram and which are not anagram in stack format
 * @function anagramStack it takes min and max range
 * @return {stack} returns the numbers which are anagram in a stack
 */
    anagramStack : function(min,max)
    {
        var stack1=new stack();
        var primeArray=this.prime(min,max);
        var anagramArray=this.anagram(primeArray);
       /**
        * @description it takes the prime number in that range
        */
        for(var i=anagramArray.length;i>0;i--)
        {
            stack1.add(anagramArray[i-1]);
       /**
        * @description it adds the numbers in stack
        */
        }
        console.log(stack1);
    },


/**
 * @description program list the numbers which are anagram and which are not anagram in queue format
 * @function anagramQueue it takes min and max range
 * @return {queue} returns the numbers which are anagram in a queue
 */
    anagramQueue : function(min,max)
    {
        var primeArray=this.prime(min,max);
        var anagramArray=this.anagram(primeArray);
       /**
        * @description it takes the prime number in that range
        */
        for(var i=0;i<anagramArray.length;i++)
        {
            queueLink.enqueue(anagramArray[i]);
       /**
        * @description it adds the numbers in queue
        */
        }
        console.log(queueLink.printQueue());
    },


/**
 * @description Hashing Function to search a Number in a slot
 * @function hashing it takes input from file and word to search
 * @return add the number to file, if not present. remove ,if present.
 */
    hashing : function(data,size,number)
    { 
        var remArray=[];
        for(var d=0;d<data.length;d++)
        {
            remArray.push(parseInt(data[d])%size);
        }
        var mainArray=[];
        for(var i=0;i<size;i++)
        { 
            var list=new linkedList();
            for(var j=0;j<remArray.length;j++)
            {
                if(remArray[j]==i)
                list.append(data[j]);
            }
            mainArray.push(list.print());
        }
        for(var i=0;i<mainArray.length;i++)
        {
            console.log(i+" --> "+mainArray[i]);
        }
        var list2=new linkedList();
        for(var j=0;j<data.length;j++){
            list2.append(data[j]);
        }
        var flag=false;
        for(var j=0;j<data.length;j++)
        {
            if(data[j]==number){
                flag=true;
                console.log("found\ndeleted!!");
                list2.remove(number);
            }
        }
        if(flag==false){
            console.log("not found\nadded!!");
            list2.append(number);
        }

        array1=list2.print().split(" ");
        var remArray2=[],mainArray2=[];
        for(var d=0;d<array1.length;d++)
        {
            remArray2.push(array1[d]%size);
        }
        for(var i=0;i<size;i++)
        { 
            var list3=new linkedList();
            for(var j=0;j<remArray2.length;j++)
            {
                if(remArray2[j]==i)
                list3.append(array1[j]);
            }
            mainArray2.push(i+"->"+list3.print()+"\n");
        }
        //console.log(mainArray2);
        return mainArray2;
        
    },


/**
 * @description Printing number of binary search tree
 * @function binaryTree it takes nodes from users
 * @return the number of binary search tree in that nodes
 */
    binaryTree : function(node)
    {
        for(var subNode=1;subNode<=node;subNode++)
        {
           /**
            * @description it prints for each number 
            */
            var cons=parseInt(subNode)*2;
            var result = 1; 
            for (var i = 0; i < subNode; ++i) 
            { 
                result *= (cons - i); 
                result /= (i + 1); 
               /**
                * @description it calculates number of tree for the given nodes
                */
            }
            var catalan=result/(parseInt(subNode)+1);
            console.log(catalan);
        }
    },


/**
 * @description Printing the calenders in in queue by taking year and month as input
 * @function calenderQueue it takes year and month
 * @return prints the calender in queue
 */  
    calenderQueue : function(year,month)
    {
        var day=31;
        if(month==2)
        {
            if(((year%4==0)&&(year%100!=0))||(year%400==0))
            {
                day=29;
            }
            else 
                day=28;
           /**
            * @description if the month is 2,it checks leapyear or not
            */
        }
        else if(month==4||month==6||month==9||month==11)
        {
            day=30;
           /**
            * @description if month is 4,6,9,11 then 30 days in that month
            */
        }

        var y=parseInt(year);
        var m=parseInt(month);
        var d=1;
        var y0=y-Math.floor((14-m)/12);
        var x=y0+Math.floor(y0/4)-Math.floor(y0/100)+Math.floor(y0/400);
        var m0=m+12*Math.floor((14-m)/12)-2;
        var d0=(d+x+Math.floor(31*m0/12))%7;
        d0=parseInt(d0);
        /**
        * @description it checks the day of week in the given year on starting day of month
        */

       console.log("sun  mon  tue  wed  thu  fri  sat");
       arr1=[];
        var date=1;
        for(var i=0;i<d0;i++)
        {
            arr1[i]="     ";
       /**
        * @description it adds space to array if the calender does not start with sunday upto that day
        */
        }
        while(date<=day)
        {
            if(date<10)
            arr1.push(" "+date+"   ");
            else
            arr1.push(date+"   ");
            date++;
       /**
        * @description it adds date to calender according to day name
        */
        }
        var remain=42-d0-day;
        for(var i=0;i<remain;i++)
        {
            arr1.push("   ");
       /**
        * @description it adds space after adding date to calender.other wise it will show undefined instead
        */
        }
        var pos=0;
        for(var i=0;i<6;i++)
        {
            var str="";
            for(var j=0;j<7;j++)
            {
                str=str+arr1[pos];
                pos++;
            }
            queue.enqueue(str);
       /**
        * @description the dates are added to the queue
        */
        }
        for(var k=0;k<6;k++)
        {
            console.log(queue.frontEle());
           /**
            * @description printing the queue
            */
            queue.dequeue();
        }
    },


/**
 * @description Printing the calenders in in stack by taking year and month as input
 * @function calenderStack it takes year and month
 * @return prints the calender in stack
 */  
    calenderStack : function(year,month)
    { var stack1=new stack();
        var day=31;
        if(month==2)
        {
            if(((year%4==0)&&(year%100!=0))||(year%400==0))
            {
                day=29;
            }
            else 
                day=28;
           /**
            * @description if the month is 2,it checks leapyear or not
            */
        }
        else if(month==4||month==6||month==9||month==11)
        {
            day=30;
           /**
            * @description if month is 4,6,9,11 then 30 days in that month
            */
        }

        var y=parseInt(year);
        var m=parseInt(month);
        var d=1;
        var y0=y-Math.floor((14-m)/12);
        var x=y0+Math.floor(y0/4)-Math.floor(y0/100)+Math.floor(y0/400);
        var m0=m+12*Math.floor((14-m)/12)-2;
        var d0=(d+x+Math.floor(31*m0/12))%7;
        d0=parseInt(d0);
       /**
        * @description it checks the day of week in the given year on starting day of month
        */

        console.log("sun  mon  tue  wed  thu  fri  sat");
        var date=1;
        for(var i=0;i<d0;i++)
        {
            deque.addRear("     ");
       /**
        * @description it adds space to array if the calender does not start with sunday upto that day
        */
        }
        while(date<=day)
        {
            if(date<10)
            deque.addRear(" "+date+"   ");
            else
            deque.addRear(date+"   ");
            date++;
       /**
        * @description it adds date to calender according to day name
        */
        }
        var remain=42-d0-day;
        for(var i=0;i<remain;i++)
        {
            deque.addRear("   ");
       /**
        * @description it adds space after adding date to calender.other wise it will show undefined instead
        */
        }
        for(var i=0;i<6;i++)
        {
            var str="";
            for(var j=0;j<7;j++)
            {
                str=str+deque.removeFront();
            }
            stack1.add(str);
       /**
        * @description the dates are added to the queue
        */
        }
        var stack2=new stack();
        for(var i=0;i<stack1.getSize();)
        {
            stack2.add(stack1.remove());
        }
        for(var i=0;i<stack2.getSize();)
        {
            console.log(stack2.remove());
        }
    }
    
}