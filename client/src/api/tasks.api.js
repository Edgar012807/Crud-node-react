// axios = require ("axios");
import axios from "axios";

const port = 5264;

export const getTasksRequest = async () =>
  await axios.get(`http://localhost:${port}/tasks`);



  export const createTaskRequest = async (task) =>
  await axios.post(`http://localhost:${port}/tasks`, task);


  export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:${port}/tasks/${id}`);

export  const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:${port}/tasks/${id}`);

  export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://localhost:${port}/tasks/${id}`, newFields); /* 




export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, {
    done,
  }); */

/*   module.exports = {
    axios: axios
  } */