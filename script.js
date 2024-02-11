
function validateGame() {
    const name01 = document.getElementById("input-nombre1").value;

    const name02 = document.getElementById("input-nombre2").value;
    
    const name03 = document.getElementById("input-nombre3").value;
    
    const name04 = document.getElementById("input-nombre4").value;
    
    const tamano = document.getElementById("input-tamano").value;

    let verify1 = true;
    
    if(name01  == "" || name02 == "" || name03== "" || name04==""){
        alert("Faltan Nombres");
        verify1=false;
        
    }
    
    if (verify1){
        //window.location.href = "./index2.html";
    }
    
}

function openindex2(){
    window.location.href = "./index2.html";
}
