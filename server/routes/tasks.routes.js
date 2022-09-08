const { Router } = require( "express");
const { pool} = require('../db.js');
const {getTasks,getTask,createTask, deleteTask,updateTask,} = require ("../controllers/tasks.controllers.js");


const route = Router();

route.get("/tasks", async (req, res) => {
    try {
      console.log(req.body);
      const {rows} = await pool.query("SELECT * FROM users");
      console.log(rows[0]);
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });

route.get("/tasks/:id", async (req, res) => {
    try {
      const {rows} = await pool.query("SELECT * FROM users WHERE id = $1", [
        req.params.id,
      ]);
      console.log('jjj')
      console.log( req.params.id);
      if (rows.length === 0)
        return res.status(404).json({ message: "Task not found" });
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });

 route.post("/tasks", async (req, res) => {
  try {
    console.log(req.body);
    const { title, desciption } = req.body;
    const {rows} = await pool.query('Insert into users(nombre,apellido,usuario,id) VALUES($1,$2,$3,$4)',
    [title, desciption,'hol','ed']
    );
    res.json({
      id: rows.insertId,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

route.put("/tasks/:id", async (req, res) => {
    try {
      const {rows} = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
        req.body,
        req.params.id,
      ]);
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });

/* route.delete("/tasks/:id",  async (req, res) => {
    try {
      const {row} = await pool.query("DELETE FROM tasks WHERE id = $1", [
        req.params.id,
      ]);
  
      if (row.affectedRows === 0)
        return res.status(404).json({ message: "Task not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }); */


module.exports ={
    route: route
}