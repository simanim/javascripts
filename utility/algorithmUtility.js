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
 * @description program for printing the prime numbers between 0 to 1000
 * @function primeNum it will take input 0 and 1000
 * @return {integer}  it returns all the prime numbers between the range
 */
    AnagPal : function(min,max)
    {
        var palindrome=[];
        var primeArray=[];
        primeArray=this.primeNum(min,max);
        var revArray=[];
        for(var k=0;k<primeArray.length;k++)
        {   
            var reversed=this.reverseNum(primeArray[k]);
            revArray.push(reversed);
        }
        for(var i=0;i<primeArray.length;i++)
        {
            if(primeArray[i]==revArray[i])
            {
                palindrome.push(primeArray[i]);
            }
        }
        console.log("prime numbers between 1 and 1000 :"+primeArray);
        console.log("prime numbers between 1 and 1000 that are Palindrome :"+palindrome);
        console.log("anagram pairs are:");
        for(var k=0;k<primeArray.length;k++)
        {
            for(var j=k+1;j<primeArray.length;j++)
            {
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

    reverseNum : function(number)
    {
        var reversed = 0;var digit;
        while(number>0)
        { 
            digit = number % 10;
            reversed = reversed * 10 + digit;
            number=(number-digit)/10;
        }
        return(reversed);
    },

    binarySearch : function(array,value)
    {
        var first=0;
        var last=array.length-1;
        mid=Math.floor((last+first)/2);
        while(array[mid]!=value && first<last)
        {
            if(value<array[mid])
            {
                last=mid-1;
            } 
            else if(value>array[mid])
            {
                first=mid+1;
            }
            mid=Math.floor((last+first)/2);
        }
        if(array[mid]!=value)
        {
            console.log("element not found");
        }
        else
        {
            console.log("the given value is at "+mid+" position");
        }
    },

    swap : function(array,index1,index2)
    {   
        var temp=array[index1];
        array[index1]=array[index2];
        array[index2]=temp;
        return array;
    },
    
    insertionSort : function(array,size)
    {
        for(var i=1;i<size;i++)
        {
            var key = array[i];
            var j=i-1;
            while(j>=0 && array[j]>key)
            {
                array[j+1]=array[j];
                j=j-1;
            }
            array[j+1]=key;
        }
        return array;
    },

    bubbleSort : function(array,size)
    {
        for (var i=0;i<size;i++)
        {
            for (var j=0;j<size-1;j++)
            {
                if (array[j] > array[j+1])
                {
                    this.swap(array,j,j+1);
                }
            }
        }
        return(array);
    },

    currentTime : function()
   {
        var date=new Date();   
        return date.getTime(); 
   },

   elapsedTime : function(start,stop)
   {
       var time=(stop-start)/1000;
       return time;
   },

   temperatureConversion : function(temp,unit)
    { 
        var fahrenheit;
        var celsius;
        if(unit==1)
        {
            fahrenheit=(9/5)*temp+32;
            console.log("temperature in fahrenheit is : "+fahrenheit);
        }
        if(unit==0)
        {
            celsius=(temp-32)*(5/9);
            console.log("temperature in celsius is : "+celsius);
        }
    },
    monthlyPayment : function(P,Y,R)
    {
        var n=12*Y;
        var r=R/(12*100);
        var payment=(P*r)/(1-Math.pow((1+r),(-n)));
        console.log("Monthly Payment is : "+payment);
    }
}