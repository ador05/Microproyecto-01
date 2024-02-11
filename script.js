function matrizcuadrada(numbers) {
    // Check if the number of elements is a perfect square
    const squareRoot = Math.sqrt(numbers.length);
    if (!Number.isInteger(squareRoot)) {
      throw new Error("error");
    }
  
    // Get the dimension of the square matrix
    const dimension = Math.floor(squareRoot);
  
    // Create an empty matrix
    const matrix = [];
    for (let i = 0; i < dimension; i++) {
      matrix[i] = [];
    }
  
    // Fill the matrix with the input numbers
    let index = 0;
    for (let i = 0; i < dimension; i++) {
      for (let j = 0; j < dimension; j++) {
        matrix[i][j] = parseInt(numbers[index]);
        index++;
      }
    }
  
    return matrix;
  }

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
        document.getElementById("puntajes1").textContent = ``;
           
        matriz01 = crearmatriz();
        matriz02 = crearmatriz();
        matriz03 = crearmatriz();
        matriz04 = crearmatriz();

        localStorage.setItem("matriz1", matriz01);
        localStorage.setItem("matriz2", matriz02);
        localStorage.setItem("matriz3", matriz03);
        localStorage.setItem("matriz4", matriz04);
        let counter = 0;
        localStorage.setItem("counter", counter)

        const div = document.getElementById("myDiv");
        div.innerHTML = "";
       
    }

    }

function sacarpuntaje(jugador, setvalues){
    
    const tamano = Number(document.getElementById("input-tamano").value);
    matriz1pre = localStorage.getItem("matriz1");
    matriz1pr = matriz1pre.split(",");
    matriz1 = matrizcuadrada(matriz1pr);
    

    matriz2pre = localStorage.getItem("matriz2");
    matriz2pr = matriz2pre.split(",");
    matriz2 = matrizcuadrada(matriz2pr);


    matriz3pre = localStorage.getItem("matriz3");
    matriz3pr = matriz3pre.split(",");
    matriz3 = matrizcuadrada(matriz3pr);
    

    matriz4pre = localStorage.getItem("matriz4");
    matriz4pr = matriz4pre.split(",");
    matriz4 = matrizcuadrada(matriz4pr);
    
    
    if (parseInt(jugador) == 1){
        matriz = matriz1;

    }
    else if (parseInt(jugador) == 2){
        matriz = matriz2;    
    }
    else if (parseInt(jugador) == 3){
       matriz = matriz3;
    }
    else{
        matriz = matriz4;

    }
    
    valuecheck = setvalues;
    let comparador = 0;
    let columna = 0;
    let fila = 0;
    let diagonal = 0;


    console.log(matriz)
    //chequeo columnas
    for (let i = 0; i < tamano; i++) {
        for (let j = 0; j < tamano; j++) {
            console.log(matriz[i][j])
            if(setvalues.has(matriz[i][j]))
            {
                comparador++;
            }
        }
        if (comparador == tamano){
            columna++;
            console.log(columna);
        }
        comparador = 0;
  
      }

    comparador = 0;
    //chequeo filas
    for (let i = 0; i < tamano; i++) {
        for (let j = 0; j < tamano; j++) {
            console.log(matriz[j][i])
            if(setvalues.has(matriz[j][i]))
            {
                comparador++;
            }
        }
        if (comparador == tamano){
            fila++;
            console.log(fila);
        }
        comparador = 0;
  
      }

    comparador = 0;
    let chequeo2 = 0;
    //chequeo diagonal 01
    while (chequeo2 < tamano){
        console.log(matriz[chequeo2][chequeo2])
        if (setvalues.has(matriz[chequeo2][chequeo2])){
            comparador++;
        }
        if (comparador == tamano){
            diagonal++;
        }
        chequeo2++;
    }
    let chequeo3 = 0;
    let chequeo4 = tamano - 1;
    comparador = 0;
    //chequeo diagonal 02
    while (chequeo3 < tamano){
        console.log("diagonal 2")
        console.log(matriz[chequeo3][chequeo4])
        if (setvalues.has(matriz[chequeo3][chequeo4])){
            comparador++;
        }
        if (comparador == tamano){
            diagonal++;
        }
        chequeo3++;
        chequeo4--;
    }
    //chequeo carton completo
    let cartoncompleto = 0;
    if ((fila == tamano && columna == tamano)){
        cartoncompleto++;
    }

    if (cartoncompleto != 0){
        let puntaje = 5;
        return puntaje;
    }else{
        let puntaje = ((fila*1)+(columna*1)+(diagonal*3));
        return puntaje;
    }


}

