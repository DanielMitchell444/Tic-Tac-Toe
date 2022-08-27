

//Gameboard array an module function //
const GameBoard = (() => {
  let boardContainer = document.querySelector('.game-container');
  let cells = document.querySelector('.test');  
  
  })
  


   
     
  
  
  
  //Factory function
  const player = (name, mark, controller) => {
    const sayHello = () => console.log('hello!');

    const markBoard = () => {
     
      let turn = 0;
      let cells1 = document.querySelectorAll('.test');
      let playerText = document.querySelector('.turns');
      let currentPlayer = 1;
      
      cells1.forEach(cell => {
       cell.addEventListener('click', e => {
        if(currentPlayer === 1){
      
 
          playerText.textContent = "Players Turn: Player 2";
 
          cell.textContent = "X";
 
 
         
 
          winner();
 
 
          currentPlayer++
 
 
      }
 
      else if(currentPlayer === 2){
         cell.textContent = "O";
         playerText.textContent = "Players Turn: Player 1";
        winner();
         currentPlayer--
        }
 
      else if(cell.textContent === "O") {
        alert('please click another box');
      }
 
      
       })
      })
 
      return {
       markBoard
      }
     }
 


    
    return { name, mark, sayHello, controller, markBoard };
  };



   //MARK BOARD FUNCTION //
   const winner = () => {


     let cells1 = document.querySelectorAll('.test');
     let winnerText = document.querySelector('.winnerText');
     var WINNING_INDEX_CONFIGURATIONS = [
      // horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
  
      // vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
  
      // diagonal
      [0, 4, 8],
      [2, 4, 6],
     ]
       let turns = 0;
       let matchCount = false;
// loop through WINNING_INDEX_CONFIGURATIONS
for(let item of WINNING_INDEX_CONFIGURATIONS){
  // make sure each game board cell has either x or o as content
  if (cells1[item[0]].textContent && cells1[item[2]].textContent && cells1[item[2]].textContent) {
    // check that each cell content is exactly the same
    if (cells1[item[0]].textContent === cells1[item[1]].textContent && cells1[item[1]].textContent === cells1[item[2]].textContent){
        // if all are the same symbol, set true and exit loop
        matchCount = true;
        turns++
        let winningSymbol = cells1[item[0]].textContent;
        console.log(winningSymbol, ' is the winner');
        winnerText.textContent = winningSymbol + " is the winner "
        return;
    }

    else{
      checkTie();
    }
    
  }
}
// return true / false//

return matchCount
}


   //Module function for controller


    const checkTie = () => {
    const cells = document.querySelectorAll('.test');
    let winnerText = document.querySelector('.winnerText');

    const availableMoves = Array.from(cells).filter(cell => !cell.textContent);
    
    if(!availableMoves.length){
    winnerText.textContent = "Its a tie";  
    }

    
    }


    const resetGame = () => {
      let cells = document.querySelectorAll('.test');
      let textWinner = document.querySelector('.winnerText');

      for(let i = 0; i < cells.length; i++){
        cells[i].textContent = ""
        textWinner.textContent = ""
      }
    }

    const startGame = () => {
     markBoard();
    }
  
  let resetBtn = document.querySelector('.restart');
   
  resetBtn.addEventListener('click', resetGame);



  const player1 = player('Player1', 'X', 1);
  const player2 = player('Player2',  'O', 2);


  player1.markBoard();


  const openModal = () => {
  
  }