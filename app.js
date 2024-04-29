const express = require('express') ;
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/html01", (req, res) => {
    res.send('<h1>Mostrando o primeiro html a ser enviado da atividade</h1>')
});

app.get("/html02", (req, res) => {
    res.send('<h1>Mostrando o segundo html a ser enviado da atividade. Falta mais um!</h1>')
});

app.get("/html03", (req, res) => {
    res.send('<h1>Mostrando o terceiro html a ser enviado da atividade. Ufa, pronto.</h1>')
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });