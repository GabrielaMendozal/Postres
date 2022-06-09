function Join(elemento) {
    elemento.remove();
}

function actualizaLike(botonLike) {
    let divLike = botonLike.closest('.meEncantaN').querySelector('.meEncanta');
    let num = Number (divLike.innerText);
    num++;
    divLike.innerText = num;
}

function mensaje() {
    event.preventDefault ();
    let criterioBusqueda = document.querySelector(".search").value;  
    console.log("Comprobar si agarra el criterio", criterioBusqueda);
    alert("You are searching for" +" " + criterioBusqueda);
}



