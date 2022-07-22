const express = require('express');
const { Client } = require('pg');
const app = express();
const cors = require('cors');

const client = new Client({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
})

client.connect();
app.use(cors())
app.use(express.json());


app.post('/register', (req, res) => {
    const {nome} = req.body;
    const {email} = req.body;
    const {senha} = req.body;
    const {cpf} = req.body;
    const {data_nascimento} = req.body;
    const {sexo} = req.body;
    let sql = "INSERT INTO users (nome, email, senha, cpf, data_nascimento, sexo) VALUES ($1, $2, $3, $4, $5, $6)";
    client.query(sql, [nome, email, senha, cpf, data_nascimento, sexo],(err,res)=>{return err ? console.log(err) : console.log("SUCCESSO")})
    console.log(req.body)
})

 app.post('/login', async (req, res) => {
    
    const {email} = req.body;
    const {senha} = req.body;
    let sql = "SELECT * FROM users WHERE email = $1 AND senha = $2 ";
    client.query(sql, [email, senha] ,(err,result)=>{return err ? console.log(err) : res.send(result.rows)})
    
})

app.post('/registerevento', (req, res) => {
    const {nome} = req.body;
    const {preco} = req.body;
    const {quantidade} = req.body;
    console.log(req.body)
    let sql = "INSERT INTO eventos (nome, preco, quantidade) VALUES ($1, $2, $3)";
    client.query(sql, [nome, preco, quantidade],(err,res)=>{return err ? console.log(err) : console.log("SUCCESSO")})
})

app.get('/eventos', async (req, res) => {
    let sql = "SELECT * FROM eventos";
    client.query(sql, (err,result)=>{return err ? console.log(err) : res.send(result.rows)});
})

app.post('/pagamento', async (req, res) => {
    const {nome} = req.body;
    const {preco} = req.body;
    const {quantidade} = req.body;
    console.log(req.body)
    res.send(req.body)
})
app.post('/pagamento2', async (req, res) => {
    const {nome} = req.body;
    const {quantidade} = req.body;
    const {poltrona} = req.body;
    let sql="UPDATE eventos SET quantidade = $2,"+req.body.poltrona+" =true WHERE nome = $1";
    client.query(sql, [nome,quantidade],(err,result)=>{return err ? console.log(err) : console.log("SUCESSU!!")});
    console.log(req.body.quantidade)
})
app.post('/gambiarra', async (req, res) => {
    const {nome} = req.body;
    const {preco} = req.body;
    const {quantidade} = req.body;
    console.log(req.body)
    let sql = "UPDATE evento SET nome=$1, quantidade=$2, preco=$3 WHERE id=1";
    client.query(sql, [nome,quantidade,preco],(err,result)=>{return err ? console.log(err) : console.log("SUCESSU!!!")});
    res.send(req.body)
})
app.get('/gambiarra2', async (req, res) => {
    let sql = "SELECT * FROM evento";
    client.query(sql,(err,result)=>{return err ? console.log(err) : res.send(result.rows)});
})

app.listen(3333, () => {
    console.log("Server started on port 3333");
    
});