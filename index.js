const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

const fs = require('fs');
const generateSite = require('./utils/generateSite');

const team =[]

const init = () => {
    inquirer.prompt({

        type: 'list',
        name: 'filling',
        message: 'What type of employee would you like to add?',
        choices: ['Manager', 'Engineer', 'Intern',]
    }).then(
            (answers) => {
                if (answers.filling === "Intern") {
                    generateIntern()
                } else if (answers.filling === "Engineer") {
                    generateEngineer()

                } else{
                    generateManager()
                }

            })
}


const generateIntern = async () => {

   const answers = await inquirer.prompt([{
        type: "input",
        name: "name",
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
    },
    {
        type: "input",
        name: "school",
        message: "What school are you attending?",
    }])

    const {name, id, email, school}= answers
    const newIntern = new Intern(name, id, email, school)
    team.push(newIntern)

    ask(team)

}  
 
const generateManager = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
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
    },
    {
      type: "input",
      name: "phone",
      message: "What's your phone number",
    },
  ]);

  const { name, id, email, phone } = answers;
  const newManager = new Manager(name, id, email, phone);
  team.push(newManager);

  ask(team);
};  


const generateEngineer = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
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
    },
    {
      type: "input",
      name: "github",
      message: "What's your github username'?",
    },
  ]);

  const { name, id, email, github } = answers;
  const newEngineer = new Engineer(name, id, email, github);
  team.push(newEngineer);

  ask(team);
};  


const ask = async (team)=> {
    const answers = await inquirer.prompt({
        type:"confirm",
        name:"ask",
        message:"Do you want to add more team members?",
        default:false
    })
    if (answers.ask){init()}
    else{generateHTML(team)}
}


//bottom construct
const generateHTML =(team) =>{
    fs.writeFileSync('indexTeam.html', generateSite(team),'utf8')
    

}

init()
