const express = require('express')
const mongoose = require('mongoose')
const serverless = require('serverless-http')
const path = require('path')
const apiRoutes = require('../../backend/routers/routers');

const DB_URL = process.env.DB_URL

const app = express()

app.use(express.json())
app.use('/.netlify/functions/handler/', apiRoutes);

const publicPath = path.join(__dirname, '..', 'frontend', 'build') 
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

async function connectToDB() {
    try {
        await mongoose.connect(DB_URL)
        console.log('Connected to DB')
    } catch (err) {
        console.error('Failed to connect to DB', err)
    }
}

connectToDB()

module.exports.handler = serverless(app)