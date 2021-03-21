const bcrypt = require('bcrypt')


const comparePassword = (original, row) => {
    const userInput = original;
    const hash = row.password;

    return new Promise((resolve, reject) =>{
        bcrypt.compare(userInput, hash, (error, match) =>{
            if (error) {throw error}
            else if (!match) {reject ("Invalid password. Please try again.")}
            else {resolve (row)}
        })
    }) 
}

module.exports = comparePassword