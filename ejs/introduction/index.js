import express from "express";
import { dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('home.ejs');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});