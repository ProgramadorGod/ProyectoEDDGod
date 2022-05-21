var el = document.getElementsByClassName('Semestres')
for(var x=0;x<el.length;x++){
    el[x].style.margin=`20px 10px`
}

var a = 1

var presionado = addEventListener("click",clicando,false)

function clicando(){
    $("span").hide().fadeIn(1000);

}