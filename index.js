var menuOpen = false;


function Dropdown()
{
    var openMenu = document.getElementById("open-menu");
    var menu = document.getElementById("menu");

    if(!menuOpen)
    {
        openMenu.style.transform = `translate(-50%, -50%) rotate(45deg)`;
        openMenu.style.borderTop = "transparent";
        openMenu.style.borderLeft = "transparent";

        menu.style.visibility = "visible";
        menuOpen = true;
    }
    else
    {
        openMenu.style.transform = `translate(-50%, -50%) rotate(135deg)`;
        openMenu.style.borderTop = "transparent";
        openMenu.style.borderLeft = "transparent";

        menu.style.visibility = "hidden";
        menuOpen = false;
    }
}

function OptionClicked(id)
{
    var obj = document.getElementById(id);

    var bulletOptions = document.getElementById("bullet-options");
    var blitzOptions = document.getElementById("blitz-options");
    var rapidOptions = document.getElementById("rapid-options");

    for(let i = 0; i < 3; i++)
    {
        document.getElementById(bulletOptions.children[i].id).style.borderColor = "black";
        document.getElementById(blitzOptions.children[i].id).style.borderColor = "black";
        document.getElementById(rapidOptions.children[i].id).style.borderColor = "black";
    }

    obj.style.borderColor = "green";    
    document.querySelector("#dropdown-text").innerHTML = id.replace(/-/g, " ").replace("|", " | ");
}