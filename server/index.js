const express = require("express");
const app = express();

const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

const cors = require("cors");

app.use(cors());
app.use(express.json());

/*REGISTRO DAS AVALIAÇÕES*/
app.post("/avaliacoes", (req, res) => {
  const { Nota } = req.body;

  let SQL = "INSERT INTO avaliação (Nota) VALUES (?)";

  db.query(SQL, [Nota], (err, result) => {
    console.log(err);
  });
});

/*PEGA OS LIVROS*/
app.get("/getLivros", (req, res) => {
  let SQL = "SELECT idLivro, Nome_Livro FROM livro";

  db.query(SQL, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando servidor");
});
