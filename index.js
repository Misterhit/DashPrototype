const express = require('express')
const app = express()
const PORT = 3000
const dashjs = require('dashjs')
const firebase = require('firebase-admin');

//const firebaseConfig = {
//apiKey: "AIzaSyDJvVdRwU1LtbQ_No701XDZf_wXL1c56TQ",
//authDomain: "dashprototype-8db5a.firebaseapp.com",
//projectId: "dashprototype-8db5a",
//storageBucket: "dashprototype-8db5a.appspot.com",
//messagingSenderId: "704410160711",
//appId: "1:704410160711:web:bfa8122285603c6ca32b62",
//measurementId: "G-MXZNLM6E1N"
//};
const account = require('./firebase-config.json')
firebase.initializeApp({
    credential: firebase.credential.cert(account),
    storageBucket: "dashprototype-8db5a.appspot.com",
    databaseURL: "https://dashprototype-8db5a-default-rtdb.europe-west1.firebasedatabase.app"

});

//const storage = firebase.storage().bucket('gs://dashprototype-8db5a.appspot.com').file('League Of Legends/lolfaker.mpd').makePublic().then((file) => { console.log(file) });
//const storage = firebase.storage().bucket('gs://dashprototype-8db5a.appspot.com').file('League Of Legends/lolfaker.mpd').getMetadata().then((file) => { console.log(file[0].mediaLink) });


// Get a reference to the storage service, which is used to create references in your storage bucket

// Create a storage reference from our storage service


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.get('/', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`);

})