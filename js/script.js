let cartaDeTruco = "12";
let ingreso = false;
alert ("bienvenido a mi truco de magia")
for (let i = 5; i >= 0; i-- ){
    let intento = prompt("adivina la carta tienes" +" " + (i + 1) + " "+ "intentos.")
    if (intento ==cartaDeTruco){
    alert ("Muy bien pensado me ganaste esta vez");
    break;
ingreso=true;
}

else{
    alert("Esa no era mi carta te dejare" +" " + i +" " + "intentos mas")

}
if(i==0){
    alert("mejor suerte la proxima")
}

}

