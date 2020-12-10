$(document).ready(
    function () {
        //event handlers
        var words = ["continuation", "consciousness", "possibility", "civilization", "gravity", "escape", "regret", "extraterrestrial", "put", "gas", "coincide", "detail", "knowledge", "affect", "delay"];
        var randomWord = words[Math.floor(Math.random() * words.length)];
        var theWord = [];
        var dashes = [];
        var count= 0;
        var winning = 0;

        for(var l = 0; l<randomWord.length; l++){
            theWord.push(randomWord.charAt(l));
        }

        for(var i = 0; i<randomWord.length; i++){
            dashes.push('-');
        }

        for(var k = 0; k<dashes.length; k++){
            $('.container').append(dashes[k]);
        }
        if(count >= 6){
            $('.container').empty();
            dashes = [];
            generateNewWord();
        }

        $('button').click(function () {
            var buttonClick = $(this).attr("value");
            if(!theWord.includes(buttonClick.toLowerCase())){
                count++;
                if(count >= 6){
                    loser();
                }
            }
            for(var j = 0; j < theWord.length; j++){
                if(buttonClick.toUpperCase() == theWord[j].toUpperCase()){
                    theWord.splice(j,1, '');
                    dashes[j] = buttonClick;
                    winning++;
                    checkStatus();
                }
                $('.container').empty();
                for(var z = 0; z<dashes.length; z++){
                    $('.container').append(dashes[z]);
                }

            }


            function checkStatus(){
                    if(winning >= theWord.length) {
                        winner();
                    }
            }

            function loser(){
                $('.loser').toggle();
            }

            function generateNewWord(){
                location.reload();
            }

            function winner(){
                $('.winner').toggle();
            }

            $('.close').click(function () {
                    $('.winner').hide();
                    $('.loser').hide();
                    generateNewWord();
            });
        });



        //other functions
    }
);