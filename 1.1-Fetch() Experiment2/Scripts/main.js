
console.log('About to fetch a rainbow');
            
CatchRainbow()
    .then(response =>
    {
        console.log('yay');
    })
    .catch(error => 
    {
        console.log('error');
        console.error(error);
    });

CatchSky();

window.onload = function(){ MyMove(); };

var id = null;
function MyMove() {
    
    var elem = document.getElementById('rainbow3');
    elem.style.position = "absolute";
    var pos  = 0;
    
    clearInterval(id);
    id = setInterval(frame, 10);
    
    function frame() 
    {
        if (pos == 350) 
        {
            clearInterval(id);
        } 
        else 
        {
            pos++;
            elem.style.top  = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}


async function CatchRainbow()
{
    const response  = await fetch('Images/rainbow.png');
    const blob      = await response.blob();

    document.getElementById('rainbow1').src = URL.createObjectURL(blob);
    document.getElementById('rainbow2').src = URL.createObjectURL(blob);
    document.getElementById('rainbow3').src = URL.createObjectURL(blob);
}

async function CatchSky()
{
    const response = await fetch('Images/Sky.jpg')
    const blob     = await response.blob();

    document.body.style.backgroundImage = "url(" + URL.createObjectURL(blob) + ")";
}