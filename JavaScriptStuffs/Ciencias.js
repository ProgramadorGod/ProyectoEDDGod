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

function reemplazarA(semestre){
    // CorteA.style.background-color:;
    // alert("XD")
    CorteA.style.background = "#3a3e5c";
    CorteB.style.background = "#c3c7d373";
    CorteC.style.background = "#c3c7d373";
    
    Semestre_1.style.background = "#051058bb";
    // alert("xd")
    var lista = ["Word 1","Excel 1","PowerPoint 1","Video A"]
    var MostrarLista = document.getElementById("Archivos")
    MostrarLista.innerHTML=""
    for(var x=0;x<lista.length;x++){
        
        MostrarLista.innerHTML = MostrarLista.innerHTML + `<li>${lista[x]}</li>`;
        // MostrarLista[0].style.margin = "10px";
    }

}


CorteB.addEventListener("click",reemplazarB,false)

function reemplazarB(){
    CorteA.style.background = "#c3c7d373";
    CorteB.style.background = "#3a3e5c";
    CorteC.style.background = "#c3c7d373";
    var lista = ["Pdf","Imagen","Word4","Bloc De Notas", "Video B", "PythonVersión4.5"]
    var MostrarLista = document.getElementById("Archivos")
    MostrarLista.innerHTML=""

    for(var x=0;x<lista.length;x++){
        MostrarLista.innerHTML = MostrarLista.innerHTML + `<li>${lista[x]}</li>`;
    }
}

CorteC.addEventListener("click",reemplazarC,false)

function reemplazarC(){
    CorteA.style.background = "#c3c7d373";
    CorteC.style.background = "#3a3e5c";
    CorteB.style.background = "#c3c7d373";
    var lista = ["Word","Excel","Word","Imagen", "Pdf"]
    var MostrarLista = document.getElementById("Archivos")
    MostrarLista.innerHTML=""

    for(var x=0;x<lista.length;x++){
        MostrarLista.innerHTML = MostrarLista.innerHTML + `<li>${lista[x]}</li>`;
    }
}




// var presionado = addEventListener("click",clicando,false)

// function clicando(){
//     $("span").hide().fadeIn(1000);

// }


