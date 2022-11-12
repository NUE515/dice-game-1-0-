const scoreWhole0 = document.querySelector("#score--0")
const scoreWhole1 = document.querySelector("#score--1")
const currentScore0Player0 = document.querySelector("#current--0")
const currentScore1Player1 = document.querySelector("#current--1")
const dice = document.querySelector(".dice")
const rollDiceBtn = document.querySelector(".btn--roll")
const newGameBtn = document.querySelector(".btn--new")
const player0Background = document.querySelector(".player--0")
const player1Background = document.querySelector(".player--1")
const btnHold = document.querySelector(".btn--hold")

// let currentScore = 0
dice.classList.add("hidden")

scoreWhole0.textContent = 0
scoreWhole1.textContent = 0

let currentScore = 0
let activePlayer = 0 
let fullScore0 = 0
let fullScore1= 0
rollDiceBtn.addEventListener("click", function () {
  
   let random = Math.floor(Math.random() *6)+1
   dice.classList.remove("hidden")
   dice.src = `dice-${random}.png`

   if(random !== 1 ){
   currentScore= currentScore + random
   document.querySelector(`#current--${activePlayer}`).textContent = currentScore
   }   
   if(random === 1 ){
      document.querySelector(`#current--${activePlayer}`).textContent = 0
      
      if(activePlayer === 0 ){
         activePlayer=1
      } 
      else if ( activePlayer === 1 ){
         activePlayer =0
      }
      currentScore = 0
      player0Background.classList.toggle("player--active")
      player1Background.classList.toggle("player--active")
   
      // player0Background.classList.toggle("player--active")
      // player1Background.classList.toggle("player--active")

   }
})
   btnHold.addEventListener("click",function(){
   
      
      if (fullScore0 < 20 && fullScore1 < 20){
      document.querySelector(`#current--${activePlayer}`).textContent = 0
     
      if(activePlayer === 1){
         
         fullScore1=fullScore1+currentScore
         
         document.querySelector(`#score--${activePlayer}`).textContent = fullScore1  

         activePlayer =0
         
      }
      else if ( activePlayer === 0){
         fullScore0=fullScore0+currentScore
         
         document.querySelector(`#score--${activePlayer}`).textContent = fullScore0  
         activePlayer =1
      }
      // document.querySelector(`#score--${activePlayer}`).textContent = fullScore  
      // document.querySelector(`#current--${activePlayer}`).textContent = 0
      
      // if(activePlayer === 0 ){
      //    activePlayer=1
      // } 
      // else if ( activePlayer === 1 ){
      //    activePlayer =0
      // }
      currentScore = 0
      player0Background.classList.toggle("player--active")
      player1Background.classList.toggle("player--active")
      dice.classList.add("hidden")
   }  
   if ( fullScore0 >= 20 || fullScore1 >= 20 ){
      if (activePlayer ===  1){
         player1Background.classList.remove("player--active")
      document.querySelector(`#current--${0}`).textContent = 0
      // document.querySelector(`.player--${0}`).style.backgroundColor = "#2f2f2f"
      document.querySelector(`.player--${0}`).classList.add("player--winner")
      document.querySelector(`.name--${0}`).style.color= "#c7365f"
     

      }
      else {
         player0Background.classList.remove("player--active")
         document.querySelector(`#current--${1}`).textContent = 0
         // document.querySelector(`.player--${1}`).style.backgroundColor = "#2f2f2f"
         document.querySelector(`.player--${1}`).classList.add("player--winner")
         document.querySelector(`.name--${1}`).style.color= "#c7365f"
         
      }
       

      
    
   }
   // document.querySelector(`.player--${activePlayer}`).classList.toggle("player--active")
   //  if ( fullScore0 >= 100 || fullScore1 >= 100){
   //    document.querySelector(`#current--${activePlayer}`).textContent = 0
   //    document.querySelector(`.player--${activePlayer}`).style.backgroundColor = "Green"
   // }
     
   })

 




newGameBtn.addEventListener("click",function (){
   scoreWhole0.textContent = 0
   
   scoreWhole1.textContent = 0
   dice.classList.add("hidden")
   if (activePlayer ===  1){  document.querySelector(`.player--${0}`).classList.remove("player--active") }
   if (activePlayer ===  0){  document.querySelector(`.player--${1}`).classList.remove("player--active") }
   
   currentScore = 0
   activePlayer = 0 
   fullScore0 = 0
   fullScore1= 0  
   player0Background.classList.add("player--active")
   player1Background.classList.remove("player--active")
   document.querySelector("#current--0").textContent = "0"
   document.querySelector("#current--1").textContent = "0"
  
   
})
  


