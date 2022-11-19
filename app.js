// const computerChoiceDisplay = document.getElementById("system' choice")
// const userChoiceDisplay = document.getElementById("my choice")
// const resultDisplay = document.getElementById("result")
// const possibleChoices =  document.querySelectorAll("button")
// let userChoice
// let computerChoice
// let result


// possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
// //     userChoice = e.target.id
// //     userChoiceDisplay.innerHTML = userChoice
//     generateComputerChoice()
//     getResult()
// }))

// function generateComputerChoice() {
//     const randomNumber = Math.floor(Math.random() * 3) + 1

    
//     if (randomNumber === 1) {
//         computerChoice = 'SHAWARMA'
//     }
    
//     if (randomNumber === 2) {
//         computerChoice = 'PIZZA'
//     }

//     if (randomNumber === 3) {
//         computerChoice = 'MEAT-PIE'
//     }

//     computerChoiceDisplay.innerHTML = computerChoice

// }
// function getResult() {
//     if (computerChoice === userChoice) {
//         result = ('Its A Draw')
//     }
//     if (computerChoice === 'PIZZA' && userChoice === 'SHAWRAMA') {
//         result = 'YOU WIN'
//     }
    
//     if (computerChoice === 'PIZZA' && userChoice === 'MEAT-PIE') {
//         result = 'YOU WIN'
//     }
//     if (computerChoice === 'SHAWARMA' && userChoice === 'MEAT-PEI') {
//         result = 'YOU WIN'
//     }
//     if (computerChoice === 'MEAT-PIE' && userChoice === 'PIZZA') {
//         result = 'YOU LOOSE'
//     }
    
//     if (computerChoice === 'MET-PIE' && userChoice === 'SHAWARMA') {
//         result = 'YOU LOOSE'
//     }
//     if (computerChoice === 'SHAWARMA' && userChoice === 'PIZZA') {
//         result = 'YOU LOOSE'
//     }
   
//     resultDisplay.innerHTML = result
// }






const my_choicedisplay = document.getElementById("my_choice");
const computer_choice = document.getElementById('system_choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button');
let userChoice 
let com_choice
let results




                // EventListenerSession



possibleChoices.forEach( possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    my_choicedisplay.innerHTML = userChoice
    // my_choicedisplay.classList.add('fnt')
    generateRandomNumber()
    generateResult()
}
))





            // function for generating computerChoice randomNumber 



function generateRandomNumber() {
    const randomNumber =  Math.floor(Math.random() * possibleChoices.length) + 1
    
        // console.log(randomNumber)
    if(randomNumber === 1){
        com_choice = 'PIZZA'
    }

    if(randomNumber === 2){
        com_choice = "SHAWARMA"
    }

    if(randomNumber === 3){
        com_choice = 'MEAT-PIE'
    };

    computer_choice.innerHTML = com_choice
    // computer_choice.classList.add('fnt')
}





            // function for generating result




function generateResult() {
    if(com_choice === userChoice) {
        results = "Its a draw!!"
        // console.log('its a draw')
    }
    
    if( com_choice === 'MEAT-PIE'  && userChoice === 'PIZZA') {
        results = 'YOU WIN'
    }
    
    if( com_choice === 'PIZZA'  && userChoice === "SHAWARMA"){
        results = 'You Loose'
    }

    if( com_choice === "SHAWARMA"  && userChoice === 'PIZZA'){
        results = 'YOU WIN'
    }

    if( com_choice === 'MEAT-PIE'  && userChoice === "SHAWARMA"){
        results = 'YOU WIN'
    }

    if( com_choice === 'PIZZA'  && userChoice === 'MEAT-PIE'){
        results = 'You Loose'
    }

    if( com_choice === "SHAWARMA"  && userChoice === 'MEAT-PIE'){
        results = 'You Loose'
    }

   
    resultDisplay.innerHTML = results
    // resultDisplay.classList.add('fnt')
}