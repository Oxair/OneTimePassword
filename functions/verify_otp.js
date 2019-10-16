const admin = require('firebase-admin');

module.exports = function(req, res) {
    if (!req.body.phone || !req.body.code){
        res.status(422).send({ error: "Phone and code must be provided." })

        const fone = String(req.body.phone).replace(/[^\d]/g, "")
        const code = parseInt(req.body.code);

        

    }
}