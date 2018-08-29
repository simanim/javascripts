const _ =require("lodash")
module.exports={

/**
 * @description taking input as string and Replace String Template “Hello <<UserName>>, How are you?”
 * @function hello Getting input as srtring.(name)
 * @return {String}  printing “Hello <<UserName>>, How are you?”
 */
    hello : function(userinput)
    {   if(userinput.length>=3)
        {
           /**
            * @description the name should be atleast 3 character
            */
            console.log("hello "+userinput+", how are you?");
        }
        else
        {
           /**
            * @description if the string length is less than 3 then it will print invalid
            */
            console.log("INVALID\nname should be atleast 3 characters");
        }
    },


/**
 * @description it will generate random values by flipping the coin. head and tail will count
 * @function flipcoin Getting input as integer.(num of times user wants to flip the coin)
 * @return {double} it will return the percentage values of getting head and tail
 */
    flipcoin : function(userinput)
    {
        if(userinput<1)
        {
           /**
            * @description the input must be a positive integer
            */
            console.log("input should be a positive integer");
        }
        else
        {
            var head=0,tail=0;
           /**
            * @description initially we are taking head_count and tail_count as 0
            */
            for(var v=0;v<userinput;v++)
            {
                if(Math.random()>0.5)
                {
                    head++;
               /**
                * @description if value is greater then 0.5 then it is head and head will be increased by 1
                */
                }
                else
                {
                    tail++;
               /**
                * @description if value is less then 0.5 then it is tail and tail will be increased by 1
                */
                }
        
            }
            console.log("percentageof head = "+(head/userinput)*100+" %");
            console.log("percentageof tail = "+(tail/userinput)*100+" %");
        }
    },  


/**
 * @description checking whether the given year is leapyear or not
 * @function leapyear Getting input as integer.(year)
 * @return {string} it will return the message that the year is leapyear or not
 */
    leapyear : function(userinput)
    {
       if(((userinput%4==0)&&(userinput%100!=0))||(userinput%400==0))
       {
           /**
            * @description if any year satisfy this condition then it will be a leapyear
            */
           console.log("the given year is a leap year");
       }
       else
       {
           console.log("the given year is not a leap year");
       }
    },


/**
 * @description printing the table of the powers of 2 to a given range
 * @function power Getting input as integer.(range)
 * @return {integer} it will return the values of powers of 2
 */
    power : function(userinput)
    {
        var value=2;
        if((userinput>31)||(userinput<1))
        { 
            /**
            * @description Only works only when 0 <= N <= 31 since 2^31 overflows an int
            */
            return console.log("invalid input\nthe range should not be greater than 31");
            read.close();
        }
        for(var i=1;i<=userinput;i++)
        {    
            console.log("2^"+i+"="+value);
            value*=2;
            /**
            * @description it will go from 2 power 1 to 2 power the given range and print all the values
            */
        }
    },


/**
 * @description Printing Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
 * @function harmonic Getting input as integer. (range of N) 
 * @return {fraction value} it will return the value of harmonic sum in fraction form
 */
    harmonic : function(userinput)
    {
       var denominator=1;
       for(var i=1;i<=userinput;i++)
       {
            denominator*=i;
       }
       var numerator=0;
       for(var j=1;j<=userinput;j++)
       {
            numerator=numerator+denominator/j;
       }
       /**
        * @description Since the value will be print in fraction form so we have to calculate the numarator and denominator part separately and print the result
        */
       console.log(userinput+"th harmonic value is : "+numerator+"/"+denominator);
    },


/**
 * @description printing the prime factorization of given number
 * @function prime Getting input as integer.(number for which we have to find the prime factors)
 * @return {integer} it will return the prime factors of the given number
 */
    prime : function(number)
    {
        while(number%2==0)
        {
            console.log(2);
            number/=2; 
          /**
            * @description the num of time it is div by 2, that number of time it will print 2
            */
        }
        for(var i=3;i<=Math.sqrt(number);i+=2)
        {
            while(number%i==0)
            {
                console.log(i);
                number/=i;
            }
           /**
            * @description loop will run for 3 to sqrt of num because the prime factor will not greater than sqrt of number and print the values how many times it is divisible by number
            */
        }
       if(number>2)
        {
            console.log(number);
           /**
            * @description finnaly it will print the last number. We are putting condition number>2 because it should not print 1 since 1 is not a prime number
            */
        }
    },


/**
 * @description program to play Gambler and print the Score of game
 * @function gambler Getting 3 input as integer.(stoke:how much money you have,goal:what is the max goal,time:how many times you want to play the game)
 * @return {integer,and percentage of win and loss} it will return the score of game
 */
    gambler : function(stake,goal,time)
    {
        var game=0,bal=0,win=0,loss=0;
        while(stake>0&&goal>=bal&&time>0)
        {
           /**
            * @description loop will be continue till this condition will be satishphied
            */
            game++;    
            stake--;  
            time--;    
           /**
            * @description you have played 1 more game,one bet will reduce 1$,game will be decrese by 1
            */
            if(Math.random()>0.5)
            {
                bal+=10;    
                win++;
               /**
                * @description you win the game.you will get 3$ in your bal account
                */
            }
            else
            {   
                loss++;
                stake--; 
               /**
                * @description you lose the game.your stake money will reduce by 1$
                */
            }     
        }
        if(stake<=0)
        {
            console.log("\n\nRESULT\nstake amount is 0");
           /**
            * @description if the stake money will finished
            */
        }
        if(goal<=bal)
        {
            console.log("\n\nRESULT\nyou have reached your goal amount");           
           /**
            * @description reach the goal money
            */
        }
        if(time<1)
        {
            console.log("\n\nRESULT\ntime over");
           /**
            * @description no of times you want to play is over
            */
        }
        console.log("num of win: "+win);
        console.log("win percentage: "+(win/game)*100+" %");
        console.log("num of lose: "+loss);
        console.log("lose percentage: "+(loss/game)*100+" %");
        console.log("you won "+bal+" $");
        console.log("GAME OVER");
       /**
        * @description finally it will print the result
        */
    }, 


/**
 * @description program to generate random coupon number and to process distinct coupons
 * @function coupon it will take minimum and maximum number of coupon number
 * @return {array} it will return the array of distinct coupon number
 */
    coupon : function(min,max)
    {
        var random=[]; 
       /**
        * @description initially a empty array will be taken to store the coupon numbers generated, then using random function we can create numbers
        */
        for(var i=min;i<max;i++) 
        {
            var n= _.random(min,max)
            random.push(n); 
           /**
            * @description it will generate a random value between min-max range and the value will be stored in random[]
            */
        }
        console.log(random); 
        console.log("no of coupon generated= "+random.length);
        var distinct=new Set(random); 
        console.log(distinct);  
        console.log("number of distinct coupon ",distinct.size);
       /**
        * @description it will print the random array and by using Set function it will print the distinct values by rejecting the repeated values
        */
    },


/**
 * @description program to reading values in 2D arrays and printing them out
 * @function array it will take row size and column size as inputs, and to read elements from users we have give read as input also
 * @return {array} it will return the array in matrix format
 */
    array : function(read,row,col)
    {
        var size=row*col;
        var arr1=[];  
       /**
        * @description size is the total number of elements given by the user and to store the elements, we are taking a empty array
        */
        function input(size)
        {   
           /**
            * @description elements from users is already added to arr1[]
            */
            if (arr1.length >= size)
            {   
                var v=0;
                arr2 = [];
                var string = ""; 
                for(var i=0;i<row;i++)
                {
                    for(var j=0;j<col;j++)
                    {
                        string = string + arr1[v] + " "; 
                        v++;
                    }
                    arr2.push(string); 
                    string = "";
                   /**
                    * @description cancating element to an empty string and storing the strings in an empty array arr2[]
                    */
                }
                for (var pos = 0; pos < arr2.length; pos++)
                {
                    console.log(arr2[pos]); 
                }
                read.close();
            }
            else  
            {
                read.question("Please enter the "+(arr1.length + 1)+" th value: ", function(val)
                {
                    arr1.push(val); 
                    input(size);  
                   /**
                    * @description pushing element to array and again calling the function for further pushing(recurssion call)
                    */
                });
            }
        }
        input(size);
       /**
        * @description function will be called for the very first time
        */
    },


/**
 * @description program to count the number of triples that sum to exactly 0.
 * @function triplets it will take the size of array and it will also take the values from users as input
 * @return {array} it will return the set of 3 numbers, sum of those is zero
 */
    triplets : function(read,size)
    {
        var arr=[];   
        var count=0; 
       /**
        * @description we are taking an empty array to store integers input and num of triplets we will count. initially count will be 0
        */
        function input(size)
        {
           /**
            * @description elements from users is already added to arr[]
            */
            if (arr.length >= size)
            {
                console.log();
                for(var i=0;i<size;i++)
                {
                    for(var j=i+1;j<size;j++)
                    {
                        for(var k=j+1;k<size;k++)
                        {
                            if(Number(arr[i])+Number(arr[j])+Number(arr[k])==0)
                            {
                                console.log("triplets ("+arr[i]+","+arr[j]+","+arr[k]+")");
                                count++;// one more triplet
                               /**
                                * @description if the sum of three elemrnts of that array will 0 then it will print those values as a set and the count will increased
                                */
                            }
                        }
                    }
                } 
                console.log("num of triplets :"+count); 
                read.close();
            }   
            else 
            {
                read.question("Please enter the "+(arr.length + 1)+" th value: ", function(val)
                {
                    arr.push(val);  
                    input(size); 
                });
               /**
                * @description taking elements from users and pushing to array by recurssion function call
                */
            }
        }
        input(size);
       /**
        * @description function will be called for the very first time
        */
    },


/**
 * @description printing distance of the given point from origin
 * @function distance it will take the co-ordinate value of the point i.e x and y
 * @return {integer} it will return the distance of that co-ordinate from origin
 */
    distance : function(x,y)
    {
        var distance=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
        console.log("distance from (x,y) to (0,0) is: "+distance);
       /**
        * @description by using the formula we can calculate the distance and we are printing it
        */
    },


/**
 * @description printing all the permutations of given string 
 * @function permutation it will take the string as input
 *  @function swap swapping of characters of given index1 and index2
 * @return {string} it will return all the permutations of that string
 */
    permutation : function(string,startindex,endindex)
    { 
        if(startindex==endindex)
        {
            console.log(string.join(''));
           /**
            * @description it will get the characters after swaping and print as a string when indexs are same
            */
        }
        else
        {
            for(var i=startindex;i<=endindex;i++)
            { 
                string=this.swap(string,startindex,i);
                this.permutation(string,startindex+1,endindex);
                string=this.swap(string,i,startindex);
               /**
                * @description recurssion call to again swap the numbers. we are using swap function to exchange the character values
                */
            }
        }
    },
    swap : function(array,index1,index2)
    {   
        var temp=array[index1];
        array[index1]=array[index2];
        array[index2]=temp;
        return array;
    },


/**
 * @description Stopwatch Program for measuring the time that elapses betweenthe start and end clicks
 * @function currentTime it will take input to start and stop
 * @function elapsedTime it will take start and stop time
 * @return {string} it will return the duration from start to stop
 */
   currentTime : function()
   {
        var date=new Date();   
        return date.getTime(); 
       /**
        * @description it will give the current time
        */
   },
   elapsedTime : function(start,stop)
   {
       var time=(stop-start)/1000;
       console.log("elapsed time: "+time+"seconds");
       /**
        * @description it will give the elapsed time.since it comes in mili sec, we are converting it to seconds
        */
   },

//tic-tac-toe game
    // tictactoe : function(read)
    // {
    //     console.log("started");
    //     var board=[];
    //     var col,row;
    //     console.log(board[0][2]);
    // },


/**
 * @description printing the roots of the quadratic equation, a*x*x + b*x + c
 * @function quadratic it will take the values of a,b,c
 * @return {integer} it will return the roots of x
 */
    quadratic : function(a,b,c)
    {
       /**
        * @description here we are getting the roots by using formula
        */
        var del= b*b-4*a*c;
        var x1=(-b+Math.sqrt(del))/(2*a);
        var x2=(-b-Math.sqrt(del))/(2*a);
        var v=Math.sqrt(-del);
        if(del>0)
        {
            console.log("roots of x are: x1="+x1+" and x2="+x2);
           /**
            * @description when roots are real and unequal
            */
        }
        else if(del=0)
        {
            console.log("both the roots are same i.e x1=x2="+x1);
           /**
            * @description when roots are real and equal
            */
        }
        else
        {
            console.log("roots of x are:x1= "+(-b/2*a)+"+i"+v/2*a+" and x2= "+(-b/2*a)+"-i"+v/2*a);
           /**
            * @description when roots are not real
            */
        }
    },


/**
 * @description finding the windchill value by using formula
 * @function windchill it will take the values of temperature and wind pressure
 * @return {double} it will return the value of windchill
 */
    windchill : function(t,v)
    {
        if((t>50)||(v>120)||(v<3))
        {
            console.log("invalid inputs");
            return;
           /**
            * @description tempture must not be greater than 50 and 3<=pressure<=120
            */
        }
        var w=35.74+0.6215*t+(0.4275*t-35.75)*Math.pow(v,0.16);
        console.log("wind chill :"+w);  
       /**
        * @description using windchill formula, here we are calculating the windchill value and printing that value
        */  
    }
    
    
}