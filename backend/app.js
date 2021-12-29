const express = require('express')
const pool = require('../database.config')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require("cors");
const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

const app = express()
const router = express.Router();


app.use(cors(corsOptions))
app.use("/",router);



router.get('/start', (req, res) => {
    pool.query('insert into Pong(state) values("Start")')
});

router.get('/play', (req, res) => {

    pool.query('insert into Pong(state) values("Play")')
});

app.listen(3000,() => {
    console.log("Server started on port 3000");
})