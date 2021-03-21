const bcrypt = require('bcrypt');

const hashGenerator = (info) =>{
    const saltRounds = 10;

    return new Promise((resolve, reject) => {bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt,(err, hash) => {
            if(err) reject(err)
            else resolve(hash)
        })
    })})
}

module.exports = hashGenerator





