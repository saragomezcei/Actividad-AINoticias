const chk_radio_a =document.querySelector('#acepto');
const chk_radio_r =document.querySelector('#rechazo');
const acepto =document.querySelector(".formulario__oculto");
chk_radio_a.addEventListener("click",() => {
    //alert("HOLAAAAA");
    acepto.classList.add("formulario__oculto--visible");
    acepto.classList.remove("formulario__oculto");
} );
chk_radio_r.addEventListener("click",() => {
    //alert("rechazoo");

    acepto.classList.add("formulario__oculto");
    acepto.classList.remove("formulario__oculto--visible");
} );