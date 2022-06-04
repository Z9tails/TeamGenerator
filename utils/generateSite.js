module.exports = function generateSite (team) {

    const site = () =>{

        let template = ``
    
        team.forEach(member =>{
            if (member.getRole() ==='Intern'){
                template +=`
                <li> name:${member.name} </li>
                <li> id:${member.id} </li>
                <li> email:${member.email} </li>
                <li> school:${member.school} </li>`
            }
            else if (member.getRole() ==='Manager'){
                 template += `
                <li> name:${member.name} </li>
                <li> id:${member.id} </li>
                <li> email:${member.email} </li>
                <li> phone:${member.phoneNum} </li>`;
            } else{
                 template += `
                <li> name:${member.name} </li>
                <li> id:${member.id} </li>
                <li> email:${member.email} </li>
                <li> github:${member.github} </li>`;
            }
        })
        return `${template}`

    }

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css" integrity="sha512-HqxHUkJM0SYcbvxUw5P60SzdOTy/QVwA1JJrvaXJv4q7lmbDZCmZaqz01UPOaQveoxfYRv1tHozWGPMcuTBuvQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Your Team</title>
</head>
<section class="section">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <h1 class="title is-1 centered has-text-primary-light">YOUR TEAM</h1>
${site()}
      </div>
    </div>
  </div>

<body>
    
</body>
</html>
    `;

}