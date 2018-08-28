const _ =require("lodash")
module.exports={

//printing “Hello <<UserName>>, How are you?”
    hello : function(userinput)//userinput=name
    {   if(userinput.length>3)//name should be atleast 3 characters
        {
            console.log("hello "+userinput+", how are you?");
        }
        else
        {
            console.log("name should be atleast 3 characters");//less than 3 character
        }
    },

//printing Percentage of Head vs Tails by fliping a coin multiple times
    flipcoin : function(userinput)//taking input how many times you want to flip the coin
    {
        if(userinput<1)//input must be a positive integer
        {
             console.log("input should be a positive integer");
        }
        else
        {
            var head=0,tail=0;//initially we are taking head and tail as 0
            for(var v=0;v<userinput;v++)
            {
                if(Math.random()>0.5)
                {
                    head++;// if value is greater then 0.5 then it is head
                }
                else
                {
                    tail++;// if value is less then 0.5 then it is tail
                }
        
            }
            console.log("percentageof head = "+(head/userinput)*100+" %");
            console.log("percentageof tail = "+(tail/userinput)*100+" %");
        }
    },  

//checking whether the given year is leafyear or not
    leafyear : function(userinput)//userinput=year
    {
       if(((userinput%4==0)&&(userinput%100!=0))||(userinput%400==0))//leafyear condition
       {
           console.log("leaf year");
       }
       else
       {
           console.log("not leaf year");
       }
    },

//printing a table of the powers of 2
    power : function(userinput)//taking the value of range
    {
        var value=2;
        if((userinput>31)||(userinput<1))//Only works if 0 <= N < 31 since 2^31 overflows an int
        { 
         read.close();
         return console.log("invalid input");
        }
        for(var i=1;i<=userinput;i++)
        {    
            console.log("2^"+i+"="+value);
            value*=2;
        }
    },

//Printing Nth harmonic number: 1/1 + 1/2 + ... + 1/N
    harmonic : function(userinput)//userinput is value of N
    {
       var a=1;
       for(var i=1;i<=userinput;i++)
       {
            a*=i;
       }
       var b=0;
       for(var j=1;j<=userinput;j++)
       {
            b=b+a/j;
       }
       console.log(userinput+"th harmonic value is : "+b+"/"+a);//it will print in fraction form
    },

//printing the prime factorization of given number using brute force.
    prime : function(userinput)//input is taken as userinput
    {
        while(userinput%2==0)//if the num is div by 2 then it will print 2 
        {
            console.log(2);
            userinput/=2; //the num of time it is div by 2, that num of time it will print 2
        }
        for(var i=3;i<=Math.sqrt(userinput);i+=2)//loop will run for 3 to sqrt of num because the prime factor will not greater than sqrt of num
        {
            while(userinput%i==0)
            {
                console.log(i);
                userinput/=i;
            }
        }
        if(userinput>2)
        {
            console.log(userinput);//result will print
        }

    },

//gambler program
    gambler : function(stake,goal,time)// you have "stake" amount of money, max you can win "goal" amount of money and "time" times you can play the game
    {
        var game=0,bal=0,win=0,loss=0;
        while(stake>0&&goal>=bal&&time>0)//loop will be continue till this condition will be satishphied
        {
            stake--;   //one bet will reduce 1$
            game++;    //you have played 1 more game
            time--;    //game will be decrese by 1
            if(Math.random()>0.5)//you win the game(random)
            {
                bal+=10;    //you will get 3$ in your bal account,if you win the game
                win++;
            }
            
            else//you lose the game
            {   
                loss++;
                stake--;//your stake money will reduce, if you lose     
            }     
        
        }
    
        if(stake<=0)//if the stake money will finished
        {
            console.log("\n\nRESULT\nstake amount is 0");
        }
        if(goal<=bal)//reach the goal money
        {
            console.log("\n\nRESULT\nyou have reached your goal amount");           
        }
        if(time<1)//no of times you want to play is over
        {
            console.log("\n\nRESULT\ntime over");
        }
        console.log("num of win: "+win);
        console.log("win percentage: "+(win/game)*100+" %");
        console.log("num of lose: "+loss);
        console.log("lose percentage: "+(loss/game)*100+" %");
        console.log("you won "+bal+" $");
        console.log("GAME OVER");
    }, 

//coupon
    coupon : function(min,max)
    {
        var random=[]; //empty array to store values
        for(var i=min;i<max;i++) 
        {
            var n= _.random(min,max) //it will generate a random value between min-max range
            random.push(n);   //then the value will be stored in random[]
        }
        console.log(random);  //printing the random array
        console.log("no of coupon generated= "+random.length);
        var distinct=new Set(random); //it will remove the repeated values
        console.log(distinct);  //printing the distinct values
        console.log("number of distinct coupon ",distinct.size);
    },

//2d array
    array : function(read,row,col)
    {
        var size=row*col;//total num of element
        var arr1=[];     //initialising a array to store the value
        function input(size)
        {
            if (arr1.length >= size)
            {
                var v=0;
                arr2 = [];
                var string = "";   //empty string
                for(var i=0;i<row;i++)
                {
                    for(var j=0;j<col;j++)
                    {
                        string = string + arr1[v] + " "; //concat element with string
                        v++;
                    }
                    arr2.push(string); // stroing that string in another array
                    string = "";
                }
                for (var pos = 0; pos < arr2.length; pos++)// for storing the array in matrix format 
                {
                    console.log(arr2[pos]); 
                }
                read.close();
            }
            else  //adding element to array
            {
                read.question("Please enter the "+(arr1.length + 1)+" th value: ", function(val)
                {
                    arr1.push(val); //pushing element
                    input(size);   //recurssion method call
                });
            }
        }
        input(size);// function will call for the first time
    },

//Sum of three Integer adds to ZERO
    triplets : function(read,size)
    {
        var arr=[];   // empty array to store integers input
        var count=0; //num of triplets we will count
        function input(size)
        {
            if (arr.length >= size)
            {
                console.log();
                for(var i=0;i<size;i++)
                {
                    for(var j=i+1;j<size;j++)
                    {
                        for(var k=j+1;k<size;k++)
                        {
                            if(Number(arr[i])+Number(arr[j])+Number(arr[k])==0)//sum of integers
                            {
                                console.log("triplets ("+arr[i]+","+arr[j]+","+arr[k]+")");
                                count++;// one more triplet
                            }
                        }
                    }
                } 
                console.log("num of triplets :"+count); // num of triplets
                read.close();
            }   
            else  // array element from users
            {
                read.question("Please enter the "+(arr.length + 1)+" th value: ", function(val)
                {
                    arr.push(val);   //pushing value to array
                    input(size);      // reccursion function call
                });
            }
        }
        input(size); // function call for the first time
    },

//printing distance of a point from origin
    distance : function(x,y)
    {
        var c=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));// distance of point(x,y) from origin
        console.log("distance from (x,y) to (0,0) is: "+c);
    },

