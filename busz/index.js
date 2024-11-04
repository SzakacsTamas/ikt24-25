
let piaSzamlaloSzam = 0;
let piaSzamlalo = document.createElement("div");
piaSzamlalo.innerHTML = "x0"
piaSzamlalo.setAttribute("id", "piaSzamlalo");
//PIA SZÁMÁLÓT AKAROK HOZZÁADNI

let eddigPia = document.createElement("eddigPia");
eddigPia.setAttribute("id", "eddigPia");

let kerdes = document.createElement("kerdes");
kerdes.setAttribute("id", "kerdes");

function piaHozzadas() {
  let piaSzamlalo2 = document.createElement("div");
  piaSzamlalo2.setAttribute("id", "piaSzamlalo2");
  piaSzamlalo2.innerText = piaSzamlalo2.value;
  for (let i = 0; i < 1; i++) {
    let piaKep = document.createElement("img");
    piaKep.setAttribute("src", "pia.png"); // A kép forrása
    piaKep.setAttribute("id", "kepPia");
    // Kép hozzáadása a div-hez


    eddigPia.appendChild(piaKep);
    piaSzamlaloSzam++;
    piaSzamlalo.innerHTML = "x" + piaSzamlaloSzam;
    
  }
}

function kartyaKeszit() {
  let szin = [0, 1];
let szamok = [2, 3, 4, 5, 6, 7, 8, 9, 10];


let randomSzam = Math.floor(Math.random() * szamok.length + 1) + 1;
  let randomSzin = Math.floor(Math.random() * szin.length);
  
  //SZIMBOLUM
  let szimbolum = document.createElement("img");
  szimbolum.setAttribute("id", "szimbolum");
  //FO KARTYA
  let kartyaDiv = document.createElement("div");
  kartyaDiv.setAttribute("id", "kartyaDiv");
  //FELSO SZAM
  let szamDiv = document.createElement("div");
  szamDiv.setAttribute("id", "szamDiv");
  szamDiv.innerText = randomSzam;
  //ALSO SZAM
  let szamDiv2 = document.createElement("div");
  szamDiv2.setAttribute("id", "szamDiv2");
  szamDiv2.innerText = randomSzam;
  //A DOM ELEMENKE VAN CSAK STYLE MODOSITASA EGY SZÁMNAK NINCS EZÉRT VAN ITT
  //FELSO SZAM, EBBE VAN BENN A SZIMBOLUM IS
  //HA PIROS
  if (randomSzin == 0) {
    szamDiv.style.color = "red";
    let randomSzimbolum = Math.floor(Math.random() * szin.length);
    console.log(randomSzimbolum);
    if (randomSzimbolum == "0") {
      szimbolum.setAttribute("src", "kor.png");
    }
    if (randomSzimbolum == "1") {
      szimbolum.setAttribute("src", "karo.png");
    }
  }
  //HA FEKETE
  else {
    szamDiv.style.color = "black";
    let randomSzimbolum = Math.floor(Math.random() * szin.length) + 2;
    if (randomSzimbolum == "2") {
      szimbolum.setAttribute("src", "treff.png");
    }
    if (randomSzimbolum == "3") {
      szimbolum.setAttribute("src", "pikk.png");
    }
  }
  //FELSO SZAM Alahuzasok
  if (szamDiv.innerHTML == "6" || szamDiv.innerHTML == "9") {
    szamDiv.style.textDecoration = "underline";
  } else {
    szamDiv.style.textDecoration = "none";
  }

  //ALSO SZAM
  //HA PIROS
  if (randomSzin == 0) {
    szamDiv2.style.color = "red";
  }
  //HA FEKETE
  else {
    szamDiv2.style.color = "black";
  }
  //ALSO SZAM Alahuzasok
  if (szamDiv2.innerHTML == "6" || szamDiv2.innerHTML == "9") {
    szamDiv2.style.textDecoration = "underline";
  } else {
    szamDiv2.style.textDecoration = "none";
  }

  kartyaDiv.appendChild(szamDiv);
  kartyaDiv.appendChild(szamDiv2);
  kartyaDiv.appendChild(szimbolum);
  document.body.appendChild(kartyaDiv);
}

function inditas0() {
  let jatekosokSzama = document.getElementById("jatekosokSzama");
  if (jatekosokSzama.value < 16 && jatekosokSzama.value > 1) {
    let gomb = document.createElement("button");
    gomb.setAttribute("id", "kezdo");
    gomb.addEventListener("click", function () {
      document.body.removeChild(document.getElementById("kezdo"));
      
      
      

      let kep = document.createElement("img");
      kep.setAttribute("src", "aranyKartya.png");
      kep.setAttribute("id", "kartyaKep");

      let diszDiv =document.createElement("div")
      diszDiv.setAttribute("id","diszDiv")
      diszDiv.appendChild(kep);

      document.body.appendChild(diszDiv);
      let tovabbGomb = document.createElement("button");
      tovabbGomb.setAttribute("id", "mehetunkTovabb");
      tovabbGomb.textContent = "Play";
      document.body.appendChild(tovabbGomb);
      tovabbGomb.addEventListener("click", function () {
        let kerdesDiv=document.createElement("div")
        kerdesDiv.setAttribute("id","kerdesDiv")
        kerdesDiv.textContent="Milyen szín?"
        let gomb1=document.createElement("button")
        let gomb2=document.createElement("button")
        gomb1.setAttribute("class","kerdesek")
        gomb2.setAttribute("class","kerdesek")
        kerdesDiv.appendChild(gomb1)
        kerdesDiv.appendChild(gomb2)
        document.body.appendChild(kerdesDiv)


      });

      let jatekosMenu = document.createElement("div");
      jatekosMenu.setAttribute("id", "jatekosMenu");
      jatekosMenu.textContent = "Játékos";
      jatekosMenu.appendChild(piaSzamlalo);



      let diszPiaKep = document.createElement("img");
      diszPiaKep.setAttribute("src", "pia.png"); // A kép forrása
      diszPiaKep.setAttribute("id", "diszPiaKep");
      jatekosMenu.appendChild(diszPiaKep)
      document.body.appendChild(jatekosMenu);
      document.body.appendChild(kerdes)
      document.body.appendChild(eddigPia);
      
    });

    
    document.body.appendChild(gomb);
    document.body.removeChild(done);
    document.body.removeChild(menu);
  }

  class Jatekosmenu {
    constructor(jatekos, kartya, pia) {
      this.jatekos = jatekos;
      this.kartya = [];
      this.pia = [];
    }
  }
}