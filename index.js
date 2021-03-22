const express=require('express');
const app=express();
const caminho = require('path');

let port=3000;

app.get('/', (req,res)=>{
    res.sendFile(caminho.join(__dirname + '/index.html'));
});
app.get('/cadastro.html', (req,res)=>{
    res.sendFile(caminho.join(__dirname + '/cadastro.html'));
});
app.get('/login.html', (req,res)=>{
    res.sendFile(caminho.join(__dirname + '/login.html'));
});
app.get('/lista.html', (req,res)=>{
    res.sendFile(caminho.join(__dirname + '/lista.html'));
});
app.get('/usuario/:u/nome/:n/nivel/:i', (req,res)=>{
    res.send("Você acessou informações do usuário "+req.params.u+" com o nome "+req.params.n+" Nivel "+req.params.i);
});
app.get('/arquivojson', (req,res)=>{
    res.status(200).json({nome: "gil", id: 123, cargo:"Administrador"});
});
app.get('/exp[0-9]', (req,res)=>{
    res.send("Essa é uma expressão regular no NodeJs.");
});
app.post('/post', (req,res)=>{
    res.send("Você está acessando uma página via método POST.");
});
app.get('*', (req,res)=>{
    res.send("Você esta acessando um link inválido ou inexistente: ERRO 404");
});
app.listen(port,()=> console.log(`Aguardando porta ${port}`));