const express = require("express");
const app = express();
const port = 2323;
app.get("/", (req, res) => res.send("Bot is running!"));
app.listen(port, () => console.log(`[BOT] Keep-alive server on port ${port}`));
