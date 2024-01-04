const admin = require('firebase-admin');
const serviceAccount = require('./fullstack-los-angeles-firebase-adminsdk-r48cr-5d8fc89acb.json'); // Update the path accordingly

let firebaseApp;
if (!admin.apps.length) {
    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: 'fullstack-los-angeles.appspot.com'
  });
} else
  firebaseApp = admin.apps[0];

module.exports = {firebaseApp}