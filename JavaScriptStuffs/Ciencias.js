var el = document.getElementsByClassName('Semestres')

for(var x=0;x<el.length;x++){
    el[x].style.margin=`20px 10px`
}

// var Zemestres = document.getElementsByClassName("Semestres");
// for(var x=0;x<Zemestres.length;x++){
//     el[Zemestres]
// }

var Semestre_1 = document.getElementById("First");
Semestre_1.addEventListener("click",reemplazarA,false);
semestre = Semestre_1

var a = document.getElementById("#1")

var b = document.getElementById("#2")

var c = document.getElementById("#3")

var CorteA = document.getElementById("Corte1")
var CorteB = document.getElementById("Corte2")
var CorteC = document.getElementById("Corte3")

// alert("XD")
// var xdd = document.getElementById("Bloques-xxx").clientHeight
// alert(a)



// var cortesT = [CorteA, CorteB, CorteC]
// xdd.addEventListener("resize",Ampliar,false);
// function Ampliar(){
//     var xdd = document.getElementById("Corte1").clientWidth
//     alert(a)
// }


CorteA.addEventListener("click",reemplazarA,false)

function reemplazarA(semestre){
    // CorteA.style.background-color:;
    // alert("XD")
    CorteA.style.background = "#3a3e5c";
    CorteB.style.background = "#c3c7d373";
    CorteC.style.background = "#c3c7d373";
    
    a.textContent="Documento 1";
    b.textContent="Documento 2";
    c.textContent="Documento 3";
    // alert("xd")

    Semestre_1.style.background = "#051058bb";
    // alert("xd")

}


CorteB.addEventListener("click",reemplazarB,false)

function reemplazarB(){
    CorteA.style.background = "#c3c7d373";
    CorteB.style.background = "#3a3e5c";
    CorteC.style.background = "#c3c7d373";
    a.textContent="PowerPoint 4"
    b.textContent="Word 5"
    c.textContent="Excel 6"
}

CorteC.addEventListener("click",reemplazarC,false)

function reemplazarC(){
    CorteA.style.background = "#c3c7d373";
    CorteC.style.background = "#3a3e5c";
    CorteB.style.background = "#c3c7d373";
    a.textContent="Jijijija"
    b.textContent="Jijijija2"
    c.textContent="Jijijija3"
}

// var presionado = addEventListener("click",clicando,false)

// function clicando(){
//     $("span").hide().fadeIn(1000);

// }


