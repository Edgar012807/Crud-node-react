const { Router} = require( 'express');
const { pool} = require('../db.js');


//import { pool } from "../db.js";
/* console.log('hola')
console.log(pool); */
const router = Router();

router.get("/ping", async (req, res) => {
    
  const {rows} = await pool.query("SELECt * from users");
  console.log(rows[0]);
  res.json(rows[0]);
});



module.exports ={
    router: router
}