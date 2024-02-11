function validateGame() {
    const name01 = document.getElementById("input-nombre1").value;

    const name02 = document.getElementById("input-nombre2").value;
    
    const name03 = document.getElementById("input-nombre3").value;
    
    const name04 = document.getElementById("input-nombre4").value;
    
    const tamano = document.getElementById("input-tamano").value;
    alert(tamano)
    if(name01 == "" || name02 == "" || name03== "" || name04==""){
        alert("Names are missing");
    }
    else if(tamano.int = "" || tamano.int < 3 || tamano > 5){
        alert("Tamaño introducido incorrecto, debe ser entre 3 y 5");
    }
}
