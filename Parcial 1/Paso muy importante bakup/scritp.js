const input_task = document.querySelector('.input-task');
const button_task = document.querySelector('.button-task');
const view_list = document.querySelector('.view-list');

button_task.addEventListener("click",addTask);///Evento click en el botton


/*------------------------------- GENERANDO TAREAS AL DAR LICK----------------------------------------------*/
function addTask (event){
    event.preventDefault();
    //creando div
    const taskdiv= document.createElement("div"); //creando contenedor div
    taskdiv.classList.add("newContaineradd");//llamando a la clase de css
    //creando LI 
    const newli = document.createElement('li');
    newli.innerText='Primera tarea' ;////Texto a ingresar
    newli.classList.add('task-item');
    taskdiv.appendChild(newli);//Agregandolo al contendor
    //creando button checked
    const checkButton = document.createElement('button'); ///Creando el botton
    checkButton.innerHTML='<i class="fas fa-check"></i>'; ///dando propiedades del icono
    checkButton.classList.add("complete-task"); 
    taskdiv.appendChild(checkButton);
    //Delete button 
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML='<i class="fas fa-trash"></i>';///Dando propiedades del icono
    deleteButton.classList.add("complete-task");
    taskdiv.appendChild(deleteButton);

    view_list.appendChild(taskdiv);
}
/**-----------------------------------------------------------------------------------------------------------**/