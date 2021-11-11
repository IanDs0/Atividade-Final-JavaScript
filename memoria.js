(function(){

    var frente_carta = [];

    for(var i=0; i<10;i++){
        
        var imagem = {
        
            src: "./imagem/"+i+".jpg",
            vinculo: i%8
        
        };

        frente_carta.push(imagem);
    }

    console.log(frente_carta)

    inicio_jogo();

    function inicio_jogo(){
        
        var Frente = document.getElementsByClassName("fente");

        for(var i=0; i<10;i++) {
            
            var carta = document.querySelector("#carrta" + i);

            carta.style.left = i % 5 === 0 ? 55 + "px" : i % 5 * 355 + 50 +"px"
            carta.style.top = i < 5 ? 100 +"px" : 500 + "px";

            carta.addEventListener("click",vira,false);

            Frente[i].style.background = "url('"+ frente_carta[i].src + "')";
            Frente[i].setAttribute("id",frente_carta[i].id)

            /*
            
                if (i % 8 ===0){

                    carta.style.left = 5 + "px";
                    
                }else if(i % 8 !== 0 ){

                    carta.style.left = i * 300 + 5 + "px";

                }

                if (i < 8){

                    carta.style.top = 5 + "px";

                }else if(i >=8){

                    carta.style.top = 300 + "px";
                }

            */

        }
    }

    function vira(){

        var lado = this.getElementsByClassName("face");

        lado[0].classList.toggle("viran");
        lado[1].classList.toggle("viran");

    }

}());