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

/*INSERÇÃO DAS AVALIAÇÕES*/
app.post("/insertAvaliacoes", (req, res) => {
  const { Nota } = req.body;
  const { idLivro } = req.body;

  let SQL = "INSERT INTO avaliação (Nota, Livro_idLivro) VALUES (?, ?)";

  db.query(SQL, [Nota, idLivro], (err, result) => {
    if (err) console.error(err);
    else res.send(result);
  });
});

app.post("/search", (req, res) => {
  const { Nota } = req.body;
  const { idLivro } = req.body;

  let SQL = "SELECT * FROM avaliação WHERE  Nota = ? AND Livro_idLivro = ?";

  db.query(SQL, [Nota, idLivro], (err, result) => {
    if (err) console.error(err);
    else res.send(result);
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

/*PEGA AS AVALIAÇÕES*/
app.get("/getAvaliacoes", (req, res) => {
  let SQL =
    "SELECT idAvaliação, Nota, Livro_idLivro, idLivro, Nome_Livro FROM avaliação, livro  WHERE idLivro = Livro_idLivro AND Nota != 0 ORDER BY Nota DESC";

  db.query(SQL, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

/*EDITA AS AVALIAÇÕES*/
app.put("/edit", (req, res) => {
  const { idAvaliação } = req.body;
  const { Nota } = req.body;

  let SQL = "UPDATE avaliação SET Nota = ? WHERE idAvaliação = ?";

  db.query(SQL, [Nota, idAvaliação], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

/*DELETA AS AVALIAÇÕES*/
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let SQL = "DELETE FROM avaliação WHERE idAvaliação = ?";

  db.query(SQL, [id], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.listen(3001, () => {
  console.log("rodando servidor");
});
