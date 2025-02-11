let rakodoPlatform = document.createElement("div")
rakodoPlatform.setAttribute("id", "rakodoPlatform")
document.body.appendChild(rakodoPlatform)


function kartyaKeszit() {
    let szin = [0, 1, 2, 3];
    let szamok = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let blankKartya = document.createElement("div")
    blankKartya.setAttribute("id", "blankKartya")

    let randomSzam = Math.floor(Math.random() * szamok.length + 1) + 1;
    let randomSzin = Math.floor(Math.random() * szin.length);
    if (randomSzin == 0) {
        blankKartya.style.backgroundColor = "red";
       
    }
    else if (randomSzin == 1) {
        blankKartya.style.backgroundColor = "green";
    }
    else if (randomSzin == 2) {
        blankKartya.style.backgroundColor = "blue";
    }
    else if (randomSzin == 3) {
        blankKartya.style.backgroundColor = "yellow";
    }
    document.body.appendChild(blankKartya);
    blankKartya.innerHTML(randomSzam)
}

