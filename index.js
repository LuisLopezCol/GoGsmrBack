console.log("GoGame Backend is running"); //change

const express = require("express");
const conectarDB = require("./config/db");

const app = express();

conectarDB();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hola mundo");
// });

app.use("/stock/products", require("./routes/products")); //Changed
app.use("/sales/history", require("./routes/sales")); //Nuevo

app.listen(3025, () => {
  console.log("App listening on port 3025!");
});

// https://www.youtube.com/watch?list=PLpD_vYWjZt13p0UqZVHWbruywY9NO0SJm&v=tp6jIGGfQzg&feature=youtu.be
