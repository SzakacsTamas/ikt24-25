



let rakodoPlatform = document.createElement("div")
rakodoPlatform.setAttribute("id", "rakodoPlatform")

document.body.appendChild(rakodoPlatform)

var slider = document.getElementById("jatekosokSzama");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function jatekosMenu()
{
    for (let i = 0; i < jatekosokSzama.value; i++) {


        let jatekosMenuDiv=document.createElement("div")
        jatekosMenuDiv.setAttribute("id","jatekosMenuDiv") 
        let szovegDoboz = document.createElement("input")
        szovegDoboz.setAttribute("id", "szovegDoboz")
        szovegDoboz.setAttribute("placeholder","Játékosnév")
    
        jatekosMenuDiv.appendChild(szovegDoboz)
        document.body.append(jatekosMenuDiv)
    
      }



}