//permutation
    // permutation : function(input)
    // {
    //     var char=[];
    //     char=input.split("");
    //     for(var j=0;j<char.length;j++)
    //     {
    //         var arr=[];
    //         for(var i=0;i<char.length;i++)
    //         {
    //             if(i==char.length-1)
    //             {
    //                 arr[i]=char[0];
    //             }
    //             else
    //             {
    //                 arr[i]=char[i+1];
    //             }   
    //         }
    //         console.log(arr);
    //         char=arr;
    //         var a=arr;
    //         //console.log(a.reverse());
    //     }
    // },

//Stopwatch Program for measuring the time that elapses betweenthe start and end clicks
   currentTime : function()
   {
        var d=new Date();    //it will give today's date
        return d.getTime(); //it will give the current time
   },
   elapsedTime : function(start,stop)
   {
       var t=(stop-start)/1000; //since it comes in mili sec, we are converting it to seconds
       console.log("elapsed time: "+t+"seconds");
   },

//tic-tac-toe game
    // tictactoe : function(input)
    // {
    //     if(input=="yes")
    //     {
    //         var X,O,x,y;
    //         var board=[[]];
            
    //     }
    // },

//printing the roots of the quadratic equation
    quadratic : function(a,b,c)//equation is a*x*x + b*x + c
    {
        
        var del= b*b-4*a*c;
        var x1=(-b+Math.sqrt(del))/(2*a);//fist root
        var x2=(-b-Math.sqrt(del))/(2*a);//second root
        var v=Math.sqrt(-del);
        if(del>0)
        {
            console.log("roots of x are: x1="+x1+" and x2="+x2);//roots are real and unequal
        }
        else if(del=0)
        {
            console.log("both the roots are same i.e x1=x2="+x1);//real and equal
        }
        else
        {
            console.log("roots of x are:x1= "+(-b/2*a)+"+i"+v/2*a+" and x2= "+(-b/2*a)+"-i"+v/2*a);//roots are not real
        }
    },

//windchill program
    windchill : function(t,v)
    {
        if((t>50)||(v>120)||(v<3))//tempture must not be greater than 50 and 3<=pressure<=120
        {
            console.log("invalid inputs");
            return;
        }
        var w=35.74+0.6215*t+(0.4275*t-35.75)*Math.pow(v,0.16);// formula for calculate windchill
        console.log("wind chill :"+w);    
    }
    
    
}