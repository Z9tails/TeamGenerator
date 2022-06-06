module.exports = function generateSite(team) {

  const site = () => {

    let template = ``

    team.forEach(member => {
      if (member.getRole() === 'Intern') {
        template += `<nav class= "level">
                      <div class="card mb-4">
                        <div class="card-image is-inline-block">
                          <i class="fas fa-baby-carriage"></i>
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-content">
                              <p class="title is-4">name:${member.name}</p>
                              <p class="subtitle is-6">id:${member.id}</p>
                              <p class="subtitle is-6"><a href="mailto:${member.email}">email</a></p>
                              <p class="subtitle is-6">school:${member.school}</p>
                            </div>
                          </div>
                        </div>
                      </div
                    </nav>

            `;
      } else if (member.getRole() === 'Manager') {
        template += `
                    <nav class= "level">
                    <div class="card ">
                      <div class="card-image is-inline-block">
                        <i class="fas fa-coffee"></i>
                      </div>
                       <div class="card-content">
                          <div class="media">
                              <div class="media-content">
                                <p class="title is-4">name:${member.name}</p>
                                <p class="subtitle is-6">id:${member.id}</p>
                                <p class="subtitle is-6"><a href="mailto:${member.email}">email</a></p>
                                <p class="subtitle is-6"><a href="phone:${member.phoneNum}">phone</a></p>
                              </div> 
                            </div>
                          </div>
                          </div
                    </nav>`;
      } else {
        template += `
                    <nav class="level">
                    <div class="card">
                        <div class="card-image is-inline-block">
                          <i class="fas fa-space-shuttle"></i>
                        </div>
                      <div class="card-content">
                        <div class="media">
                          <div class="media-content">
                            <p class="title is-4">name:${member.name}</p>
                            <p class="subtitle is-6">id:${member.id}</p>
                            <p class="subtitle is-6"><a href="mailto:${member.email}">email</a></p>
                            <p class="subtitle is-6"><a href="https://github.com/${member.github}">github</a></p>
                          </div> 
                        </div>
                      </div>
                      </div>
                    </nav>
         `;
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
    <script src="https://kit.fontawesome.com/be51fda147.js" crossorigin="anonymous"></script>
    <title>Your Team</title>
</head>
<section class="section has-background-success">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <h1 class="title is-1 centered has-text-primary-dark">YOUR TEAM</h1>

      </div>
    </div>
    ${site()}
  </div>

<body>
    
</body>
</html>
    `;

}