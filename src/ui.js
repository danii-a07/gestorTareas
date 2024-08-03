//Importar la función para traer las tareas del LocalStorage//
import { getTasks } from "./task";

//Función para visualizar tareas//
export const renderTasks = () => {
    const TaskList = document.getElementById("task-list");
    TaskList.innerHTML = "";
    const tasks = getTasks();
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        
        if(task.completed === true){
            li.classList.add("completed");
        }

        li.innerHTML = `
        ${task.text}
        <button class="delete"> Borrar </button>
        <button class="toggle"> ${task.completed === true ? "Regresar" : "Completado"} </button>
        `;

        TaskList.appendChild(li);
    });

}; 