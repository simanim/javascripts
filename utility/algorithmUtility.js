module.exports={

/**
 * @description program for checking two strings are anagram or not
 * @function anagram Getting 2 inputs as srtring.(string1 and string2)
 * @return {string}  it returns whether the strings are anagram or not
 */
    anagram : function(string1,string2)
    { 
        if(string1.length!=string2.length)
        {
            return(console.log("Two Strings are NOT ANAGRAM"));
           /**
            * @description first it will check the strings lengths are equal or not.if the length are not
            *              equal, then it will direct return its not anagram, otherwise it will proceed
            */
        }
        var upperString1=string1.toUpperCase();
        var upperString2=string2.toUpperCase();
       /**
        * @description it will convert the both strings in uppercase.if the same strings are in diff 
        *              case, then also users can get the true output.
        */
        var charString1=[];
        var charString2=[];
        charString1=upperString1.split("");
        charString2=upperString2.split("");
       /**
        * @description the strings will be spilited into character arrays.To store them, 2 arrays are taken.
        */
        charString1.sort();
        charString2.sort();
       /**
        * @description the two arrays will sort in ascending order. By this we can get same array if the 
        *              array have same values.
        */
        string1=charString1.join("");
        string2=charString2.join("");
       /**
        * @description the two arrays will join and formed a string value 
        *              so that we can compare the strings and check.
        */
        var result=[];
        result.push(string1);
        result.push(string2);
        return(result);
    },


/**
 * @description program for printing the prime numbers between 0 to 1000
 * @function primeNum it will take input 0 and 1000
 * @return {integer}  it returns all the prime numbers between the range
 */
    primeNum : function(min,max)
    {
        var primeArray=[];
        for(var i=min+1;i<=max;i++)
        {
       /**
        * @description it will start checking the numbers one by one by increasing the value
        */
            var flag=1;
            for(var j=2;j<=i/2;j++)
            {
                if(i%j==0)
                {   
                   /**
                    * @description the number is divisible by some value so it is not prime
                    */
                    flag=0;
                    break;
                }
            }
            if(flag!=0)
            {
               /**
                * @description the numbers which are prime will get pushed into an array one by one            
                *              after checking and later the array will be printed
                */
                primeArray.push(i);
            }
            
        }return(primeArray);
    },


/**
 * @description program for printing the prime numbers between 0 to 1000 which are anagram and palindrome
 * @function anagPal it will take input 0 and 1000
 * @return {integer}  it returns all the prime numbers between the range which are palindrome and
 *                    all the pair of prime number between 0 to 1000 which are anagram
 */
    anagPal : function(min,max)
    {
        var palindrome=[];
        var primeArray=[];
        primeArray=this.primeNum(min,max);
       /**
        * @description by using primeNum function, all the prime numbers between the range is given 
        *              to an array(primeAraay)
        */
        for(var i=0;i<primeArray.length;i++)
        {   
            if(primeArray[i]==this.reverseNum(primeArray[i]))
            {
                palindrome.push(primeArray[i]);
            }
           /**
            * @description all the numbers of the primeArray is reversing and checking with original number
            *              if same, then it is storing in an array palindrome
            */
        }
        console.log("prime numbers between 1 and 1000 :"+primeArray);
        console.log("prime numbers between 1 and 1000 that are Palindrome :"+palindrome);
        console.log("anagram pairs are:");
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
                    console.log("pair ("+primeArray[k]+","+primeArray[j]+")");
                }
            }
        }
    },


/**
 * @description program to reverse a number
 * @function reverseNum it will take input a number
 * @return {integer}  it returns reverse of that number
 */
    reverseNum : function(number)
    {
        var reversed = 0;
        var digit;
        while(number>0)
        { 
            digit = number % 10;
            reversed = reversed * 10 + digit;
            number=(number-digit)/10;
        }
        return(reversed);
    },


/**
 * @description binary search program
 * @function binarySearch it will take integer or string array(sorted) and value to be searched and do the 
 *                        binary search and return the word is present or not
 * @return {integer or string} it will return if it is present, otherwise it will give errors
 */ 
    binarySearch : function(array,value)
    {
        var first=0;
        var last=array.length-1;
        mid=Math.floor((last+first)/2);
        while(array[mid]!=value && first<last)
        {
           /**
            * @description the loop will run till all the values will be checked.
            */
            if(value<array[mid])
            {
                last=mid-1;
            } 
           /**
            * @description if number is less than mid,then it will check 0 index to mid
            */
            else if(value>array[mid])
            {
                first=mid+1;
            }
           /**
            * @description if number is greater than mid,then it will check mid index to last
            */
            mid=Math.floor((last+first)/2);
        }
        if(array[mid]!=value)
        {
            console.log("element not found");
        }
        else
        {
            console.log("element found in the index "+mid);
        }
    },


