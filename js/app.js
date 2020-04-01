const carrito = document.getElementById('carrito')
const cursos = document.getElementById('lista-cursos')

//Listeners
cargarEventListeners();

function cargarEventListeners(){
    //Dispara cuando se presiona agregar carrito
    cursos.addEventListener('click',comprarCurso)
}

//Funciones
//funcion que agrega el curso al carrito
function comprarCurso(e){
    e.preventDefault()

    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement

        leerDatosCurso(curso)
    }

}

//leer los datos del curso
function leerDatosCurso(curso){
    console.log(curso)
}