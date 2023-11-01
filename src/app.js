// TODO: organizar todas as rotas.

const express = require("express");

const app = express();
const ejs = require("ejs");
const multer = require("multer");
const path = require("path");
const fs = require("node:fs");

const { storage, ABS_PATH, initialize_db, valid_formats } = require("./config.js");
const { Image } = require("./models/Post.js");

app.use(express.static(path.join(__dirname, 'public', 'views')));
app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

const upload = multer( { storage: storage } );

initialize_db().then(() => {
    app.listen("8080");
    console.log("servidor iniciado");
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/media", async (req, res) => {

    try {
        const images = await Image.find();
        res.render("media.ejs", { images });
    } catch(err) {
        console.log(err);
        res.send("ocorreu um erro");
    }
});

app.get("/media/:id", async (req, res) => {
    try {
        const image = await Image.findById({_id: req.params.id})
        res.render("post.ejs", { image });
    } catch(err) {
        console.log(err);
        res.send("ocorreu um erro");
    }
});

app.post("/api", upload.single('file'), async (req, res) => {

    try {
        const image = fs.readFileSync(path.resolve(req.file.path));;
        const file_arr = req.file.filename.split(".")
        const ext = file_arr[file_arr.length - 1];

        if (!valid_formats.includes(ext)) {
            return res.status(401).send({
                error: "o formato do seu arquivo nao e suportado!!! ." + ext,
            });
        }

        const new_image = new Image({
            name: req.body.name,
            data: Buffer.from(image).toString("base64"),
            format: ext
        });

        await new_image.save();

        res.redirect("/");

    } catch(err) {
        res.status(401).send("ocorreu um erro");
        console.error(err);
    }
});

app.get("/api/clear", async (req, res) => {

    try {
        await Image.deleteMany();
        res.send("yep")
    } catch(err) {
        res.status(401).send("ocorreu um erro");
        console.error(err);
    } 
});