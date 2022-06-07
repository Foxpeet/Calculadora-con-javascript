function selected(){ //para dar el valor de la opcion del select que este recogida
    let selected1 = document.getElementById("operacion")
    let opcion1 = selected1.options[selected1.selectedIndex].value
    return (opcion1)
}
function operar(){
    let condicion = selected()
    if(condicion == "sumar"){
        sumar()
        console.log("He sumado")
    } else if (condicion == "restar") {
        restar()
        console.log("He restado")
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

function vaciar(){
    document.getElementById("resultado").textContent = "-"
}