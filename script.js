console.log("Loading Server DataTransfer...");

window.alert("Bem-Vindo ao Lamp Game. \nPara jogar pressione 'OK'");

var acesa = false;
var quebrada = false;

function acenderLampada() {
    document.getElementById("image").src = "img/lampada-acesa.jpg";
}

function quebrarLampada() {
        if (quebrada==false){
            quebrada=true;
    
    document.getElementById("image").src = "img/lampada-quebrada.jpg";
        }
}

function apagarLampada(){
    document.getElementById("image").src ="img/lampada-apagada.jpg";
}

function interruptor(){
    if(quebrada==true) {
        return;
    }
    if (acesa==false){
        acenderLampada();
    }
    else{
        apagarLampada();
    }
    acesa = !acesa;
}