/**
 * @description program to swap two numbers or strings
 * @function swap it will take two numbers number or strings
 * @return {integer or string}  it will swap those two numbers or strings.
 */
    swap : function(array,index1,index2)
    {   
        var temp=array[index1];
        array[index1]=array[index2];
        array[index2]=temp;
        return array;
    },
    

/**
 * @description Insertion sort Program
 * @function insertionSort it will sort the string array using insertion sort method
 * @return {string}  sorted array
 */
    insertionSort : function(array,size)
    {
        for(var i=1;i<size;i++)
        {
            var key = array[i];
            var j=i-1;
            while(j>=0 && array[j].toUpperCase()>key.toUpperCase())
            {
           /**
            * @description in this loop, array[j] will compared to all left sided element of array, and shifted
            */
                array[j+1]=array[j];
                j=j-1;
            }
            array[j+1]=key;
        }
        return array;
},


/**
 * @description Insertion sort Program
 * @function insertionSort it will sort the integer array using insertion sort method
 * @return {integer}  sorted array
 */
insertionSortInt : function(array,size)
{
    for(var i=1;i<size;i++)
    {
        var key = array[i];
        var j=i-1;
        while(j>=0 && array[j]>key)
        {
       /**
        * @description in this loop, array[j] will compared to all left sided element of array, and shifted
        */
            array[j+1]=array[j];
            j=j-1;
        }
        array[j+1]=key;
    }
    return array;
},


/**
 * @description bubble sort Program
 * @function bubbleSort it will sort the string array using bubble sort method
 * @return {string}  sorted array
 */
    bubbleSort : function(array,size)
    {
        
        for (var i=0;i<size;i++)
        {
            for (var j=0;j<size-1;j++)
            {
           /**
            * @description the elements checks with its next element,if the greater than next then it swaps 
            */
                if (array[j].toUpperCase() > array[j+1].toUpperCase())
                {
                    this.swap(array,j,j+1);
                }
            }
        }
        return(array);
    },


/**
 * @description bubble sort Program
 * @function bubbleSort it will sort the integer array using bubble sort method
 * @return {integer array}  sorted array
 */
    bubbleSortInt : function(array,size)
    {
    
        for (var i=0;i<size;i++)
        {
            for (var j=0;j<size-1;j++)
            {
           /**
            * @description the elements checks with its next element,if the greater than next then it swaps 
            */
                if (array[j] > array[j+1])
                {
                    this.swap(array,j,j+1);
                }
            }
        }
        return(array);
    },
    

/**
 * @description program to get current time
 * @function currentTime it will show time
 * @return {time}  it will return current time
 */
    currentTime : function()
   {
        var date=new Date();   
        return date.getTime(); 
       /**
        * @description for getting the instant time 
        */
   },


/**
 * @description program to convert temperature from celsius to fahrenheit and vice versa
 * @function temperatureConversion it will take temperature 
 * @return {temperature}  it will return converted temperature
 */
   temperatureConversion : function(temp,unit)
    { 
        var fahrenheit;
        var celsius;
        if(unit==1)
        {
            fahrenheit=(9/5)*temp+32;
            console.log("temperature in fahrenheit is : "+fahrenheit);
           /**
            * @description converting celsius to fehrenheit using formula
            */
        }
        if(unit==0)
        {
            celsius=(temp-32)*(5/9);
            console.log("temperature in celsius is : "+celsius);
           /**
            * @description converting fehrenheit to celsius using formula
            */
        }
    },


/**
 * @description program to calculate monthly payment
 * @function monthlyPayment it will take principal amount(P),time in year(Y),interest(R)
 * @return {double}  it will return monthly payment by using formula
 */
    monthlyPayment : function(P,Y,R)
    {
        var n=12*Y;
        var r=R/(12*100);
        var payment=(P*r)/(1-Math.pow((1+r),(-n)));
       /**
        * @description calculating payment using formula
        */
        console.log("Monthly Payment is : "+payment);
    },


