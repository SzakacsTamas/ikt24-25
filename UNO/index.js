var slider = document.getElementById("jatekosokSzama");
var ertek=slider.value

var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function jatekosMenu()
{
    let jatekosMenuMainDiv=document.createElement("div")
    jatekosMenuMainDiv.setAttribute("id","jatekosMenuMainDiv")
    for (let i = 0; i < jatekosokSzama.value; i++) {
      //Eltuntetések
      const szabalyDiv = document.getElementById("szabaly1");
      szabalyDiv.style.display = "none";
      const gombDiv = document.getElementById("done");
      gombDiv.style.display = "none";

      
        let jatekosMenuDiv=document.createElement("div")
        jatekosMenuDiv.setAttribute("id","jatekosMenuDiv") 
        let szovegDoboz = document.createElement("input")
        szovegDoboz.setAttribute("id", "szovegDoboz")
        szovegDoboz.setAttribute("placeholder","Játékosnév")
        jatekosMenuDiv.appendChild(szovegDoboz)
        jatekosMenuMainDiv.appendChild(jatekosMenuDiv)
        
        document.body.append(jatekosMenuMainDiv)
        
        
    
      }



}


