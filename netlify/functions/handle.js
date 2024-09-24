const express = require('express')
const mongoose = require('mongoose')
const serverless = require('serverless-http')
const path = require('path')
const apiRoutes = require('../../backend/routers/routers');

const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env

console.log('DB_USERNAME:', DB_USERNAME);
console.log('DB_PASSWORD:', DB_PASSWORD);
console.log('DB_NAME:', DB_NAME);

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
        await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.6h3lvf3.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
        console.log('Connected to DB')
    } catch (err) {
        console.error('Failed to connect to DB', err)
    }
}

connectToDB()

module.exports.handle = serverless(app)