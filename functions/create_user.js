const admin = require('firebase-admin');


module.exports = function(req, res) {
    // Verify the user provided phone number
    if (!req.body.phone) {
        return res.status(422).send({ error : 'Bad input!!' });
    }

    // Format the phone number to remove dashes and parenthesis or spaces
    const phone = String(req.body.phone).replace(/[^\d]/g, "");

    // Create a new user account using phone number
    admin.auth().createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err }))

    // Responsd to the user request, saying account was made

}