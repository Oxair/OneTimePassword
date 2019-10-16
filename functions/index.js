const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./service_account.json')
const requestOneTimePassword = require('./request_otp')
const verifyOneTimePassword = require('./verify_otp')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // Enter the database URL in quotes from Firebase
    databaseURL: ""
  });

 exports.createUser = functions.https.onRequest(createUser)
 exports.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword)
 exports.verifyOneTimePassword = functions.https.onRequest(verifyOneTimePassword)