function agregarElemento() {
    const input = document.getElementById("input").value;  
    const lista = document.getElementById("lista");
    
    //Pasos para crear elementos y asignar un valor de texto
    const elementoDeLista = document.createElement("li")
    elementoDeLista.textContent = input
    lista.appendChild(elementoDeLista)

    //Crea un boton para eliminar el elemento
    const button = document.createElement("button")
    button.textContent = "Borrar";
    elementoDeLista.appendChild(button);
    button.onclick = function(){
        lista.removeChild(elementoDeLista);
        }
}
