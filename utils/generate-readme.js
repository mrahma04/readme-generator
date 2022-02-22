const fs = require('fs')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err)
                return
            }
            resolve({
                ok: true,
                message: 'README.md created successfully!'
            })
        })
    })
}

module.exports = { writeFile }