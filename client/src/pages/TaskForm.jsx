import { Form, Formik } from "formik"; // formulario  
import { useTasks } from "../context/TaskProvider"; //contextos 
import { useParams, useNavigate } from "react-router-dom"; // rutas 
import { useEffect, useState } from "react"; //  

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({ title: "", description: "", usuario:"",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setTask({
          title: task.nombre,
          description: task.descripcion,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>

      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
            console.log(values);
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
           className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
            onSubmit={handleSubmit}
            
          >
            <h1 className="text-xl font-bold uppercase text-center px-2 mt-10">
              {params.id ? "Edit Task" : "New Task"}
            </h1>
            <label  className="block">Titulo</label>
            <input
              type="text"
              name="title"
              placeholder="Ingrese Titulo"
              className="px-2 py-1 rounded-sm w-full"
              required
             
              onChange={handleChange}
              value={values.title}
            />

            <label  className="block" >descripcion</label>
            <textarea
              name="description"
              rows="3"
              required
              placeholder="Ingresar una descripcion "
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              
              value={values.description}
            ></textarea>

            <button
              type="submit"
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
              disabled={isSubmitting}
             
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>

    
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;