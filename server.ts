import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';

const app = express()

app.use(cors({
    origin: '*'
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));


app.route('/').post((req, res) => {
    fs.writeFile(req.body.dictionaryName, `export const ${req.body.dictionaryVariableName} = ${JSON.stringify(req.body.dictionary, null, 2)}`, (err) => {
        if (err) console.log('error')
        console.log('good')
    })
    res.send(req.body)
})

app.listen(3000, () => {
    console.log('Listen on port 3000')
})