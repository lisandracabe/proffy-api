import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.json({message: 'hello world'});
});

app.listen(3333);