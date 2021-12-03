console.log("ejecutamos el proyecto");

const express = require("express");
const conectarDB = require("./config/db");

const app = express();

conectarDB();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hola mundo");
// });

app.use("/api/gogame", require("./routes/products"));

app.listen(3025, () => {
  console.log("App listening on port 3025!");
});

// https://www.youtube.com/watch?list=PLpD_vYWjZt13p0UqZVHWbruywY9NO0SJm&v=tp6jIGGfQzg&feature=youtu.be
