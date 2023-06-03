const mongoose = require('mongoose');
const user = 'user';
const password = 'password';


const connectDB = () => {
<<<<<<< HEAD
    const dbUrl = `mongodb+srv://${user}:${password}@tcc.civo8wn.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Conectado ao Mongo');
        })
        .catch((error) => {
            console.error('Erro ao conectar ao banco de dados:', error);
        });
=======
    try {
        const dbUrl = `mongodb+srv://${user}:${password}@tcc.civo8wn.mongodb.net/?retryWrites=true&w=majority`;
    
        mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('Conectado ao Mongo');
            })
            .catch((error) => {
                console.error('Erro ao conectar ao banco de dados:', error);
            });
    } catch (err) {
        console.log("Erro ao conectar ao banco:" + err)
    }
>>>>>>> 0089e689838acbe10fd2d5becb2cf3d2c6bfc6d2
}
module.exports = connectDB;
