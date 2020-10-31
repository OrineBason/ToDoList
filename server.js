import express from 'express'
import bodyParser from 'body-parser'
const app = express()
import {router} from './routes/routes.js'

app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('', router)
app.listen(8080, () => console.log('Example app listening on port 3000!'));