/**
 * @description program to sorting the array using merge sort method
 * @function mergeSort it takes an array as input
 * @function merge it takes two array as input
 * @return {array}  it returns the sorted array
 */
    mergeSort : function(array) 
    { 
        var arr1=[];
        var arr2=[];
        var mid=Math.floor(array.length/2);
        if(array.length==1)
        {
            return array;
       /**
        * @description when array length will be 1 then it returns the array
        *              otherwise it devides the array
        */
        }
        for(var i=0;i<mid;i++)
        {
            arr1.push(array[i]);
        }
        for(var j=mid;j<array.length;j++)
        {
            arr2.push(array[j]);
        }
        return this.merge(this.mergeSort(arr1),this.mergeSort(arr2));
       /**
        * @description it returns the merged array of 2 sorted array
        */
    },
    merge : function(left,right)
    {
        var sorted=[];
        var leftIndex=0;
        var rightIndex=0;
        while (sorted.length<(left.length+right.length)) 
        {
       /**
        * @description this loop will continue till all the elements are merged
        */
            if(leftIndex==left.length)
            {
                for(var i=rightIndex;i<right.length;i++)
                {
                    sorted.push(right[i]);
                    rightIndex++;
                }
           /**
            * @description if all the left[] elements are already pushed to sorted[],then the remaining 
            *              right[] will directly pushed.
            */
            }
            else if(rightIndex==right.length)
            {
                for(var i=leftIndex;i<left.length;i++)
                {
                    sorted.push(left[i]);
                    leftIndex++;
                }
           /**
            * @description if all the right[] elements are already pushed to sorted[],then the remaining 
            *              left[] will directly pushed.
            */
            }
            else if (left[leftIndex].toUpperCase()<right[rightIndex].toUpperCase()) 
            {
                sorted.push(left[leftIndex]);
                leftIndex++;
           /**
            * @description if left[] element is smaller then it will pushed to sorted[]
            */
            } 
            else 
            {
                sorted.push(right[rightIndex]);
                rightIndex++;
           /**
            * @description if right[] element is smaller then it will pushed to sorted[]
            */
            }
        }
        return sorted;
    },
 

/**
 * @description program to calculating the minimum number of notes as well as the notes to be returned 
 *              by the Vending Machine as a Change
 * @function vendingMachine it will take amount of money as input
 * @return {number}  it will return minimum number of notes
 */
    vendingMachine : function(amount)
    {
        var count=0;
        /**
        * @description count value will increase each time a note is added
        */
        if(amount>=1000)
        {
       /**
        * @description first it checks the amount is greater then 1000, if yes then how many times 1000 can
        *              be divisible by amont and it prints
        */
            var note=Math.floor(amount/1000);
            amount=amount-note*1000;
            console.log(note+" numbers of Rs.1000");
            count=count+note;
        }
       /**
        * @description same thing will be repeated for 500,100,50,10,5,2,1
        */
        if(amount>=500)
        {
            var note=Math.floor(amount/500);
            amount=amount-note*500;
            console.log(note+" numbers of Rs.500");
            count=count+note;
        }
        if(amount>=100)
        {
            var note=Math.floor(amount/100);
            amount=amount-note*100;
            console.log(note+" numbers of Rs.100");
            count=count+note;
        }
        if(amount>=50)
        {
            var note=Math.floor(amount/50);
            amount=amount-note*50;
            console.log(note+" numbers of Rs.50");
            count=count+note;
        }
        if(amount>=10)
        {
            var note=Math.floor(amount/10);
            amount=amount-note*10;
            console.log(note+" numbers of Rs.10");
            count=count+note;
        }
        if(amount>=5)
        {
            var note=Math.floor(amount/5);
            amount=amount-note*5;
            console.log(note+" numbers of Rs.5");
            count=count+note;
        }
        if(amount>=2)
        {
            var note=Math.floor(amount/2);
            amount=amount-note*2;
            console.log(note+" numbers of Rs.2");
            count=count+note;
        }
        if(amount>=1)
        {
            var note=Math.floor(amount/1);
            amount=amount-note*1;
            console.log(note+" numbers of Rs.1");
            count=count+note;
        }
        console.log("total number of notes : "+count);
    },


/**
 * @description program to findout the day of week
 * @function dayOfWeek it takes year,month,date as inputs
 * @return {day}  it will return the day of week
 */
    dayOfWeek : function(y,m,d)
    {
        var y0=y-Math.floor((14-m)/12);
        var x=y0+Math.floor(y0/4)-Math.floor(y0/100)+Math.floor(y0/400);
        var m0=m+12*Math.floor((14-m)/12)-2;
        var d0=(d+x+Math.floor(31*m0/12))%7;
       /**
        * @description by using formula it finds the day number(d0)
        */
        switch(d0)
        {
            case 0:
                console.log("SUNDAY"); break;
            case 1:
                console.log("MONDAY"); break;
            case 2:
                console.log("TUESDAY"); break;
            case 3:
                console.log("WEDNESDAY"); break;
            case 4:
                console.log("THURSDAY"); break;
            case 5:
                console.log("FRIDAY"); break;
            case 6:
                console.log("SATURDAY"); break;
        }
    },


