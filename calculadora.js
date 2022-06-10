function selected(){ //para dar el valor de la opcion del select que este recogida
    let opcion1
    let seleccion = document.getElementsByName("operacion")
    for(let i=0; i<seleccion.length ; i++){
        if(seleccion[i].checked){
            opcion1 = seleccion[i].value;
        }
    }
    // console.log(opcion1)
    return (opcion1)
}
function operar(){
    let condicion = selected()
    if(condicion == "sumar"){
        sumar()
        // console.log("He sumado")
    } else if (condicion == "restar") {
        restar()
        // console.log("He restado")
    } else if (condicion == "multiplicar") {
        multiplicar()
        // console.log("He multiplicado")
    } else if (condicion == "dividir") {
        dividir()
        // console.log("He dividido")
    }
}
function sumar(){
    var num1 = document.getElementById("numero1").value
    var num2 = document.getElementById("numero2").value
    document.getElementById("resultado").textContent = Number(num1)+Number(num2)
    return
}

function restar() {
    var num1 = document.getElementById("numero1").value
    var num2 = document.getElementById("numero2").value
    document.getElementById("resultado").textContent = Math.abs(Number(num1) - Number(num2))
    return
}

function multiplicar(){
    var num1 = document.getElementById("numero1").value
    var num2 = document.getElementById("numero2").value
    document.getElementById("resultado").textContent = (Number(num1) * Number(num2))
    return
}

function dividir(){
    var num1 = document.getElementById("numero1").value
    var num2 = document.getElementById("numero2").value
    document.getElementById("resultado").textContent = (Number(num1) / Number(num2))
    return
}

function vaciar(){
    document.getElementById("resultado").textContent = "-"
}