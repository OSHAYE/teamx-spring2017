var audio = new Audio("HarderBetterFasterStronger.mp3");
$("#play").click(function(){  
    audio.play();
    });
$("#pause").click(function(){
    audio.pause();
    });
$(document).ready(function(e) {
    $("#animate").animate({
    top: 800
  }, 1000 );
});