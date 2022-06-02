
var semesters = [... new Array(10).keys()]
var element = document.getElementById('Content')
const TITLES = [
    'Primer semestre',
    'Segundo semestre',
    'Tercer semestre',
    'Cuarto semestre',
    'Quinto semestre',
    'Sexto semestre',
    'Septimo semestre',
    'Octavo semestre',
    'Noveno semestre',
    'Decimo semestre',
    'Undecimo semestre',
]
var context = {
    semester:'',
    court:''
}


const DATA = [
    {
        '1':[],
        '2':[],
        '3':[]
    }
]


var CorteA = document.getElementById("Corte1")
var CorteB = document.getElementById("Corte2")
var CorteC = document.getElementById("Corte3")

CorteA.addEventListener("click",reemplazarA,false)
CorteB.addEventListener("click",reemplazarB,false)
CorteC.addEventListener("click",reemplazarC,false)


semesters.map((x,k) => {
    if(k === semesters.length ){ return }
    element.innerHTML += 
    `<div><h2 class="Semestres" semester="${k}">
    ${TITLES[k]}
    </h2> </div>`




})


var elementList =  document.getElementsByClassName('Semestres')
for(var el=0; el<elementList.length;el++) {
    elementList[el].addEventListener('click', e => {
        context.semester = e.target.attributes.semester.value

        console.log(context)
        for (var x=0;x<elementList.length;x++){
            elementList[x].classList.remove("rojo")
            for(var y=0;y<elementList.length;y++){
                if (elementList[y] == elementList[x]){
                    e.target.classList.add("rojo")
            }
            // if 
            if (context.court ==""){
                context.court = "corte 1"
                CorteA.classList.add("cortepresionado")
            }

        }      
        }
      })
}



function reemplazarA(){
    if (context.semester==""){
        context.semester="0"
        elementList[0].classList.add("rojo")
    }

context.court = 'corte 1'
CorteA.classList.add("cortepresionado")
CorteB.classList.remove("cortepresionado")
CorteC.classList.remove("cortepresionado")

console.log(context)

    
}
function reemplazarB(){
    if (context.semester==""){
        context.semester="0"
        elementList[0].classList.add("rojo")
    }
    context.court = 'corte 2'
CorteA.classList.remove("cortepresionado")
CorteB.classList.add("cortepresionado")
CorteC.classList.remove("cortepresionado")
console.log(context)

}

function reemplazarC(){
    if (context.semester==""){
        context.semester="0"
        elementList[0].classList.add("rojo")
    }
    context.court = 'corte 3'
    CorteA.classList.remove("cortepresionado")
    CorteC.classList.add("cortepresionado")
    CorteB.classList.remove("cortepresionado")
    console.log(context)

    }

var LongitudDiv = document.getElementById("Carrusel").clientWidth/13;
var Constante =LongitudDiv

var ListaCarrusel = ["Trabajo Social ","Ingeniería Informática ", "Licenciatura En Artes "
    ,"Administración De Negocios Internacionales" ,"Ingeniería En Química", "Especialización En Gerencia De Proyectos"
]   



var CarrerasVisibles = document.getElementById("Carrusel")
var ListaCarrerasMostradas = []
var Izquierda = 0
var Derecha = 2
var variableayudante = 0
var Primeravez  = 1
// lista.shift()
function Organizar(){
    var LongitudDiv = document.getElementById("Carrusel").clientWidth/12;
    var Constante =LongitudDiv
    ListaCarrusel.map((X,K)=>{
        // if (Izquierda>Derecha){
        //     variableayudante = Izquierda
        //     Izquierda = Derecha
        //     Derecha = variableayudante
        // }

        // console.log(X,K)
        if (K >=Izquierda && K<=Derecha){
            console.log("K: ", K)
            ListaCarrerasMostradas.push(K)
            // ListaCarrerasMostradas.splice

            CarrerasVisibles.innerHTML+=`<div class =CarrerasCarrusel style="left:${LongitudDiv}px">${X}</div>`
            LongitudDiv += Constante
            
        }

        
        
    })
    var VariableCarreras = document.getElementsByClassName("CarrerasCarrusel")
    var ObjetoIzquierda = VariableCarreras[0]       
    ObjetoIzquierda.classList.add("izquierda")
    var ObjetoDerecha = VariableCarreras[2]       
    ObjetoDerecha.classList.add("Derecha")
    var ObjetoCentral = VariableCarreras[1]       
    ObjetoCentral.classList.add("Centro")

    Organizar2()

    
}




Primeravez = true


function Organizar2(){
var VariableCarreras = document.getElementsByClassName("CarrerasCarrusel")
// console.log(VariableCarreras)
for (var x=0;x<VariableCarreras.length;x++){

    // addEventListener("")
    VariableCarreras[x].addEventListener("click", e =>{
        var VariableCarreras = document.getElementsByClassName("CarrerasCarrusel")
        var indicefinal = ListaCarrusel.length
        indicefinal -= 1
        var ultimoobjeto = ListaCarrusel[indicefinal]

        if (e.target == VariableCarreras[0]){
            ListaCarrusel.unshift(ultimoobjeto)
            ListaCarrusel.pop()
            var ObjetoDerecha = VariableCarreras[0]       
            // VariableCarreras[0].classList.add("izquierda")
            ObjetoDerecha.classList.add("izquierda")
            console.log(ObjetoDerecha)
            // console.log(CarrerasVisibles.childElementCount(2))
            VariableCarreras[1].classList.remove("izquierda")
            VariableCarreras[2].classList.remove("izquierda")
            console.log("MIRAMEEEE: ", VariableCarreras)


            }
        if (e.target == VariableCarreras[1]){
            ListaMaterias = ["matemáticas","fisica"]
            var MateriasCarreras = document.getElementById("MateriasCarrera")
            if (MateriasCarreras == `<h4 class =invisible>a</h4>`){
                return
            }
            console.log(MateriasCarreras)
            // MateriasCarreras.innerHTML = `<h4 class =invisible>a</h4>`

            ListaMaterias.map((X,K)=>{
                console.log("X: ", X , "K :", K)
                MateriasCarreras.innerHTML+=`<h4 class ="MateriaInterna Aparecer">${X}</h4>`
            })
            var Cuerpo = document.getElementById("BodySection")
            if (Primeravez == true){
                Cuerpo.addEventListener("click",BodiClic,true)
                Primeravez = false
            }

            
            function BodiClic(){
                MateriasCarreras.innerHTML = `<h4 class =invisible>a</h4>`
                console.log("bodypresionado y materias son: ", MateriasCarreras)
            }




            // for(var i =0 ; i<ListaMaterias.length ;i++){
                
            // }
            


        }
        if (e.target == VariableCarreras[2]){

            ListaCarrusel.push(ListaCarrusel[0])
            ListaCarrusel.shift()

            VariableCarreras[2].classList.add("Derecha")
            console.log(VariableCarreras[2])
        }
        CarrerasVisibles.innerHTML=""
        ListaCarrerasMostradas=[]
        Organizar()
        })


    }
}

Organizar()







var el = document.getElementsByClassName('Semestres')
for(var x=0;x<el.length;x++){
    el[x].style.margin=`20px 10px`
}


