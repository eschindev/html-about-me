const inq = require("inquirer");
const fs = require("fs");

inq
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: function (input) { 
        return input.length > 0
      }
    },
    {
        type: 'input',
        name: 'location',
        message: 'What is your location?',
        validate: function (input) { 
          return input.length > 0
        }
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Please write a short bio for yourself:',
        validate: function (input) { 
          return input.length > 0
        }
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'What is your linkedIn username?',
        validate: function (input) { 
          return input.length > 0
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        validate: function (input) { 
          return input.length > 0
        }
    },
  ])
  .then((data) => {
    console.log(data);
    const {name, location, bio, linkedIn, github} = data;
    const filename = `${name.toLowerCase().split(' ').join('')}`;
    fs.writeFile(`${filename}.html`, 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1 id="name">${name}</h1>
        <h2 id="location">${location}</h2>
        <p id="bio">${bio}</p>
        <a id="linkedIn" href="https://www.linkedin.com/in/${linkedIn}/" target="_blank">linkedIn</a>
        <br>
        <a id="gitHub" href="https://github.com/${github}" target="_blank">GitHub</a>
    </body>
    </html>`, 
    (err) =>
      err ? console.log(err) : console.log('Success!')
    );
});