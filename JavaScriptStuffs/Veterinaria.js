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

var lista1 = ["Word 1","Excel 1","PowerPoint 1","Video A"]
var lista2 = ["Pdf Parcial","Imagen","Word 4","Bloc De Notas", "Video B", "PythonVersión 4.5"]
var lista3 = ["Word","Excel","Word","Imagen", "Pdf"]

var Semestre1 = [lista1, lista2, lista3];

var lista4 = ["a", "b", "c"]
var lista5 = ["Ejemplo","Ejemplo", "Ejemplo","Ejemplo"]
var lista6 = ["Ejemplo","Ejemplo","Ejemplo","Ejemplo","Ejemplo"]
var Semestre2 = [lista4, lista5, lista6];

var lista7 = ["Ejemplo", "Ejemplo","Ejemplo","Ejemplo","Ejemplo","Ejemplo"]
var lista8 = ["Ejemplo", "Ejemplo","Ejemplo"]
var lista9 = ["Ejemplo"]
var Semestre3 = [lista7, lista8, lista9];
var Semestre4 = [lista1, lista2, lista3];
var Semestre5 = [lista1, lista2, lista3];
var Semestre6 = [lista1, lista2, lista3];
var Semestre7 = [lista1, lista2, lista3];
var Semestre8 = [lista1, lista2, lista3];
var Semestre9 = [lista1, lista2, lista3];
 



function reemplazarA(semestre){
    // CorteA.style.background-color:;
    // alert("XD")
    CorteA.style.background = "#3a3e5c";
    CorteB.style.background = "#c3c7d373";
    CorteC.style.background = "#c3c7d373";
    
    Semestre_1.style.background = "#051058bb";
    // alert("xd")
    var MostrarLista = document.getElementById("Archivos")
    MostrarLista.innerHTML=""
    for(var x=0;x<Semestre1[0].length;x++){
        
        MostrarLista.innerHTML = MostrarLista.innerHTML + `<li>${Semestre1[0][x]}</li>`;
        // MostrarLista[0].style.margin = "10px";
    }

}


CorteB.addEventListener("click",reemplazarB,false)

function reemplazarB(){
    CorteA.style.background = "#c3c7d373";
    CorteB.style.background = "#3a3e5c";
    CorteC.style.background = "#c3c7d373";
    var MostrarLista = document.getElementById("Archivos")
    MostrarLista.innerHTML=""

    for(var x=0;x<Semestre1[1].length;x++){
        MostrarLista.innerHTML = MostrarLista.innerHTML + `<li>${Semestre1[1][x]}</li>`;
    }
}

CorteC.addEventListener("click",reemplazarC,false)

function reemplazarC(){
    CorteA.style.background = "#c3c7d373";
    CorteC.style.background = "#3a3e5c";
    CorteB.style.background = "#c3c7d373";
    var MostrarLista = document.getElementById("Archivos")
    MostrarLista.innerHTML=""

    for(var x=0;x<Semestre1[2].length;x++){
        MostrarLista.innerHTML = MostrarLista.innerHTML + `<li>${Semestre1[2][x]}</li>`;
    }
}




// var presionado = addEventListener("click",clicando,false)

// function clicando(){
//     $("span").hide().fadeIn(1000);

// }


