const kepBeker = document.getElementById('kepBeker');
const fajlokListaja = document.getElementById('fajlokListaja');
const customBtns = document.getElementById('custom-btn');  // Gomb elem
let kepFajlok = [];
let jelenlegi = 0;
let jelenlegiID = 0;
let idozitesID;

const mukodes = () => {
    fajlokListaja.innerHTML = '';  // Kiürítjük a tartalmat, mielőtt újra hozzáadnánk

    if (kepFajlok.length === 0) {
        fajlokListaja.innerHTML = '<p>Nincsenek képfájlok a kiválasztott mappában.</p>';
        return;
    }

    jelenlegiID = 0;

    // Csak egyszer adjuk hozzá a fájlnevet az első képhez
    let fileNameAdded = false;

    // Eltávolítjuk az előző fájlnevet, ha van
    const existingFileName = document.getElementById('emberNeve');
    if (existingFileName) {
        existingFileName.remove();
    }

    for (let i = 0; i < 2; i++) {
        const fjl = kepFajlok[(jelenlegi + i) % kepFajlok.length];
        
        const tnr = document.createElement('div');
        tnr.className = 'kp-tnr';
        
        tnr.style.backgroundImage = `url(${URL.createObjectURL(fjl)})`;
        tnr.style.backgroundSize = 'cover';
        tnr.style.backgroundPosition = 'center';
        tnr.id = 'kep-' + (jelenlegiID = 0 + i);

        // Csak az első képhez adjuk hozzá a fájlnevet
        if (!fileNameAdded) {
            const emberNeve = document.createElement('p');
            emberNeve.textContent = fjl.name;  // Kép fájlneve
            emberNeve.setAttribute("id", "emberNeve");
            document.body.appendChild(emberNeve);  // Fájlnevet hozzáadjuk a body-hoz
            fileNameAdded = true;  // Megjegyezzük, hogy a fájlnevet már hozzáadtuk
        }

        fajlokListaja.appendChild(tnr);
    }

    jelenlegi = (jelenlegi + 2) % kepFajlok.length;
};

kepBeker.addEventListener('change', (esmn) => {
    kepFajlok = [];
    jelenlegi = 0;
    clearInterval(idozitesID);

    const fjlk = esmn.target.files;
    const kpKtrjts = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg', '.jfif', '.avif'];

    for (const fjl of fjlk) {
        const ktrjts = fjl.name.substring(fjl.name.lastIndexOf('.')).toLowerCase();
        if (kpKtrjts.includes(ktrjts)) {
            kepFajlok.push(fjl);
        }
    }

    if (kepFajlok.length > 0) {
        mukodes();
        idozitesID = setInterval(mukodes, 8000);
        
        // Elrejtjük a customBtns gombot a képek feltöltése után
        customBtns.style.display = 'none';
    } else {
        fajlokListaja.innerHTML = '<p>Nincsenek képfájlok a kiválasztott mappában.</p>';
    }
});
