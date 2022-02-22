// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'GNU GPLv3') {
    return `![GNU GPLv3](https://img.shields.io/badge/license-GPL-blue)`
  } else if (license === 'MIT License') {
    return `![MIT License](https://img.shields.io/badge/license-MIT-green)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'GNU GPLv3') {
    return `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`
  } else if (license === 'MIT License') {
    return `[MIT License](https://choosealicense.com/licenses/mit/)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // return
  return(`
  ${renderLicenseBadge(data.license)}
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installInstr}

  ## Usage
  ${data.usageInfo} 

  ## License
  ${renderLicenseLink(data.license)}

  ## Contributing

  ## Tests

  ## Questions
  My [GitHub](${data.github})
  For questions or comments, please email ${data.email}
`);
}

module.exports = generateMarkdown;