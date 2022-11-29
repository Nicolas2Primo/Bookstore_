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
  const { idLivro } = req.body;

  let SQL = "INSERT INTO avaliação (Nota, Livro_idLivro) VALUES (?, ?)";

  db.query(SQL, [Nota, idLivro], (err, result) => {
    console.log(err);
  });
});

/*PEGA OS LIVROS*/
app.get("/getLivros", (req, res) => {
  let SQL =
    "SELECT idLivro, Nome_Livro, AVG(Nota) AS Média_Nota, COUNT(Nota) AS Quantidade_Nota, Livro_idLivro, Sinopse from livro, avaliação WHERE idLivro = Livro_idLivro GROUP BY Nome_Livro ORDER BY idLivro";

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
