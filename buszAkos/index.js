var szimbolumok = ["Rombusz", "Pick", "Treff", "Szív"];
var ertekek = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function pakliKeszit()
{
	let pakli = new Array();

	for(let i = 0; i < szimbolumok.length; i++)
	{
		for(let x = 0; x < ertekek.length; x++)
		{
			let card = {Ertek: ertekek[x], Szimbolum: szimbolumok[i]};
			pakli.push(card);
		}
	}

	return pakli;
}

function keveres(pakli)
{
	for (let i = 0; i < 1000; i++)
	{
		let hely1 = Math.floor((Math.random() * pakli.length));
		let hely2 = Math.floor((Math.random() * pakli.length));
		let tmp = pakli[hely1];

		pakli[hely1] = pakli[hely2];
		pakli[hely2] = tmp;
	}
  return pakli;
}
function lapokRajz(pakli)
{

		let kartya = document.createElement("div");
		let ertek = document.createElement("div");
		let szimbol = document.createElement("div");
		kartya.className = "kartya";
		ertek.className = "ertek";
		szimbol.className = "szimbolum" + pakli[0].Szimbolum;
		ertek.innerHTML = pakli[0].Ertek;
    kartya.appendChild(ertek)
    kartya.appendChild(szimbol)
    document.body.appendChild(kartya)
}
let pakli = pakliKeszit()
pakli = keveres(pakli)









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
    '<div id="kerdesekDivHeader">Szünet</div>';
}

function elsoJatekResz() {
  let szin = "";
  document.getElementById("kerdesekDivHeader").innerHTML = "1 Menet";
  let menu = document.getElementById("kerdesekDiv");
  let pirosGomb = document.createElement("button");
  pirosGomb.setAttribute("id", "pirosGomb");
  pirosGomb.addEventListener("click", function () {
    szin = "piros";
    document.getElementById("pakliKep").addEventListener("click",lapokRajz(pakli))
    pakli.pop()
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
