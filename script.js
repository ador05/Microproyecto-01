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
        }   
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



function sacarbola()    {
    let values = new Set();
    let value;
    let counter = parseInt(localStorage.getItem("counter")) + 1;
    if (counter > 24)
    {
        console.log("Limite de bolas alcanzado");
    }
    else{
        
        localStorage.setItem("counter", counter);
        while (true) {
        
            value = getRandomInt(1,50);
            if (!values.has(value)){
                let bola = value;
                values.add(value);
                document.getElementById("result1").textContent = "Bola: " + bola.toString();
                break;
            }
            localStorage.setItem("bolas", values);
            console.log(bola);
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
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            </div>
            
            `
        }
        else if(parseInt(tamano) == 4){
            div.innerHTML = `
                <div class="grid-container4">
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>  
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>  
                <div class="grid-item">7</div>
                <div class="grid-item">8</div>
                <div class="grid-item">9</div>
                <div class="grid-item">10</div>
                <div class="grid-item">11</div>
                <div class="grid-item">12</div>
                <div class="grid-item">13</div>
                <div class="grid-item">14</div>
                <div class="grid-item">15</div>
                <div class="grid-item">16</div>
    
                </div>
            
            `
        }
        else{
            div.innerHTML = `<div class="grid-container5">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>  
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>  
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            <div class="grid-item">10</div>
            <div class="grid-item">11</div>
            <div class="grid-item">12</div>
            <div class="grid-item">13</div>
            <div class="grid-item">14</div>
            <div class="grid-item">15</div>
            <div class="grid-item">16</div>
            <div class="grid-item">17</div>
            <div class="grid-item">18</div>
            <div class="grid-item">19</div>
            <div class="grid-item">20</div>
            <div class="grid-item">21</div>
            <div class="grid-item">22</div>
            <div class="grid-item">23</div>
            <div class="grid-item">24</div>
            <div class="grid-item">25</div>
          </div>
            `
        }

    }
    else if (parseInt(selection) == 2){
        if(parseInt(tamano) == 3){
            div.innerHTML = `
            <div class="grid-container3">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            </div>
            
            `
        }
        else if(parseInt(tamano) == 4){
            div.innerHTML = `
                <div class="grid-container4">
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>  
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>  
                <div class="grid-item">7</div>
                <div class="grid-item">8</div>
                <div class="grid-item">9</div>
                <div class="grid-item">10</div>
                <div class="grid-item">11</div>
                <div class="grid-item">12</div>
                <div class="grid-item">13</div>
                <div class="grid-item">14</div>
                <div class="grid-item">15</div>
                <div class="grid-item">16</div>
    
                </div>
            
            `
        }
        else{
            div.innerHTML = `
            <div class="grid-container5">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>  
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>  
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            <div class="grid-item">10</div>
            <div class="grid-item">11</div>
            <div class="grid-item">12</div>
            <div class="grid-item">13</div>
            <div class="grid-item">14</div>
            <div class="grid-item">15</div>
            <div class="grid-item">16</div>
            <div class="grid-item">17</div>
            <div class="grid-item">18</div>
            <div class="grid-item">19</div>
            <div class="grid-item">20</div>
            <div class="grid-item">21</div>
            <div class="grid-item">22</div>
            <div class="grid-item">23</div>
            <div class="grid-item">24</div>
            <div class="grid-item">25</div>
            </div>
            `
        }
        
    } 
    else if (parseInt(selection) == 3){
        if(parseInt(tamano) == 3){
            div.innerHTML = `
            <div class="grid-container3">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            </div>
            
            `
        }
        else if(parseInt(tamano) == 4){
            div.innerHTML = `
                <div class="grid-container4">
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>  
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>  
                <div class="grid-item">7</div>
                <div class="grid-item">8</div>
                <div class="grid-item">9</div>
                <div class="grid-item">10</div>
                <div class="grid-item">11</div>
                <div class="grid-item">12</div>
                <div class="grid-item">13</div>
                <div class="grid-item">14</div>
                <div class="grid-item">15</div>
                <div class="grid-item">16</div>
    
                </div>
            
            `
        }
        else{
            div.innerHTML = `
            <div class="grid-container5">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>  
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>  
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            <div class="grid-item">10</div>
            <div class="grid-item">11</div>
            <div class="grid-item">12</div>
            <div class="grid-item">13</div>
            <div class="grid-item">14</div>
            <div class="grid-item">15</div>
            <div class="grid-item">16</div>
            <div class="grid-item">17</div>
            <div class="grid-item">18</div>
            <div class="grid-item">19</div>
            <div class="grid-item">20</div>
            <div class="grid-item">21</div>
            <div class="grid-item">22</div>
            <div class="grid-item">23</div>
            <div class="grid-item">24</div>
            <div class="grid-item">25</div>
            </div>
            `
        }
    }
        
    
    else{

        if(parseInt(tamano) == 3){
            div.innerHTML = `
            <div class="grid-container3">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            </div>
            
            `
        }
        else if(parseInt(tamano) == 4){
            div.innerHTML = `
                <div class="grid-container4">
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>  
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>  
                <div class="grid-item">7</div>
                <div class="grid-item">8</div>
                <div class="grid-item">9</div>
                <div class="grid-item">10</div>
                <div class="grid-item">11</div>
                <div class="grid-item">12</div>
                <div class="grid-item">13</div>
                <div class="grid-item">14</div>
                <div class="grid-item">15</div>
                <div class="grid-item">16</div>
    
                </div>
            
            `
        }
        else{
            div.innerHTML = `
            <div class="grid-container5">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>  
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>  
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            <div class="grid-item">10</div>
            <div class="grid-item">11</div>
            <div class="grid-item">12</div>
            <div class="grid-item">13</div>
            <div class="grid-item">14</div>
            <div class="grid-item">15</div>
            <div class="grid-item">16</div>
            <div class="grid-item">17</div>
            <div class="grid-item">18</div>
            <div class="grid-item">19</div>
            <div class="grid-item">20</div>
            <div class="grid-item">21</div>
            <div class="grid-item">22</div>
            <div class="grid-item">23</div>
            <div class="grid-item">24</div>
            <div class="grid-item">25</div>
            </div>
            `
        }
        
    }
    

    }
