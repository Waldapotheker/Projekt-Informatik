var x = 0;
var y = 0;

$(document).ready(function(){
    takt = window.setInterval(taktung, 300);



    var Spielfeld = document.getElementById('canvas');
    canvas = Spielfeld.getContext('2d');

    var Spielfigur = drawHauptfigur;
    // Kommentar für Franz: Ab hier die Grafik für Spielfigur reinmachen, Code: Spielfigur.src = ...

    Spielfigur.onload = function(){
        canvas.drawSpielfeld(Spielfigur,x,y);
    }

    function taktung(){
        console.log('Hallo');
    }

    $(document).bind('keydown', function (evt){
        console.log('Tastaturcode:' + evt.keyCode);
    });


});








let KEY_SPACE = false;  //32
        let KEY_UP = false;     //38
        let KEY_DOWN = false;   //40
        let KEY_LEFT = false;   //37
        let KEY_RIGHT = false;  //39
    
        document.onkeydown = function(e){
            if (e.keyCode == 32){      //Leertaste gedrückt
                KEY_SPACE = true;
            }
            if (e.keyCode == 38){      //Nach oben gedrückt
                KEY_UP = true;
        }   
            if (e.keyCode == 40){      //Nach unten gedrückt
                KEY_DOWN = true;
        }   
            if (e.keyCode == 37){      //Nach links gedrückt
                KEY_LEFT = true;
        }   
            if (e.keyCode == 39){      //Nach rechts gedrückt
                KEY_RIGHT = true;
        }   
        }



        
        document.onkeyup = function(e){
            if (e.keyCode == 32){      //Leertaste loslassen
                KEY_SPACE = false;
            }
            if (e.keyCode == 38){      //Nach oben loslassen
                KEY_UP = false;
        }
            if (e.keyCode == 40){      //Nach unten loslassen
                KEY_DOWN = false;
        }   
            if (e.keyCode == 37){      //Nach links loslassen
                KEY_LEFT = false;
        }   
            if (e.keyCode == 39){      //Nach rechts loslassen
                KEY_RIGHT = false;
        }   
        
        }







        //lässt js auf canvas zugreifen
        let canvas = document.getElementById ("canvas");
        let ctx = canvas.getContext ("2d");
        
        
        //unterteilt canvas in Zeilen und Spalten
        let rows = 100;
        let cols = 100;
        let cellWidth = canvas.width/cols;
        letcellHeight = canvas.height/rows;

        //Sorgt dafür, das canvas fullscreen ist
        canvas.setAttribute('width', window.innerWidth);
        canvas.setAttribute('height', window.innerHeight);
    
        //"draw" Funktion lässt uns auf canvas zeichnen
        
        drawSpielfeld();
        
        
        function drawSpielfeld(){
            ctx.fillStyle = 'green'                             //Das ist der Hintergrund
            ctx.fillRect(0, 0, canvas.width, canvas.height);

        }

       

        canvas.height = page.innerHeight;
        canvas.width = page.innerWidth;
    
    
    