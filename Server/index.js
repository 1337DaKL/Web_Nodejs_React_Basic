const express = require("express");
const cors = require("cors");



const app = express();
app.use(cors());

app.get("/:name" , (req , res) => {
    const params  = req.params;
    const name = params.name
    res.send(`Hello ${name}`);
})

app.listen(8080 , () => {
    console.log("Da ket noi cong 8080");
})