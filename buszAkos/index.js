function kezdes() {
  document.body.innerHTML = '<form action="" method="get" id="menu"></form>';
  document.getElementById("menu").innerHTML = '<div id="jatekosok">';
  document.getElementById("menu").innerHTML += '<div id="hardMode">';
  document.getElementById("jatekosok").innerHTML +=
    "<label>Hányan szeretnétek játszani?</label>" +
    "<br />" +
    '<input type="number" id="jatekosSzam" max="10" min="2" />';
  document.getElementById("hardMode").innerHTML +=
    "<label>Esetleg hardmode báttttya?</label>" +
    "<br />" +
    '<input type="checkbox" id="hard" />';
  document.body.innerHTML +=
    '<button id="rajt" onclick="utolsoEsely()">Kész</button>';
}

function utolsoEsely() {
  let jatekosokSzama = document.getElementById("jatekosSzam").value;
  if (jatekosokSzama >= 2 && jatekosokSzama <= 10) {
    document.body.innerHTML =
      '<button id="vegsoGomb" onclick="alapPalya()"></button>';
  } else {
    alert(
      "A játékosok száma minimum 2 maximum 10 lehet, kérlek ennek megfelelően add meg az értéket!"
    );
  }
}

function alapPalya() {
  document.body.innerHTML =
    '<img src="aranyCard.png" id=pakliKep>' +
    '<button id="inditas" onclick="elsoJatekResz()">Play</button>' +
    '<div id="italTarto"></div>' +
    '<div id="jatekosMenu"></div>' +
    '<div id="kerdesekDiv"></div>';
  document.getElementById("jatekosMenu").innerHTML +=
    '<div id="jatekosMenuHeader"></div>';
  document.getElementById("jatekosMenuHeader").innerHTML +=
    '<div id="jatekosMenuNev">Játékos</div>' +
    '<div id="italokSzama">x0</div>' +
    '<img src="pia.png" id="piaKep">';
  document.getElementById("kerdesekDiv").innerHTML +=
    '<div id="kerdesekDivHeader">x Menet</div>';
}

function elsoJatekResz() {
  let szin = "";
  document.getElementById("kerdesekDivHeader").innerHTML = "1 Menet";
  let menu = document.getElementById("kerdesekDiv");
  let pirosGomb = document.createElement("button");
  pirosGomb.setAttribute("id", "pirosGomb");
  pirosGomb.addEventListener("click", function () {
    szin = "piros";
  });
  pirosGomb.textContent = "A kártya piros lesz";
  let feketeGomb = document.createElement("button");
  feketeGomb.setAttribute("id", "feketeGomb");
  feketeGomb.addEventListener("click", function () {
    szin = "fekete";
  });
  feketeGomb.textContent = "A kártya fekete lesz";
  menu.appendChild(feketeGomb);
  menu.appendChild(pirosGomb);
}
