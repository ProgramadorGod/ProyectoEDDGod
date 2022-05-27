
var semesters = [... new Array(10).keys()]
var element = document.getElementById('Content')
const TITLES = [
    'Primer semestre',
    'Segundo semestre',
    'Tercero semestre',
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

var CarrerasVisibles = document.getElementById("Carrusel")
var LongitudDiv = document.getElementById("Carrusel").clientWidth/11;
var Constante =LongitudDiv
var Izquierda = 1
var Derecha = 3
var ListaCarrerasMostradas=[]
var ListaCarrusel = ["Ingeniería Informática ","Trabajo Social ", "Licenciatura En Artes "
    ,"Administración De Negocios Internacionales" ,"Ingeniería En Química", "Especialización En Gerencia De Proyectos"
 ].map((X,K) => {
     
     if (K>=`${Izquierda}`&&K<=`${Derecha}`) { 
        CarrerasVisibles.innerHTML += `<div class ="CarrerasCarrusel" style="left:${LongitudDiv}px"> ${X} </div>`;
        ListaCarrerasMostradas.push(K);
        
        LongitudDiv+=Constante;
    }
    

 })




var VariableCarreras = document.getElementsByClassName("CarrerasCarrusel")
console.log(VariableCarreras)
for (var x=0;x<VariableCarreras.length;x++){
    VariableCarreras[x].addEventListener("click", e =>{
        if (e.target == VariableCarreras[0]){
        //    alert("izquierda")
           if (Izquierda == 0){
               Izquierda = ListaCarrusel.length
           }
           Izquierda -= 1
           if(Derecha == 0){
            Derecha =  ListaCarrusel.length
        }
        }
        if (e.target == VariableCarreras[1]){
            // alert("centro")
            // callback(hola)
        }
        if (e.target == VariableCarreras[2]){
            // alert("derecha")
            if(Derecha == ListaCarrusel.length){
                Derecha =  0
            }
            if(Izquierda == ListaCarrusel.length){
                Izquierda =  0
            }
            Izquierda += 1
            Derecha += 1
            // callback(hola)
        
        }




        
        ListaCarrerasMostradas = []
        function hola(callback){
            var ListaCarrusel = ["Ingeniería Informática ","Trabajo Social ", "Licenciatura En Artes "
            ,"Administración De Negocios Internacionales" ,"Ingeniería En Química", "Especialización En Gerencia De Proyectos"
            ].map((X,K) => {
             
             if (K>=`${Izquierda}`&&K<=`${Derecha}`) { 
                CarrerasVisibles.innerHTML += `<div class ="CarrerasCarrusel" style="left:${LongitudDiv}px"> ${X} </div>`;
                ListaCarrerasMostradas.push(K);
                
                LongitudDiv+=Constante;
            }
            
         })
         callback(hola)
        }
       
    
    
    })

}







var el = document.getElementsByClassName('Semestres')

for(var x=0;x<el.length;x++){
    el[x].style.margin=`20px 10px`
}


