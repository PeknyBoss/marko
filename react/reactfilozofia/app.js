const btn = document.createElement('button');
btn.onclick=function()
{
    alert("Et egy nativ kod")
}

btn.innerHTML = "nativ gomb"

document.getElementById("nativ-button-container").appendChild(btn);
