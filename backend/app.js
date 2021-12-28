const express = require('express')
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
    const data = {
        gameState: "start"
    }

    const dataJSON = JSON.stringify(data);
    fs.writeFileSync('./data/index.json', dataJSON);
});

router.get('/play', (req, res) => {
    const data = {
        gameState: "play"
    }

    const dataJSON = JSON.stringify(data);
    fs.writeFileSync('./data/index.json', dataJSON);
});

app.listen(3000,() => {
    console.log("Server started on port 3000");
})