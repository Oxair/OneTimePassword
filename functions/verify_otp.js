const admin = require('firebase-admin');

module.exports = function(req, res) {
    if (!req.body.phone || !req.body.code){
        return res.status(422).send({ error: "Phone and code must be provided." })
    }

        const fone = String(req.body.phone).replace(/[^\d]/g, "")
        const phone = "+" + fone
        const code = parseInt(req.body.code);

        admin.auth().getUser(phone)
        .then(() => {
            const ref = admin.database().ref('users/' + phone)
            ref.on('value', snapshot => {
                ref.off()
                const user = snapshot.val();

                if (user.code !== code || !user.codeValid) {
                    return res.status(422).send({ err: "Code is not valid!" })
                }

                ref.update(({ codeValid: false }))

                admin.auth().createCustomToken(phone)
                .then(token => res.send({ token: token }))
                .catch((err) => res.status(422).send({ err: err }))

            })
            return
        })
        .catch((err) => res.status(422).send({ error: err }))

}