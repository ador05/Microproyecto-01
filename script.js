function validateGame() {
    const name01 = document.getElementById("input-nombre1").value;

    const name02 = document.getElementById("input-nombre2").value;
    
    const name03 = document.getElementById("input-nombre3").value;
    
    const name04 = document.getElementById("input-nombre4").value;
    
    const tamano = document.getElementById("input-tamano").value;

    localStorage.setItem("nombre01", name01)
    localStorage.setItem("nombre02", name02)
    localStorage.setItem("nombre03", name03)
    localStorage.setItem("nombre04", name04)

    let verify1 = true;
    
    if(name01  == "" || name02 == "" || name03== "" || name04==""){
        alert("Faltan Nombres");
        verify1=false;
        
    }
    
    
    if (verify1 && (tamano == "5" || tamano == "4"|| tamano == "3" )){
        
        window.scrollBy({ top: 600, behavior: 'smooth' });
        }   
        matriz01 = crearmatriz();
        matriz02 = crearmatriz();
        matriz03 = crearmatriz();
        matriz04 = crearmatriz();

        localStorage.setItem("matriz1", matriz01);
        localStorage.setItem("matriz2", matriz02);
        localStorage.setItem("matriz2", matriz02);
        localStorage.setItem("matriz2", matriz02);


    }
    
function sacarbola()    {
    let values = new Set();
    let counter;
    while (true)
    {
        counter = getRandomInt(1,50);
        if (!values.has(counter)){
            let bola = counter;
            values.add(counter);
            break;
        }
    }
    return bola;
}

function guardar(){
    console.log(localStorage.getItem("nombre01"));
}

function openindex2(){
    window.location.href = "./index2.html";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function crearmatriz() {
    const tamano = Number(document.getElementById("input-tamano").value);
    let values = new Set();
    let matrix1 = Array(tamano).fill().map(() => Array(tamano));
    let val;
    for (let i = 0; i < tamano; i++) {
      for (let j = 0; j < tamano; j++) {
        while (true){
            val = getRandomInt(1,50);
            if (!values.has(val)) {
                matrix1[i][j] = val;
                values.add(val);
                console.log(val);
                break;
            }
        
            
        }
        
      }

    }
    console.log(matrix1);
    return matrix1;
    
  }