let values = new Set();

function sacarbola()    {
    const name01 = document.getElementById("input-nombre1").value;

    const name02 = document.getElementById("input-nombre2").value;
    
    const name03 = document.getElementById("input-nombre3").value;
    
    const name04 = document.getElementById("input-nombre4").value;
    

    
    console.log(values)
    let value;
    let counter = parseInt(localStorage.getItem("counter")) + 1;
    if (counter > 25)
    {
        console.log("Limite de bolas alcanzado");
        let puntaje_jugador1 = sacarpuntaje(1, values);
        let puntaje_jugador2 = sacarpuntaje(2, values);
        let puntaje_jugador3 = sacarpuntaje(3, values);
        let puntaje_jugador4 = sacarpuntaje(4, values);
        
        document.getElementById("puntajes1").textContent = `¡Se termino el juego!\n puntajes: \n`+name01.toString() + `:` + puntaje_jugador1.toString() +`pts\n`+name02.toString() + `:`+puntaje_jugador2.toString()+`pts\n`+name03.toString() + `:`+puntaje_jugador3.toString()+`pts\n`+name04.toString() + `:`+puntaje_jugador4.toString()`pts`;
    }
    else{
        
        localStorage.setItem("counter", counter);
        while (true) {
        
            value = getRandomInt(1,50);
            if (!values.has(value)){
                let bola = value;
                values.add(value);
                document.getElementById("result1").textContent = "Bola: " + bola.toString();
                document.getElementById("turno1").textContent = "Turno: " + counter.toString();
                
                break;
            }
        
        }
    
    }
    
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
                break;
            }
        
            
        }
        
      }

    }
    return matrix1;
    
  }

  function crearmatrizgrafica(selection){
    const tamano = Number(document.getElementById("input-tamano").value);
    matriz1pre = localStorage.getItem("matriz1");
    matriz1pr = matriz1pre.split(",");
    matriz1 = matrizcuadrada(matriz1pr);
    console.log(matriz1);

    matriz2pre = localStorage.getItem("matriz2");
    matriz2pr = matriz2pre.split(",");
    matriz2 = matrizcuadrada(matriz2pr);
    console.log(matriz2);


    matriz3pre = localStorage.getItem("matriz3");
    matriz3pr = matriz3pre.split(",");
    matriz3 = matrizcuadrada(matriz3pr);
    console.log(matriz3);

    matriz4pre = localStorage.getItem("matriz4");
    matriz4pr = matriz4pre.split(",");
    matriz4 = matrizcuadrada(matriz4pr);
    console.log(matriz4);

    localStorage.setItem("currentmatrix", selection);
    console.log(selection);
    const div = document.getElementById("myDiv");
    
    if (parseInt(selection) == 1){
        
        if(parseInt(tamano) == 3){
            div.innerHTML = `
            <div class="grid-container3">
            <div class="grid-item">${matriz1[0][0]}</div>
            <div class="grid-item">${matriz1[0][1]}</div>
            <div class="grid-item">${matriz1[0][2]}</div>
            <div class="grid-item">${matriz1[1][0]}</div>
            <div class="grid-item">${matriz1[1][1]}</div>
            <div class="grid-item">${matriz1[1][2]}</div>
            <div class="grid-item">${matriz1[2][0]}</div>
            <div class="grid-item">${matriz1[2][1]}</div>
            <div class="grid-item">${matriz1[2][2]}</div>
            </div>
            
            `
        }
        else if(parseInt(tamano) == 4){
            div.innerHTML = `
                <div class="grid-container4">
                <div class="grid-item">${matriz1[0][0]}</div>
                <div class="grid-item">${matriz1[0][1]}</div>
                <div class="grid-item">${matriz1[0][2]}</div>  
                <div class="grid-item">${matriz1[0][3]}</div>
                <div class="grid-item">${matriz1[1][0]}</div>
                <div class="grid-item">${matriz1[1][1]}</div>  
                <div class="grid-item">${matriz1[1][2]}</div>
                <div class="grid-item">${matriz1[1][3]}</div>
                <div class="grid-item">${matriz1[2][0]}</div>
                <div class="grid-item">${matriz1[2][1]}</div>
                <div class="grid-item">${matriz1[2][2]}</div>
                <div class="grid-item">${matriz1[2][3]}</div>
                <div class="grid-item">${matriz1[3][0]}</div>
                <div class="grid-item">${matriz1[3][1]}</div>
                <div class="grid-item">${matriz1[3][2]}</div>
                <div class="grid-item">${matriz1[3][3]}</div>
    
                </div>
            
            `
        }
        else{
            div.innerHTML = `<div class="grid-container5">
            <div class="grid-item">${matriz1[0][0]}</div>
            <div class="grid-item">${matriz1[0][1]}</div>
            <div class="grid-item">${matriz1[0][2]}</div>  
            <div class="grid-item">${matriz1[0][3]}</div>
            <div class="grid-item">${matriz1[0][4]}</div>
            <div class="grid-item">${matriz1[1][0]}</div>  
            <div class="grid-item">${matriz1[1][1]}</div>
            <div class="grid-item">${matriz1[1][2]}</div>
            <div class="grid-item">${matriz1[1][3]}</div>
            <div class="grid-item">${matriz1[1][4]}</div>
            <div class="grid-item">${matriz1[2][0]}</div>
            <div class="grid-item">${matriz1[2][1]}</div>
            <div class="grid-item">${matriz1[2][2]}</div>
            <div class="grid-item">${matriz1[2][3]}</div>
            <div class="grid-item">${matriz1[2][4]}</div>
            <div class="grid-item">${matriz1[3][0]}</div>
            <div class="grid-item">${matriz1[3][1]}</div>
            <div class="grid-item">${matriz1[3][2]}</div>
            <div class="grid-item">${matriz1[3][3]}</div>
            <div class="grid-item">${matriz1[3][4]}</div>
            <div class="grid-item">${matriz1[4][0]}</div>
            <div class="grid-item">${matriz1[4][1]}</div>
            <div class="grid-item">${matriz1[4][2]}</div>
            <div class="grid-item">${matriz1[4][3]}</div>
            <div class="grid-item">${matriz1[4][4]}</div>
          </div>
            `
        }

    }
    else if (parseInt(selection) == 2){
        if(parseInt(tamano) == 3){
            div.innerHTML = `
            <div class="grid-container3">
            <div class="grid-item">${matriz2[0][0]}</div>
            <div class="grid-item">${matriz2[0][1]}</div>
            <div class="grid-item">${matriz2[0][2]}</div>
            <div class="grid-item">${matriz2[1][0]}</div>
            <div class="grid-item">${matriz2[1][1]}</div>
            <div class="grid-item">${matriz2[1][2]}</div>
            <div class="grid-item">${matriz2[2][0]}</div>
            <div class="grid-item">${matriz2[2][1]}</div>
            <div class="grid-item">${matriz2[2][2]}</div>
            </div>
            
            `
        }
        else if(parseInt(tamano) == 4){
            div.innerHTML = `
                <div class="grid-container4">
                <div class="grid-item">${matriz2[0][0]}</div>
                <div class="grid-item">${matriz2[0][1]}</div>
                <div class="grid-item">${matriz2[0][2]}</div>  
                <div class="grid-item">${matriz2[0][3]}</div>
                <div class="grid-item">${matriz2[1][0]}</div>
                <div class="grid-item">${matriz2[1][1]}</div>  
                <div class="grid-item">${matriz2[1][2]}</div>
                <div class="grid-item">${matriz2[1][3]}</div>
                <div class="grid-item">${matriz2[2][0]}</div>
                <div class="grid-item">${matriz2[2][1]}</div>
                <div class="grid-item">${matriz2[2][2]}</div>
                <div class="grid-item">${matriz2[2][3]}</div>
                <div class="grid-item">${matriz2[3][0]}</div>
                <div class="grid-item">${matriz2[3][1]}</div>
                <div class="grid-item">${matriz2[3][2]}</div>
                <div class="grid-item">${matriz2[3][3]}</div>
    
                </div>
            
            `
        }
        else{
            div.innerHTML = `<div class="grid-container5">
            <div class="grid-item">${matriz2[0][0]}</div>
            <div class="grid-item">${matriz2[0][1]}</div>
            <div class="grid-item">${matriz2[0][2]}</div>  
            <div class="grid-item">${matriz2[0][3]}</div>
            <div class="grid-item">${matriz2[0][4]}</div>
            <div class="grid-item">${matriz2[1][0]}</div>  
            <div class="grid-item">${matriz2[1][1]}</div>
            <div class="grid-item">${matriz2[1][2]}</div>
            <div class="grid-item">${matriz2[1][3]}</div>
            <div class="grid-item">${matriz2[1][4]}</div>
            <div class="grid-item">${matriz2[2][0]}</div>
            <div class="grid-item">${matriz2[2][1]}</div>
            <div class="grid-item">${matriz2[2][2]}</div>
            <div class="grid-item">${matriz2[2][3]}</div>
            <div class="grid-item">${matriz2[2][4]}</div>
            <div class="grid-item">${matriz2[3][0]}</div>
            <div class="grid-item">${matriz2[3][1]}</div>
            <div class="grid-item">${matriz2[3][2]}</div>
            <div class="grid-item">${matriz2[3][3]}</div>
            <div class="grid-item">${matriz2[3][4]}</div>
            <div class="grid-item">${matriz2[4][0]}</div>
            <div class="grid-item">${matriz2[4][1]}</div>
            <div class="grid-item">${matriz2[4][2]}</div>
            <div class="grid-item">${matriz2[4][3]}</div>
            <div class="grid-item">${matriz2[4][4]}</div>
          </div>
            `
        }
        
    } 
    else if (parseInt(selection) == 3){
        if(parseInt(tamano) == 3){
            div.innerHTML = `
            <div class="grid-container3">
            <div class="grid-item">${matriz3[0][0]}</div>
            <div class="grid-item">${matriz3[0][1]}</div>
            <div class="grid-item">${matriz3[0][2]}</div>
            <div class="grid-item">${matriz3[1][0]}</div>
            <div class="grid-item">${matriz3[1][1]}</div>
            <div class="grid-item">${matriz3[1][2]}</div>
            <div class="grid-item">${matriz3[2][0]}</div>
            <div class="grid-item">${matriz3[2][1]}</div>
            <div class="grid-item">${matriz3[2][2]}</div>
            </div>
            
            `
        }
        else if(parseInt(tamano) == 4){
            div.innerHTML = `
                <div class="grid-container4">
                <div class="grid-item">${matriz3[0][0]}</div>
                <div class="grid-item">${matriz3[0][1]}</div>
                <div class="grid-item">${matriz3[0][2]}</div>  
                <div class="grid-item">${matriz3[0][3]}</div>
                <div class="grid-item">${matriz3[1][0]}</div>
                <div class="grid-item">${matriz3[1][1]}</div>  
                <div class="grid-item">${matriz3[1][2]}</div>
                <div class="grid-item">${matriz3[1][3]}</div>
                <div class="grid-item">${matriz3[2][0]}</div>
                <div class="grid-item">${matriz3[2][1]}</div>
                <div class="grid-item">${matriz3[2][2]}</div>
                <div class="grid-item">${matriz3[2][3]}</div>
                <div class="grid-item">${matriz3[3][0]}</div>
                <div class="grid-item">${matriz3[3][1]}</div>
                <div class="grid-item">${matriz3[3][2]}</div>
                <div class="grid-item">${matriz3[3][3]}</div>
    
                </div>
            
            `
        }
        else{
            div.innerHTML = `
            <div class="grid-container5">
            <div class="grid-item">${matriz3[0][0]}</div>
            <div class="grid-item">${matriz3[0][1]}</div>
            <div class="grid-item">${matriz3[0][2]}</div>  
            <div class="grid-item">${matriz3[0][3]}</div>
            <div class="grid-item">${matriz3[0][4]}</div>
            <div class="grid-item">${matriz3[1][0]}</div>  
            <div class="grid-item">${matriz3[1][1]}</div>
            <div class="grid-item">${matriz3[1][2]}</div>
            <div class="grid-item">${matriz3[1][3]}</div>
            <div class="grid-item">${matriz3[1][4]}</div>
            <div class="grid-item">${matriz3[2][0]}</div>
            <div class="grid-item">${matriz3[2][1]}</div>
            <div class="grid-item">${matriz3[2][2]}</div>
            <div class="grid-item">${matriz3[2][3]}</div>
            <div class="grid-item">${matriz3[2][4]}</div>
            <div class="grid-item">${matriz3[3][0]}</div>
            <div class="grid-item">${matriz3[3][1]}</div>
            <div class="grid-item">${matriz3[3][2]}</div>
            <div class="grid-item">${matriz3[3][3]}</div>
            <div class="grid-item">${matriz3[3][4]}</div>
            <div class="grid-item">${matriz3[4][0]}</div>
            <div class="grid-item">${matriz3[4][1]}</div>
            <div class="grid-item">${matriz3[4][2]}</div>
            <div class="grid-item">${matriz3[4][3]}</div>
            <div class="grid-item">${matriz3[4][4]}</div>
          </div>
            `
        }
    }
        
    
    else{

        if(parseInt(tamano) == 3){
            div.innerHTML = `
            <div class="grid-container3">
            <div class="grid-item">${matriz4[0][0]}</div>
            <div class="grid-item">${matriz4[0][1]}</div>
            <div class="grid-item">${matriz4[0][2]}</div>
            <div class="grid-item">${matriz4[1][0]}</div>
            <div class="grid-item">${matriz4[1][1]}</div>
            <div class="grid-item">${matriz4[1][2]}</div>
            <div class="grid-item">${matriz4[2][0]}</div>
            <div class="grid-item">${matriz4[2][1]}</div>
            <div class="grid-item">${matriz4[2][2]}</div>
            </div>
            
            `
        }
        else if(parseInt(tamano) == 4){
            div.innerHTML = `
                <div class="grid-container4">
                <div class="grid-item">${matriz4[0][0]}</div>
                <div class="grid-item">${matriz4[0][1]}</div>
                <div class="grid-item">${matriz4[0][2]}</div>  
                <div class="grid-item">${matriz4[0][3]}</div>
                <div class="grid-item">${matriz4[1][0]}</div>
                <div class="grid-item">${matriz4[1][1]}</div>  
                <div class="grid-item">${matriz4[1][2]}</div>
                <div class="grid-item">${matriz4[1][3]}</div>
                <div class="grid-item">${matriz4[2][0]}</div>
                <div class="grid-item">${matriz4[2][1]}</div>
                <div class="grid-item">${matriz4[2][2]}</div>
                <div class="grid-item">${matriz4[2][3]}</div>
                <div class="grid-item">${matriz4[3][0]}</div>
                <div class="grid-item">${matriz4[3][1]}</div>
                <div class="grid-item">${matriz4[3][2]}</div>
                <div class="grid-item">${matriz4[3][3]}</div>
    
                </div>
            
            `
        }
        else{
            div.innerHTML = `<div class="grid-container5">
            <div class="grid-item">${matriz4[0][0]}</div>
            <div class="grid-item">${matriz4[0][1]}</div>
            <div class="grid-item">${matriz4[0][2]}</div>  
            <div class="grid-item">${matriz4[0][3]}</div>
            <div class="grid-item">${matriz4[0][4]}</div>
            <div class="grid-item">${matriz4[1][0]}</div>  
            <div class="grid-item">${matriz4[1][1]}</div>
            <div class="grid-item">${matriz4[1][2]}</div>
            <div class="grid-item">${matriz4[1][3]}</div>
            <div class="grid-item">${matriz4[1][4]}</div>
            <div class="grid-item">${matriz4[2][0]}</div>
            <div class="grid-item">${matriz4[2][1]}</div>
            <div class="grid-item">${matriz4[2][2]}</div>
            <div class="grid-item">${matriz4[2][3]}</div>
            <div class="grid-item">${matriz4[2][4]}</div>
            <div class="grid-item">${matriz4[3][0]}</div>
            <div class="grid-item">${matriz4[3][1]}</div>
            <div class="grid-item">${matriz4[3][2]}</div>
            <div class="grid-item">${matriz4[3][3]}</div>
            <div class="grid-item">${matriz4[3][4]}</div>
            <div class="grid-item">${matriz4[4][0]}</div>
            <div class="grid-item">${matriz4[4][1]}</div>
            <div class="grid-item">${matriz4[4][2]}</div>
            <div class="grid-item">${matriz4[4][3]}</div>
            <div class="grid-item">${matriz4[4][4]}</div>
          </div>
            `
        }
        
    }
    

    }
