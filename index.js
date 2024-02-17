require("dotenv").config();
const express = require("express");

const { init, testModel } = require("./db");

const PORT = process.env.PORT || 80;

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    const things = await testModel.search({});

    res.status(200).json(things);
});

app.post("/", async (req, res) => {
    const { name } = req.body;

    const id = await testModel.insert({ name });

    res.status(200).json({ id });
});

init().then(() => {
    app.listen(PORT, () => {
        console.log("App is up on ", PORT);
    });
});
