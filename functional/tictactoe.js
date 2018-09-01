/******************************************************************************
 *  Execution       :   default node         cmd> node tictactoe.js 
 *                      
 *  Purpose         :   Program to play a Tic­Tac­Toe Game
 * 
 *  @description    
 * 
 *  @file           : tictactoe.js
 *  @overview       : tictactoe module play tic-tac-toe game by 2 players
 *  @module         : tictactoe - 
 *  @author         : Simani Meher <simanimeher@gmail.com>
 *  @version        : v.4.2.6
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var prompt = require('prompt');
var board ={1:" ", 2:" ", 3:" ", 4:" ", 5:" ", 6:" ", 7:" ", 8:" ", 9:" " };
   /**
    * @description All of a first, a empty array is created.elements of this array given is space(" ").
    */
console.log('Game started: \n');
console.log(' 1 | 2 | 3 \n'+' --------- \n'+' 4 | 5 | 6 \n'+' --------- \n'+' 7 | 8 | 9 \n');
   /**
    * @description Here a table will be printed with number 1 to 9 just to show the position 
    *              of the content of the table.
    */
var winPossibilities = [[1, 2, 3],[4, 5, 6],[7, 8, 9],[1, 4, 7],[2, 5, 8],[3, 6, 9],[1, 5, 9],[3, 5, 7]];
   /**
    * @description These are all the possibilities of set of a row or column or diagonal.
    */
function win(player) 
{
   /**
    * @description This function will check whether any row or column is filled by same mark or not.
    *              If it is filled by same mark then it will return true,
    *              if it is not filled by same mark, then it will return false.
    */
    for (var i=0;i<winPossibilities.length;i++) 
    {
        var count = 0;
        for (var j=0;j<winPossibilities[i].length;j++) 
        {
            if (board[winPossibilities[i][j]]==player) 
            {
                count++;
            }
            if (count==3) 
            {
                return true;
               /**
                * @description GAME OVER, i.e, any of one row or column has marked by same player.
                */
            }
        }
    }
    return false;
}
var draw=0;
function play(player) 
{ 
    
    console.log("Your turn player: " + player);
       /**
        * @description Alternately both the players will get chance to play the game.
        */
    prompt.start();
    prompt.get(["position"], function (err, result) 
    {
       /**
        * @description it will take the position from the user where the player wants to give the mark
        */
        var x;
        var checkint;
        if(isNaN(result.position))
        {
           /**
            * @description it will check whether the number given by user is an integer or not.
            */
            checkint=false;
        }
        else
        {
            x=parseFloat(result.position);
           /**
            * @description parseFloat determines if the first character in the specified string is a number. 
            *              it will take the first character of the input
            */
            checkint= (x | 0)==x;
        }
        if (checkint==true && board[result.position]== " ") 
        {
            draw++;
           /**
            * @description it will check whether the position, that the user has given is already 
            *              marked or not. if it is already marked or the user has given the wrong input,
            *              it will print invalid.
            */
            board[result.position]= player.toUpperCase();
            console.log("\n"+" "+board[1]+" | "+board[2]+" | "+board[3]+"\n"
            +" ---------\n"+" "+board[4]+" | "+board[5]+" | "+board[6]+"\n"
            +" ---------\n"+" "+board[7]+" | "+board[8]+" | "+board[9]+"\n");
           /**
            * @description each time the user will give input, it will show the curresponding table.
            *              to print the marks in uppercase, we have used predefined toUpperCase function.
            */
            if (win(player)==true) 
            {
                if (player=="X") 
                {
                    console.log("PLAYER1 ("+player+") is the Winner");
                    return; 
                } 
                else 
                {
                    console.log("PLAYER2 ("+player+") is the Winner");
                    return;
                }
               /**
                * @description if any row or column is filled with same mark, then it will first check
                *              the mark and it will declare the result(who is the winner)
                */
            }
            if(draw==9)
            {
                return(console.log("DRAW\nYou Can Play Again"));
               /**
                * @description when none of the player win, then it will give a message.
                */
            }
            if (player=="X") 
            {
                play("O");
            } 
           /**
            * @description it will give the chance to play both of the players. After player1, next player
            *              will be player2 and after player2, next one will be player1 and so on.
            */
            else 
            {
                play("X");
            }
        } 
        else
        {
            console.log("Invalid Input..Please Enter Again");
            play(player);
           /**
            * @description if any user is giving invalid input, then one more time they have to
            *              give the input for getting a true value.
            */
        }
    });
}
play("X");
/**
 * @description for the very first time, the play function will be called.
 */