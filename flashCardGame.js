var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");
var counter = 0;
var questions = [];
for (var i= 0 ; i< questionArray.length; i++){
    questions.push(new )
}
function questionAsker(counter){
    inquirer.prompt([
        {
        type: 'input',
        message: questions[counter],
        name: 'userInput'
        }
        
    ]).then(function (answers) {
        console.log(answers.userInput);
        if (questions[counter].cloze.toLowerCase() === answers.userInput.toLowerCase()){
            console.log("Correct Answer !");
        }else{
            console.log("Wrong Answer !");
        };
    });
};
var newCard.prototype = new 
if(counter<questions.length){
questionAsker(counter);
}