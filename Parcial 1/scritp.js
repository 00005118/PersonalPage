const input_task = document.querySelector('.input-task');
const button_task = document.querySelector('.button-task');
const view_list = document.querySelector('.view-list');

button_task.addEventListener("click",addTask);///Evento click en el botton
view_list.addEventListener("click",delete_check_task); ///Evento a dar lick en los botonces

/*------------------------------- GENERANDO TAREAS AL DAR LICK----------------------------------------------*/
function addTask (event){
    event.preventDefault();  ////Limpia ventanas emergentes como el "setTimeout" y otros campos antes de el
    if(input_task.value)
    {
       
        //creando div
        const taskdiv= document.createElement("div"); //creando contenedor div
        taskdiv.classList.add("newContaineradd");//llamando a la clase de css
        //creando LI 
        const newli = document.createElement('li');
        newli.innerText=input_task.value;////TEXTO A INGRESAR
        newli.classList.add('task-item');
        taskdiv.appendChild(newli);//Agregandolo al contendor
        //creando button checked
        const checkButton = document.createElement('button'); ///Creando el botton
        checkButton.innerHTML='<i class="fas fa-check "></i>'; ///dando propiedades del icono
        checkButton.classList.add("complete-task"); ////csss propiedades
        taskdiv.appendChild(checkButton);
        //Delete button 
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML='<i class="fas fa-trash"></i>';///Dando propiedades del icono
        deleteButton.classList.add("button-trash"); ///css propiedades
        taskdiv.appendChild(deleteButton);

        view_list.appendChild(taskdiv);
        input_task.value="";
    }else{
        showWarning("Existen campos vacíos en el formulario");
        return;
    }
}
/**-----------------------------------------------------------------------------------------------------------**/

/**---Borrando tareas---**/
function delete_check_task(e){
    const item=e.target; ///atrapando el tipo de valor que resive ---> aqui resive dos valores (eliminar o tarea_completa) y agarramos en una variable
    if(item.classList[0]==='button-trash'){
        const eraceLine=item.parentElement;  ///creando variable que englobe todo el contenedor elegido en el que se hace clip
        eraceLine.remove();  
    }
    if(item.classList[0]==='complete-task'){
        const CheckTask=item.parentElement;
        CheckTask.classList.toggle("task-completed"); ///El efecto quecutara en css para que se vea transparente
    }
}

const showWarning = (message="") => {  ////Definiendo funcion que resivira un valor por default
    const warningElement = document.querySelector(".warning"); ///Obteniendo del HTML la etiqueta
  
    warningElement.innerHTML = `<p>${message}</p>`;  ///agregando al codigo HTML ///otra forma de hacerlo es "<p>" + message + "</p>";
    warningElement.style["display"] = "block"; ///modificando una propiedad en el css ///otra formar es usar visibility:hidden;  -> pero en esta se conserba el espacio del contenedor
    console.log("Entro");
    setTimeout(()=> {  ///FUNCION ESPECIAL de tiempo
      warningElement.style["display"] = "none"; ///Accion que realizara despues de los 3 segundos
    }, 3000); /////tiempo de espera en milisegundos 3000 (3 segundos)/// esta accion solo se ejecutara una ves NO cada cierto tiempo
  }