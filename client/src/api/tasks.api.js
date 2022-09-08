// axios = require ("axios");
import axios from "axios";
/* const getTasksRequest = async () =>
  await axios.get("http://localhost:4000/tasks"); */

  export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:5260/tasks", task);

/*  const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4000/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, {
    done,
  }); */

/*   module.exports = {
    axios: axios
  } */