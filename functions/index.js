// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express');
const cors = require('cors');

const router = express();
//habilitar CORS
router.use(cors({ origin: true }));
//traer un paciente por id
router.get('/consulta/:id', async(req, res) => {
    const consulta = await
    admin.firestore().collection('consultas').doc(req.params.id).get();
    res.send(consulta);
});
//funcion para crear datos
router.post('/consulta', async(req, res) => {
    const consulta = await
    admin.firestore().collection('consultas').add(req.body);
    res.send(consulta);
});
//funcion para hacer update
router.put('/consulta/:id', async(req, res) => {
    const consulta = await
    admin.firestore().collection('consultas').doc(req.params.id).update(req.body);
    res.send(consulta);
});
//funcion para eliminar 
router.delete('/consulta/:id', async(req, res) => {
    const consulta = await
    admin.firestore().collection('consultas').doc(req.params.id).delete();
    res.send(consulta);
});
//traer lista de pacientes
router.get('/consultas', async(req, res) => {
    const consultas = await
    admin.firestore().collection('consultas').get();
    var lista = [];
    consultas.docs.forEach(doc => {
        lista.push({ id: doc.id, data: doc.data() });
    });
    res.send(lista);
});

//cloud function
exports.test = functions.https.onRequest(router);