// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenses = {
    MIT: `![Static Badge](https://img.shields.io/badge/${license}-MIT-blue)`,
    ISC: `![Static Badge](https://img.shields.io/badge/${license}-ISC-blue)`,
    Apache: `![Static Badge](https://img.shields.io/badge/${license}-Apache-blue)`,
    Unlicense: `![Static Badge](https://img.shields.io/badge/${license}-Unlicense-blue)`,
    None: ``
  }
  return licenses[license];  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Title](#${data.title})
  - [Project Description](##Description)
  - [Installation Instructions](##Installation)
  - [Usage Information](##Usage)
  - [Licenses](##License)
  - [Contribution Guidelines](##Contributing)
  - [Test Instructions](#Tests)
  - [Contact Info](##Questions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Contributing
  ${data.contributionGuidelines}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.username}
  ${data.email}
`;
}

module.exports = generateMarkdown;