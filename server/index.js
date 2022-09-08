const express =  require( "express");
const cors = require('cors');
/* import cors from "cors";
import {dirname, join} from 'path'
import {fileURLToPath} from 'url' */
const { PORT } = require ("./config.js");

const {router} = require( './routes/index.routes');
const {route} = require ("./routes/tasks.routes.js");
//console.log({route})
const app = express();
app.use(cors());
app.use(express.json());
/* const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname)

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);

app.use(express.static(join(__dirname, '../client/dist'))) */
app.use(router);
app.use(route);
app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);