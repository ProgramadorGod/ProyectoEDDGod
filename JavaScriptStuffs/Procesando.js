// alert("XD")
window.addEventListener("resize",(e) => {
    var a = document.getElementById("Cuadrados").clientWidth
    console.log(a)


    var el = document.getElementsByClassName('cubo-xxx')
    for(var x=0;x<el.length;x++){
        el[x].style.display="flex";
        el[x].style="align-items = center;";
        if(a>133){
            var a = document.getElementById("Cuadrados").clientWidth/9
            el[x].style.margin=`10px 20px 50px`;
            el[x].style.width=`${a}px`;
        }
        if (a < 133){
            var a = document.getElementById("Cuadrados").clientWidth/1.3

            el[x].style.margin=`10px 60px 50px`;
            el[x].style.width=`${a}px`  

            // el[x].setAttribute("style", "float:unset;");          
        }
        if (a<500){
            el[x].style.margin=`10px 20px 50px`;
        }


    }
    

});



window.addEventListener("load",(e) => {
    var a = document.getElementById("Cuadrados").clientWidth
    console.log(a)

    var el = document.getElementsByClassName('cubo-xxx')
    for(var x=0;x<el.length;x++) {
        el[x].style.display="flex";
        el[x].style="align-items = center;";
        
        if (a>133){
            var a = document.getElementById("Cuadrados").clientWidth/9
            el[x].style.margin=`10px 20px 50px`;
            el[x].style.width=`${a}px`
        }
        if (a < 133){
            var a = document.getElementById("Cuadrados").clientWidth/1.3

            el[x].style.margin=`10px 60px 50px`;
            el[x].style.width=`${a}px`  


            // el[x].setAttribute("style", "float:unset;");          
        }
        if (a<500){
            el[x].style.margin=`10px 20px 50px`;
        }
        // if (a>220){

        //     el[x].style.width=`${a}px`

        // }
    }
});