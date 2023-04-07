var criaController = function (jogo) {

    var $entrada = $('.entrada');
    var $lacunas = $('.lacunas');

    var exibeLacunas = function () {
        $lacunas.empty();
        jogo.getLacunas().forEach(function(lacuna){
            $('<li>')
            .addClass ('lacuna')
            .text(lacuna)
            .appendTo($lacunas);
        });
    }
    var mudaPlaceHolder = function (texto) {
        $entrada.attr('placeHolder', texto);
    };

    var guardaPalavraSecreta = function () {

        try {
        jogo.setPalavraSecreta($entrada.val().trim())
        $entrada.val('');
        mudaPlaceHolder('Digite uma letra e tente acertar a palavra...');
        exibeLacunas();
        }catch(err){
            alert(err.message);
        }
        
    };

    var reinicia = function() {
        jogo.reinicia();
            $lacunas.empty();
            mudaPlaceHolder('Digite a palavra secreta...');
    };
    var leChute = function () {

        try{
            jogo.processaChute($entrada.val().trim().substr(0, 1));
        $entrada.val ('');
        exibeLacunas();

                if (jogo.ganhouOuPerdeu()) {

                    setTimeout(function(){

                    
                    if (jogo.ganhou()){
                        alert('Parabéns, você ganhou!');
                    } else if (jogo.perdeu()) { 
                        alert('Você perdeu, tente novamente!');
                    }
                    reinicia();
                }, 400);
            }
        } catch(err) {
            alert(err.message);
        }
    };

    var inicia = function () {

        $entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                    guardaPalavraSecreta();
                    break;
                    case 2:
                    leChute();
                    break;
                }
            }
        });
    };

    return { inicia: inicia};
};