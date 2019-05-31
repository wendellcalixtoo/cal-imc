console.log("Olá javascript!");


function calcular(){
    let hpeso = document.getElementById("pesoo")
    let peso = hpeso.value;

    console.log(peso);

    let haltura = document.getElementById("alturaa");
    let altura = haltura.value;

    console.log(altura);

    imc1 = peso / (altura*altura)
    imc = imc1.toFixed(2)

    resultimc.textContent = imc;

    console.log(imc)

}
