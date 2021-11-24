(function(){

    var viradas = [];

    var frente_carta = [];

    var acerto = 0;

    var estadoGameover = document.querySelector("#Gameover");

    var imgacertoCarta = document.querySelector("#imgacertoCarta");

    var imgerroCarta = document.querySelector("#imgerroCarta");

    for(var i=0; i<10;i++){
        
        var imagem = {
        
            src: "./imagem/"+i+".jpg",
            vinculo: i%5
        
        };

        frente_carta.push(imagem);
    }

    inicio_jogo();

    function inicio_jogo(){

        viradas = [];

        frente_carta = Aleatorio(frente_carta);
        
        var Frente = document.getElementsByClassName("fente");

        for(var i=0; i<10;i++) {
            
            var carta = document.querySelector("#carrta" + i);

            carta.style.left = i % 5 === 0 ? 55 + "px" : i % 5 * 355 + 50 +"px"
            carta.style.top = i < 5 ? 100 +"px" : 500 + "px";

            carta.addEventListener("click",vira,false);

            Frente[i].style.background = "url('"+ frente_carta[i].src + "')";
            Frente[i].setAttribute("id",frente_carta[i].vinculo);
            console.log(Frente[i].id);

            estadoGameover.style.zIndex = -2;
            estadoGameover.removeEventListener("click",inicio_jogo,false);

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

    function Aleatorio(SemEmbaralhar){
        var aux = [];

        while (aux.length !== SemEmbaralhar.length) {

            var i = Math.floor(Math.random() *SemEmbaralhar.length);

            if (aux.indexOf(SemEmbaralhar[i]) < 0) {
                aux.push(SemEmbaralhar[i]);
            }
        }

        return aux;

    }

    function vira(){

        if (viradas.length < 2) {
            
            var lado = this.getElementsByClassName("face");

            if (lado[0].classList.contains("viran") === true) {
                return;
            }

            lado[0].classList.toggle("viran");
            lado[1].classList.toggle("viran");

            viradas.push(this);

            if (viradas.length === 2 && viradas[0].childNodes[3].id === viradas[1].childNodes[3].id) {

                viradas[0].childNodes[1].classList.toggle("acerto");
                viradas[0].childNodes[3].classList.toggle("acerto");

                viradas[1].childNodes[1].classList.toggle("acerto");
                viradas[1].childNodes[3].classList.toggle("acerto");

                viradas = [];

                acerto += 1;
                console.log(acerto);

                if (acerto === 5) {
                    GameOver();
                }else{
                    acertoCarta();
                }
                
            }

        }else{
            erroCarta();

            viradas[0].childNodes[1].classList.toggle("viran");
            viradas[0].childNodes[3].classList.toggle("viran");

            viradas[1].childNodes[1].classList.toggle("viran");
            viradas[1].childNodes[3].classList.toggle("viran");

            viradas = [];
            
        }

    }

    function GameOver() {

        estadoGameover.style.zIndex = 2;
        estadoGameover.addEventListener("click",inicio_jogo,false);
        setTimeout(function(){
            location.reload();
        },3000)

    }

    function acertoCarta(){
        imgacertoCarta.style.zIndex = 1;
        imgacertoCarta.style.top = 100 + "px";
        imgacertoCarta.style.opacity = 1;

        setTimeout(function(){
            
            imgacertoCarta.style.zIndex = -1;
            imgacertoCarta.style.top = 150 + "px";
            imgacertoCarta.style.opacity = 0;

        },2000)

    }

    function erroCarta(){
        imgerroCarta.style.zIndex = 1;
        imgerroCarta.style.top = 100 + "px";
        imgerroCarta.style.opacity = 1;

        setTimeout(function(){
            
            imgerroCarta.style.zIndex = -1;
            imgerroCarta.style.top = 150 + "px";
            imgerroCarta.style.opacity = 0;

        },2000)
    }

}());