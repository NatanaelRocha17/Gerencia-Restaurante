const useRoutesProdutos = require("./routes/produtos.js");
const useRoutesEstoques = require("./routes/estoques.js");


const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(express.json()); // Middleware para analisar o corpo da solicitação JSON
app.use(cors());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "natanrocha",
  database: "bdrestaurante",
});

app.use(cors()); // Chame a função cors aqui
app.use(express.json());
//Banco de dados tabela Produto

app.use("/", useRoutesProdutos)
app.use("/", useRoutesEstoques)

app.listen(3002, () => {
  console.log("Iniciando servidor na porta 3002");
});
