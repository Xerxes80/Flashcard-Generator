var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");
var counter = 0;
var correctAnswer = 0;
var wrongAnswer = 0;
var questions = [];
var questions = [
    {
        front:"What is the most popular programming language in the world today?\n ",
        back:"Java"
    },
    {
        text:"George Washington was the first president of the United States.\n",
        cloze:"George Washington"
    },
    {
        front:"what is the capital city of Argentina?\n",
        back:"Buenos Aires"
    },
    {
        text:"Horsepower is a unit of measurement of power.\n",
        cloze:"Horsepower"
    }
];
console.log("=====================================================\n");
cardCreator();
function cardCreator(){
    if (counter<questions.length){
        if(counter%2 === 0){
            var newCard = new BasicCard(questions[counter].front, questions[counter].back);
            inquirer.prompt([
                {
                type: 'input',
                message: newCard.front,
                name: 'userInput'
                }
            ]).then(function (answers) {
                var answer = answers.userInput.toLowerCase();
                var card = newCard.back.toLowerCase();
                if (card === answer){
                    console.log("Correct!\n");
                    console.log("=====================================================\n");
                    correctAnswer++;
                }else{
                    console.log("Wrong!\n");
                    console.log("Correct Answer is: "+newCard.back+"\n");
                    console.log("=====================================================\n");
                    wrongAnswer++;
                };
                counter++;
                cardCreator();
            });
        }else if(counter%2 !== 0){
            var newCard = new ClozeCard(questions[counter].text, questions[counter].cloze);
            inquirer.prompt([
                {
                type: 'input',
                message: newCard.partial,
                name: 'userInput'
                }
            ]).then(function (answers) {
                var answer = answers.userInput.toLowerCase();
                var card = newCard.cloze.toLowerCase();
                if (card === answer){
                    console.log("Correct!\n");
                    console.log(newCard.fullText);
                    console.log("=====================================================\n");
                    correctAnswer++;
                }else{
                    console.log("Wrong!\n");
                    console.log("Correct Answer is: "+newCard.cloze);
                    console.log(newCard.fullText);
                    console.log("=====================================================\n");
                    wrongAnswer++;
                };
                counter++;
                cardCreator();
            });
        }; 
    }else if(counter >= questions.length){
        console.log("Correct Answers: "+correctAnswer);
        console.log("\nWrong Answers: "+wrongAnswer);
        console.log("=====================================================\n");
        inquirer.prompt([
            {
            type: 'input',
            message: "Would you like to try again:(Y/N) ",
            name: 'userInput'
            }
        ]).then(function (answers) {
            if(answers.userInput.toLowerCase() === "y"){
                console.log("=====================================================\n");
                counter = 0;
                correctAnswer = 0;
                wrongAnswer = 0;
                cardCreator();
            }
        });
    };  
};