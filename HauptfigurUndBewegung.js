drawHauptfigur();

function drawHauptfigur(){
    ctx.fillStyle = 'white'
    ctx.fillRect (600, 500, 50, 50);
}

var x = 0;
var y = 0;

function domReady(){
    takt = window.setInterval(taktung, 300);
   
    

    var Spielfeld = document.getElementById('canvas');
    canvas = Spielfeld.getContext('2d');

    var Spielfigur = drawHauptfigur;
    // Kommentar für Franz: Ab hier die Grafik für Spielfigur reinmachen, Code: Spielfigur.src = ...

    Spielfigur.onload = function(){
        canvas.drawSpielfeld(Spielfigur,x,y);
    }

  
   
    $(document).bind()


}