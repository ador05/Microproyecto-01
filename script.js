
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
    
    
    if (verify1 && (tamano == "5" || tamano == "4"|| tamano == "3" )){
        console.log("si llega a verificar")
        window.scrollBy({ top: 600, behavior: 'smooth' });
        }   
        matriz01 = crearmatriz();
        matriz02 = crearmatriz();
        matriz03 = crearmatriz();
        matriz04 = crearmatriz();

        
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

