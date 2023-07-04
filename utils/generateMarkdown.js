// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generatereadMeContent(answers) {
  const {ProjectName, Description, Usage, Credits, license, Contributing, Tests, GitHubUserName, Email } = answers;

function renderLicenseBadge(license) {
  const licenseBadges = {
    "Apache License 20": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)",
    "GNU General Public License v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "BSD 2-Clause 'Simplified' License": "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    "BSD 3-Clause 'New' or 'Revised' License": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "Creative Commons Zero v1.0 Universal": "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
    "Eclipse Public License 2.0": "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",

  };

  return licenseBadges[license] || "";
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

 const licenseLinks = {
  "Apache License 20": "https://www.apache.org/licenses/LICENSE-2.0",
  "GNU General Public License v3.0": "https://www.gnu.org/licenses/gpl-3.0",
  "MIT License": "https://opensource.org/licenses/MIT",
  "BSD 2-Clause 'Simplified' License": "https://opensource.org/licenses/BSD-2-Clause",
  "BSD 3-Clause 'New' or 'Revised' License": "https://opensource.org/licenses/BSD-3-Clause",
  "Creative Commons Zero v1.0 Universal": "http://creativecommons.org/publicdomain/zero/1.0/",
  "Eclipse Public License 2.0": "https://opensource.org/licenses/EPL-1.0",

};

return licenseLinks[license] || "";
}

 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return "";
  }

 
  const licenseLink = renderLicenseLink(license);



return `
## License 
For more info, please visit: [License Link](${licenseLink})
`;

}



// TODO: Create a function to generate markdown for README
  const licenseBadge = renderLicenseBadge(license);

  const licenseSection = renderLicenseSection(license);

  const gitHubLink = `https://github.com/${answers.GitHubUserName}`;

  const emailLink = `<a href="mailto:${answers.Email}">${answers.Email}</a>`;
  return `
  ${licenseBadge}

# ${answers.ProjectName}


## Description
${answers.Description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Contributors](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

##Installation
${answers.Installation}
  
## Usage 
${answers.Usage}

## Credits
${answers.Credits}

${licenseSection}

## Contributing
${answers.Contributing}

## Tests 
${answers.Tests}

## Questions 
If you have any questions you can find me at [${answers.GitHubUserName}](${gitHubLink}) and ${emailLink}.
`;
}

module.exports = generatereadMeContent;
