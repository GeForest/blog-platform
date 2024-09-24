const express = require('express')
const mongoose = require('mongoose')
const serverless = require('serverless-http')
const path = require('path')
const apiRoutes = require('../../backend/routers/routers');

if (!process.env.DB_URL) {
    console.error('Missing MongoDB environment variables');
    process.exit(1);
}

const app = express()

app.use(express.json())
app.use('/netlify/functions/handle', apiRoutes);

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
        await mongoose.connect(process.env.DB_URL)
        console.log('Connected to DB')
    } catch (err) {
        console.error('Failed to connect to DB', err)
    }
}

connectToDB()

module.exports.handle = serverless(app)