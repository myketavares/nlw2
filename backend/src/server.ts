import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json('Acessou a porra da rota');
});

app.post('/', (req, res) => {
  res.json(req.body);
});

app.listen(3333);
