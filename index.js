const inquirer = require('inquire');
const Intern= require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

const init= () => {
    inquirer.prompt ([{ 
        {type: 'list', 
        name: 'filling',
        message: 'What type of employee would you like to add?',
        choices: ['Intern', 'Engineer', 'Manager',]

        type: "input",
      name: "Name",
      message: "Name of Person?",
    },
    {
      type: "input",
      name: "id",
      message: "ID Number?",
    },
{
      type: "input",
      name: "email",
      message: "What is your e-mail?",
    }
    //Manager Question
    {
      type: "input",
      name: "office",
      message: "Office Number?",
    },
    //Engineer Question
    {
      type: "input",
      name: "github",
      message: "What is your github?",
    },
    //Intern Question
    {
        type: "input",
        name: "school",
        message: "What school are you attending?",
    }
    }
   ])
  //End of Questions
  //Function for generating file 
  .then((response) => {
      fs.writeFile(`${response.title}.md`, generateTeam(response), err => {
          if (err) throw err;
        });
       }
);


//
//switch case to ask questions for each type of employee
//write file to generate html (challenge 9  function)
//it's supposted to show up in cards
//create class card use the css

