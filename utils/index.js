// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
   
    {type: "input",
    name: "ProjectName",
    message:"What is your name of the project?",
},
    {type: "input",
     name: "Description",
     message:"Give a description of your title",
},
  
  {
   type: "input",
   name:"Installation",
   message: "Please provide installation instructions.",
},
   {
    type:"input",
    name:"Usage",
    message:"How will this app be used?"
},
   {
    type:"input",
    name: "Credits",
    message:"Did you want to acknowledge anyone's assistance with this project?"

},
   {
   type:"list",
   name:"license",
   message:"What license is being used?",
   choices: [
    "Apache License 20",
     "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause 'Simplified' License",
      "BSD 3-Clause 'New' or 'Revised' License",
      "Creative Commons Zero v1.0 Universal", 
      "Eclipse Public License 2.0",]
}, 
  {
   type:"input",
   name:"Contributing",
   message: "How can you contribute?"
},
  { 
    type:"input",
    name:"Tests",
    message:"What is the test for this?"

},
  {
    type:"input",
    name:"GitHubUserName",
    message:"What is your GitHub username?"
},
{
  type:"input",
  name:"Email",
  message:"What is your email?"
}];

// TODO: Create a function to write README file
const fileName = "README.md";

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("Congrats on creating a great README!")
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) =>{
      const readMeContent = generateMarkdown(answers);
      writeToFile(fileName, readMeContent)
    })
}


// Function call to initialize app
init();
