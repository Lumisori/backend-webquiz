const connectDB = require('./mongo/mongo');
const express = require('express')
const router = require('./router/router')

const app = express()


app.use(express.json())
app.use('/quiz', router)

try {
    connectDB()
} catch (err) {
    console.log('Erro ao conectar ao Mongo no erro ' + err)
}

const port = 8087
app.listen(port, () => console.log(`Server up on port: http://localhost:${port}/quiz`))
