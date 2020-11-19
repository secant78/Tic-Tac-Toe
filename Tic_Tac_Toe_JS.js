$(document).ready(function(){
  
//contains winning combination
var winConditionArray = [["1","5","9"],["3","5","7"],["1","2","3"],["4","5","6"],["7","8","9"],["1","4","7"],["2","5","8"],["3","6","9"]];



  
  //scores
var playeronescore = 0;
  var playertwoscore = 0;

//defines the players in the game
function player (){
  this.name;
  this.turn;
  this.winCondition = false;
  this.clicked = [];
  this.computer = false;
}

  
  //player 1
var player1 = new player();
player1.turn = true;
  player1.name = 'X';
  //ayer1.computer = false;

  //player 2
var player2 = new player();
player2.turn = false;
  player2.name = 'O';
 //layer2.computer = false;
  
  //player 3
  var player3 = new player();
  player3.turn = false;
  player3.name = 'Q';
  
  //player 4
  var player4 = new player();
  player4.turn = false;
  player4.name = 'R';

  //when button is pressed computer will play with you
  $('#computer').on('click', function(){
    player2.computer = true; 
    console.log(player2.computer);
  });
  
  //when button is pressed you can play human vs human
  $('#human').on('click', function(){
    player2.computer = false;
  });
  
  function resetGame(){
    player1.clicked = [];
      player2.clicked = [];
    player3.clicked = [];
    player1.turn = true;
    player2.turn = false;
    
       $('.edit').text("");
      $('.edit').css({
      "background-color":""
    });
    
  }
  
  var reset = false;
  
  function continuePlaying(){
    $('#resetDiv').append($('<input type="button" value="yes" class="btn btn-primary"/>'));
    
    
  }
  
  /*
  function computerMove(randomCell){
  //incomplete AI. AI picks any random cell on the board.
    return ((Math.floor(Math.random() * randomCell)) + 1);

  }
  function computerTurn(){
    var computerPickedSquare = computerMove(9);
     var filledSquare = $('#' + computerPickedSquare).text();
    console.log(filledSquare);
    if(filledSquare.length == 1){
      computerTurn();
    }
    else if(filledSquare.length !==1){
       $('#'+computerPickedSquare).text('o');
       (player2.clicked).push(tableId);
     player1.turn = true;
     player2.turn = false;
    }
  }
  
  */
  
$('.edit').on('click', function(e){
 //when a cell is clicked, process for identifying win, tie, occupying empty cells with a value occur
 
 //finds the ID of the cell
  var tableId = e.target.id;
  //identifies what the value of the cell is
   var hasText = $('#'+tableId).text();
  
  
  
  if(player1.turn === true && player2.turn === false && hasText.length != 1){
  //if it is player 1's turn, places an x on the board. also puts the value of the cell clicked by player 1 in an array of all values player 1 clicked  
    $("#" +tableId).text('x');
    $("#" +tableId).css({
      "background-color":"#f48976"
    });
    (player1.clicked).push(tableId);
    
    player1.turn = false;
    player2.turn = true;
  
  }
  
   else if(player1.turn === false && player2.turn === true && hasText.length != 1 && player2.computer === false) {
      //if it is player 2's turn, places an o on the board. also puts the value of the cell clicked by player 2 in an array of all values player 2 clicked
     
     
     $("#" +tableId).text('o');
     $("#" +tableId).css({
      "background-color":"#84b4ea"
    });
     (player2.clicked).push(tableId);
     player1.turn = true;
     player2.turn = false;
   }
 
  
  
  //array that identifies if all cells are filled
  var allCellsFilled = [];
  
  
  
  $('#board .edit').each(function()
{
 //checks if all board cells are filled and resets game if so
    if($(this).html().length == 1){
      allCellsFilled.push(1);
    }
   
    if(allCellsFilled.length == 9){
      resetGame();
    playeronescore += 0.5;
    playertwoscore += 0.5;
      $('#playerone').html(playeronescore);
      $('#playertwo').html(playertwoscore);
    alert('It is a tie!');
  }
});
  
  
  
  function test1(){
    checkForWin();
  }
function computerMove(randomCell){
  //incomplete AI. AI picks any random cell on the board.
    return ((Math.floor(Math.random() * randomCell)) + 1);

  }
  
   function checkForWin (){
    //checks the board to see if any player won
    //var player1Win = [];
    //var player2Win = [];
    var winning = [];
    var winning2 = [];
    //console.log(winning);
    //console.log(winning2);
    for(i=0;i<winConditionArray.length;i++){
      var test = [];
      var testPlayer2 = [];
      for(j=0;j<winConditionArray[i].length;j++){
        var test2 = [];
        var test3 = [];
        if((player1.clicked).indexOf(winConditionArray[i][j]) >=0){
          test2.push(1);
        }
        if((player2.clicked).indexOf(winConditionArray[i][j]) >=0){
          test3.push(1);
        }
        test.push(test2[0]);
        testPlayer2.push(test3[0]);
      }
      //console.log(test);
      
      if(test.indexOf(undefined) == -1){
        winning.push(true);
      }
      else if(testPlayer2.indexOf(undefined) == -1){
        winning2.push(true);
      }

      
    }
 
    if(winning[0]===true){
      //executes if player 1 has winning combination
      playeronescore++;
      $('#playerone').html(playeronescore);
      //continuePlaying();
      alert('X wins!')
      resetGame();
  //  $("#" +tableId).text('x');
     
    }
    else if(winning2[0]=== true){
      //executes if player 2 has winning combination
      playertwoscore++;
      $('#playertwo').html(playertwoscore);
     //continuePlaying();
      alert('O wins!')
      resetGame();
  //  $("#" +tableId).text('o');
    }
  
    
  }
  
checkForWin();
  
  function computerTurn(){
    var computerPickedSquare = computerMove(9);
    console.log(computerPickedSquare);
     var filledSquare = $('#' + computerPickedSquare).text();
    if(filledSquare.length == 1){
      computerTurn();
    }
    else if(filledSquare.length !==1){
       $('#'+computerPickedSquare).text('o');
      $("#" +computerPickedSquare).css({
      "background-color":"#a5c2e6"
    });
       (player2.clicked).push(computerPickedSquare.toString());
     player1.turn = true;
     player2.turn = false;
      console.log()
      console.log(player2.clicked);
      checkForWin();
    }
  }
  
  
  
  if(player2.computer === true && player2.turn === true && player1.turn === false){
    computerTurn();
  };
 
  
  
  
  /*
  function checkForWin (){
    //checks the board to see if any player won
    //var player1Win = [];
    //var player2Win = [];
    var winning = [];
    var winning2 = [];
    //console.log(winning);
    //console.log(winning2);
    for(i=0;i<winConditionArray.length;i++){
      var test = [];
      var testPlayer2 = [];
      for(j=0;j<winConditionArray[i].length;j++){
        var test2 = [];
        var test3 = [];
        if((player1.clicked).indexOf(winConditionArray[i][j]) >=0){
          test2.push(1);
        }
        if((player2.clicked).indexOf(winConditionArray[i][j]) >=0){
          test3.push(1);
        }
        test.push(test2[0]);
        testPlayer2.push(test3[0]);
      }
      //console.log(test);
      
      if(test.indexOf(undefined) == -1){
        winning.push(true);
      }
      else if(testPlayer2.indexOf(undefined) == -1){
        winning2.push(true);
      }

      
    }
 
    if(winning[0]===true){
      //executes if player 1 has winning combination
      playeronescore++;
      $('#playerone').html(playeronescore);
      continuePlaying();
      //resetGame();
  //  $("#" +tableId).text('x');
     
    }
    else if(winning2[0]=== true){
      //executes if player 2 has winning combination
      playertwoscore++;
      $('#playertwo').html(playertwoscore);
     continuePlaying();
      //resetGame();
  //  $("#" +tableId).text('o');
    }
  
    
  }
  
checkForWin();

*/
  
  /*
   $('#board .edit').each(function()
{
 //checks if all board cells are filled and resets game if so
    if($(this).html().length == 1){
      allCellsFilled.push(1);
      console.log(allCellsFilled);
    }
   
    if(allCellsFilled.length == 9){
      resetGame();
    playeronescore += 0.5;
    playertwoscore += 0.5;
      $('#playerone').html(playeronescore);
      $('#playertwo').html(playertwoscore);
    alert('It is a tie!');
  }
});
  */
  /*
   $('#board .edit').each(function()
{
 //checks if all board cells are filled and resets game if so
    if($(this).html().length == 1){
      allCellsFilled.push(1);
    }
   
    if(allCellsFilled.length == 9){
      resetGame();
    playeronescore += 0.5;
    playertwoscore += 0.5;
      $('#playerone').html(playeronescore);
      $('#playertwo').html(playertwoscore);
    alert('It is a tie!');
  }
});
  */
  
  $('#newGame').on('click', function(){
    //starts a new game
    resetGame();
  });
  
  
  $('#resetScores').on('click', function(){
    //resets the scores
    playeronescore = 0;
    $('#playerone').html(0);
      playertwoscore = 0;
    $('#playertwo').html(0);
  });
  

  
  
  return false;
  
});
  
  

});


