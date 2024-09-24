const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
require('dotenv').config();

const apiRoutes = require('./routers/routers');

if (!process.env.DB_URL) {
    console.error('Missing MongoDB environment variables');
    process.exit(1);
}

const app = express()
const port = 8080

app.use(express.json())
app.use(cors())
app.use('/api', apiRoutes);

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

async function startServer() {
    await connectToDB()
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
}

startServer()