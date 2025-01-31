const express = require("express");
const path = require("path");
const app = express();


/*var*/
const routeIndex = require("./routes/index");
const routeLivro = require("./routes/livros");
const routeUsuario = require("./routes/user");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*rotas*/
app.get("/", routeIndex)
app.use("/livros", routeLivro);
app.use("/usuarios", routeUsuario);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
