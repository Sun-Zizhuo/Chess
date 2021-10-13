var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var chessboardArr = [
    ["rd", "nd", "bd", "kd", "qd", "bd", "nd", "rd"],
    ["pd", "pd", "pd", "pd", "pd", "pd", "pd", "pd"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["pl", "pl", "pl", "pl", "pl", "pl", "pl", "pl"],
    ["rl", "nl", "bl", "kl", "ql", "bl", "nl", "rl"]
]

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener("mousedown", function(event){
    mouse.x = event.x;
    mouse.y = event.y;

    console.log(mouse);
})

// Makes checkerboard pattern for chessboard
for(let i = 1; i <= 8; i++)
{
    for(let j = 1; j <= 8; j++)
    {
        if(i % 2 == 0)
        {
            if(j % 2 != 0)
            {
                c.fillStyle = "white"
            }
            else
            {
                c.fillStyle = "green"
            }
        }
        else
        {
            if(j % 2 == 0)
            {
                c.fillStyle = "white"
            }
            else
            {
                c.fillStyle = "green"
            }
        }
        
        c.fillRect(j * 100, i * 100, 100, 100);
    }   
}

// Loads the timer
c.fillStyle = "gray";
// RoundRect(950, 120, 1150, 180, 10, 128, 128, 128, 0.2);
// RoundRect(950, 820, 1150, 880, 10, 128, 128, 128, 0.2);

function RoundRect(x0, y0, x1, y1, radius, r, g, b, a)
{
    var w = x1 - x0;
    var h = y1 - y0;
    if (radius > w/2) radius = w/2;
    if (radius > h/2) radius = h/2;
    
    c.beginPath();
    c.moveTo(x1 - radius, y0);
    c.quadraticCurveTo(x1, y0, x1, y0 + radius);
    c.lineTo(x1, y1-radius);
    c.quadraticCurveTo(x1, y1, x1 - radius, y1);
    c.lineTo(x0 + radius, y1);
    c.quadraticCurveTo(x0, y1, x0, y1 - radius);
    c.lineTo(x0, y0 + radius);
    c.quadraticCurveTo(x0, y0, x0 + radius, y0);
    c.closePath();

    c.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
    c.fill();
}

function LoadPieces()
{
    // Black pieces
    var black_king = new Image();
    black_king.src = "/sprites/black_king.png";
    black_king.onload = function(){
        c.drawImage(this, 400, 100);
    }

    var black_queen = new Image();
    black_queen.src = "/sprites/black_queen.png";
    black_queen.onload = function(){
        c.drawImage(this, 500, 100);
    }

    var black_rook = new Image();
    black_rook.src = "/sprites/black_rook.png";
    black_rook.onload = function(){
        c.drawImage(this, 100, 100);
        c.drawImage(this, 800, 100);
    }

    var black_bishop = new Image();
    black_bishop.src = "/sprites/black_bishop.png";
    black_bishop.onload = function(){
        c.drawImage(this, 300, 100);
        c.drawImage(this, 600, 100);
    }

    var black_pawn = new Image();
    black_pawn.src = "/sprites/black_pawn.png";
    black_pawn.onload = function(){
        for(let i = 1; i <= 8; i++)
        {
            c.drawImage(this, i * 100, 200)
        }   
    }

    var black_knight = new Image();
    black_knight.src = "/sprites/black_knight.png";
    black_knight.onload = function(){
        c.drawImage(this, 200, 100);
        c.drawImage(this, 700, 100);
    }

    // White pieces
    var white_king = new Image();
    white_king.src = "/sprites/white_king.png";
    white_king.onload = function(){
        c.drawImage(this, 400, 800);
    }

    var white_queen = new Image();
    white_queen.src = "/sprites/white_queen.png";
    white_queen.onload = function(){
        c.drawImage(this, 500, 800);
    }

    var white_rook = new Image();
    white_rook.src = "/sprites/white_rook.png";
    white_rook.onload = function(){
        c.drawImage(this, 100, 800);
        c.drawImage(this, 800, 800);
    }

    var white_bishop = new Image();
    white_bishop.src = "/sprites/white_bishop.png";
    white_bishop.onload = function(){
        c.drawImage(this, 300, 800);
        c.drawImage(this, 600, 800);
    }

    var white_knight = new Image();
    white_knight.src = "/sprites/white_knight.png";
    white_knight.onload = function(){
        c.drawImage(this, 200, 800);
        c.drawImage(this, 700, 800);
    }

    var white_pawn = new Image();
    white_pawn.src = "/sprites/white_pawn.png";
    white_pawn.onload = function(){
        for(let i = 1; i <= 8; i++)
        {
            c.drawImage(this, i * 100, 700)
        }   
    }
}

LoadPieces();