const inquirer = require('inquire');
const Intern= require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

const init= () => {
    inquirer.prompt ( 
        {type: 'list', 
        name: 'filling',
        message: 'What type of employee would you like to add?',
        choices: ['Intern', 'Engineer', 'Manager',]
    }
    )


//
//switch case to ask questions for each type of employee
//write file to generate html (challenge 9  function)
//it's supposted to show up in cards
//create class card use the css

}