/**
 * @description program to findout the squareroot of a given number
 * @function sqrt it takes a non-negative number
 * @return {double}  it will return the square root of that number
 */
    sqrt : function(c)
    {
        if(c<0)
        {
            return(console.log("Invalid number\nplease enter a non-negative number"));
        }
        var t=c;
        var epsilon=1e-15;
        while(Math.abs(t-c/t)>epsilon*t)
        {
        t=(c/t+t)/2;
        }
       /**
        * @description by using above formula, it calculates the square root
        */
        console.log("square root of "+c+" is : "+t);
    },


/**
 * @description program for representing decimal to binary value
 * @function toBinary it takes decimal inputs
 * @return {binary value}  it will return binary of given decimal value
 */
    toBinary : function(decimal)
    {
        var binary=[];
        var rev=[];
        var index=0;
        while(decimal>0)
        {
            rev[index]=decimal%2;
            index++;
            decimal=Math.floor(decimal/2);
           /**
            * @description it stores the reverse of the binary numbers in rev[]
            */
        }
        for(var i=0;i<rev.length;i++)
        {
            binary[i]=rev[rev.length-1-i];
           /**
            * @description reversing the rev[] and storing it to binary[]
            */
        }
        return binary;
    },


/**
 * @description program for converting a decimal to binary and 
 *              1.Swapping nibbles and finding the new number
 *              2.Finding the resultant number is the number is a power of 2
 * @function binary it takes decimal inputs
 * @return {statement}  it will return the number is divisible by 2 or not
 */
    binary : function(binary)
    {
        var decimal=0;
        var array=[];
        for(var i=0;i<8-binary.length;i++)
        {
            array.push(0);
           /**
            * @description to the left of array, pushing 0 to make it 8 digit
            */
        }
        for(var j=0;j<binary.length;j++)
        {
            array.push(binary[j]);
           /**
            * @description pushing the binary value to array
            */
        }
        console.log("8 digit binary value is: "+array.join(""));
        for(var i=0;i<4;i++)
        {
            array=this.swap(array,i,i+4);
           /**
            * @description swapping the first 4 digit to last 4 digit
            */
        }
        console.log("after swapping the 8 digit value : "+array.join(""));
        for(var k=0;k<8;k++)
        {
           /**
            * @description converting binary to decimal
            */
            if(array[k]==1)
            {
                decimal=decimal+Math.pow(2,7-k);
            }
        } 
        console.log("new number is : "+decimal);
        while(decimal%2==0 && decimal>0)
        {
            decimal=Math.floor(decimal/2);
        }
        if(decimal==1)
            console.log("it is a power of 2");
        else    
            console.log("its not a power of 2");
    },


/**
 * @description program for finding the number
 * @function findNum it takes commandline integer input
 * @return {statement}  it will check the number
 */
    findNum : function(value)
    {
        var readlinesync = require('readline-sync');
        var arr=[];
        var arr1=[];
        for(var i=1;i<=value;i++)
        {
            arr.push(i);
           /**
            * @description values from 1 to that range is first pushed to an array
            */
        }         
        var firstindex=0;
        var lastindex=arr.length-1;
        while(firstindex<=lastindex)
        {
            var mid=Math.floor((firstindex + lastindex)/2);
            var value=readlinesync.question(`\nis ${arr[mid]} is the element? \n if yes press 1 -> else press 0 ->`)
            if(value==0)
            {
           /**
            * @description if no then it will check further by asking whether the number is greater than mid or not
            */
                arr1.push(arr[mid])
                var val2=readlinesync.question(`\n if your value >${arr[mid]} \n if yes press1 -> if no press 0 ->`)
                {
                    if(val2==1)
                    {
                        firstindex=mid+1;
                    }
                    else
                    {
                        lastindex=mid-1;
                    }
                }   
            }
            else if(value==1)
            {
           /**
            * @description if yes then the mid value is the number
            */
                console.log("\nelement found");
                console.log("total search :" +arr1);
                process.exit();    
            }
        }   
    }


}