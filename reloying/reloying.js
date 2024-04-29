let tiempo = 10
let contador = 0
let contando = false

var suspender_sonido = new Audio('sonido Start Boxing.ogg');
var clic1 = new Audio('sonido click 002.ogg')
var clic2 = new Audio('sonido click 004.ogg')
suspender()

function temporizar() {
    let t = tiempo - contador
    contando = t > 0
    if (contador % 2 == 0) {
        select_id("frente").innerHTML = t
        clic1.play()
    } else {
        select_id("atras").innerHTML = t
        clic2.play()
    }
    style("moneda").transform = `rotateY(${180 * contador}deg)`
    if (contando) {
        contador++
        setTimeout(() => {
            temporizar()
        }, 1000);
    }else{
        suspender()
        suspender_sonido.play()
    }
}

function suspender() {
    contador = 0
    select_id("frente").innerHTML =`
  <i class="fas fa-stopwatch"></i>
  <span style="font-size:20%;opacity:0.5">Empezar</span>
`
    select_id("atras").innerHTML = `
  <i class="fas fa-stopwatch"></i>
  <span style="font-size:20%;opacity:0.5">Empezar</span>
`
}

async function tomarTiempo() {
    const {value: tiempo_input} = await swal.fire({
        title:"Temporizador",
        input: "number",
        inputValue:10,
        showCancelButton:true
    })
    if(!tiempo_input){
        return
    }
    tiempo = tiempo_input
    contador = 0
    if(!contando){
        temporizar()
    }
}

function style(id) {
    return select_id(id).style
}

function select_id(id) {
    return document.getElementById(id)
}
