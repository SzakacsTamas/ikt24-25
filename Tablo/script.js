const kepBeker = document.getElementById('kepBeker');
const fajlokListaja = document.getElementById('fajlokListaja');
let kepFajlok = [];
let jelenlegi = 0;
let jelenlegiID=0
let idozitesID;

const mukodes = () => {
    fajlokListaja.innerHTML = '';
    if (kepFajlok.length === 0) {
        fajlokListaja.innerHTML = '<p>Nincsenek képfájlok a kiválasztott mappában.</p>';
        return;
    }
    jelenlegiID=0
    for (let i = 0; i < 2; i++) {
        const fjl = kepFajlok[(jelenlegi + i) % kepFajlok.length];
        
        const tnr = document.createElement('div');
        tnr.className = 'kp-tnr';

  

        const kp = document.createElement('img');
        kp.src = URL.createObjectURL(fjl);
        kp.id = 'kep-' + (jelenlegiID=0 + i);

        tnr.appendChild(kp);
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
        idztsId = setInterval(mukodes, 3000);
    } else {
        fajlokListaja.innerHTML = '<p>Nincsenek képfájlok a kiválasztott mappában.</p>';
    }
});