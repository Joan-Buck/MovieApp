const bcrypt = require('bcryptjs');

const password = 'password';
async function generateHash(password) {
    const hashedPassword = await bcrypt.hash(password, 12)
    console.log(hashedPassword)
}

generateHash(password);
//$2a$12$k3oSPzhGsfWnFEft6En/fOdsED5ALk.soDErF98Id6GqZLbkqQida
