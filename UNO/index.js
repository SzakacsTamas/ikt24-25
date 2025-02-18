let rakodoPlatform = document.createElement("div")
rakodoPlatform.setAttribute("id", "rakodoPlatform")

document.body.appendChild(rakodoPlatform)

var slider = document.getElementById("jatekosokSzama");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}



function kartyaKeszit() {
    let szin = [0, 1, 2, 3];
    let szamok = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let blankKartya = document.createElement("div")
    let kartyaHatter = document.createElement("div")
    kartyaHatter.setAttribute("id", "kartyaHatter")
    blankKartya.setAttribute("id", "blankKartya")

    let randomSzam = Math.floor(Math.random() * szamok.length);
    let randomSzin = Math.floor(Math.random() * szin.length);
    if (randomSzin == 0) {
        blankKartya.style.backgroundColor = "#A52A2A";
       
    }
    else if (randomSzin == 1) {
        blankKartya.style.backgroundColor = "#228B22";
    }
    else if (randomSzin == 2) {
        blankKartya.style.backgroundColor = "#0047AB";
    }
    else if (randomSzin == 3) {
        blankKartya.style.backgroundColor = "#FDDA0D";
    }
    kartyaHatter.appendChild(blankKartya)
    blankKartya.innerHTML = randomSzam;
    document.body.appendChild(blankKartya);
   
}

