import express from "express";
import "colors";
import * as path from "path";

const port = process.env.port || 4444;
const staticPath = path.resolve("..", "client", "static");
const indexHtmlPath = path.join(staticPath, "index.html");

const app = express();

app.use(express.static(staticPath));
app.get((req, res) => {
  res.sendFile(indexHtmlPath);
})

app.listen(port, () => console.log(`Server started at port ${port}`.yellow));