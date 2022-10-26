const express = require('express');
const mainRouter = require('../routes/index');
const path = require('path');
const { productosController } = require('..controller/personas');

const app = express();
app.use(express.static("public"));

app.set('view engine', 'ejs');
const viewsPath = path.resolve(__dirname, '../../views');
app.set('views', viewsPath);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', mainRouter);

app.get('/', async (req, res, next)=>{
    try{
        const data = await ProductosController.getAll()
        res.render('products', {data});
    }catch(err){
        next(err);
    } 
});

app.use((err, req, res, next) => {
    // chequear si es un error random o si es el 404

        const status = err.status || 500;
        const message = err.message || 500;

        res.status(status).json({
            message
        })  
    res.status(500).send('Something broke!')
});

module.exports = app;