import { createContext, useContext , useState} from "react";
import {getTasksRequest , deleteTaskRequest , createTaskRequest,updateTaskRequest,getTaskRequest} from '../api/tasks.api';
import {TaskContext} from './TaskContext';



export const useTasks = () =>{
    const context = useContext(TaskContext)
    if(!context){
        throw new Error ("useTask must be used  within "); 
    }
    return context;
}


export const TaskContextProvider = ({children})=>{
    const [ tasks, setTasks] = useState([]);
    async function loadTasks(){
        const response = await getTasksRequest();
        //console.log(response.data);
        setTasks(response.data);
  
      }
      //loadTasks()
      const deleteTask = async (id) => {
        try {
          const response = await deleteTaskRequest(id);
          setTasks(tasks.filter((task) => task.id !== 2));
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      };

      const createTask = async (task) => {
        try {
          await createTaskRequest(task);
          // setTasks([...tasks, response.data]);
        } catch (error) {
          console.error(error);
        }
      };
      const getTask = async (id) => {
        try {
          const response = await getTaskRequest(id);
          return response.data;
        } catch (error) {
          console.error(error);
        }
      };

      const updateTask = async (id, newFields) => {
        try {
          const response = await updateTaskRequest(id, newFields);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      };
    return(
    <TaskContext.Provider value ={{tasks , loadTasks ,deleteTask,createTask,getTask,updateTask}}>{children}</TaskContext.Provider>
    );
}