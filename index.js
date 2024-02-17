const express = require("express");

const PORT = process.env.PORT || 80;

const app = express();

app.get("/", async (req, res) => {
    res.status(200).send("Hello world!");
});

app.listen(PORT, () => {
    console.log("App is up on ", PORT);
});
