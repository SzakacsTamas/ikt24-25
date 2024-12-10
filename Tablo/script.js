const kepBeker = document.getElementById('kepBeker');
const fajlokListaja = document.getElementById('fajlokListaja');
const customBtns = document.getElementById('custom-btn');  // Gomb elem
let kepFajlok = [];
let jelenlegi = 0;
let jelenlegiID = 0;
let idozitesID;

const mukodes = () => {
    fajlokListaja.innerHTML = '';
    if (kepFajlok.length === 0) {
        fajlokListaja.innerHTML = '<p>Nincsenek képfájlok a kiválasztott mappában.</p>';
        return;
    }
    jelenlegiID = 0;
    for (let i = 0; i < 2; i++) {
        const fjl = kepFajlok[(jelenlegi + i) % kepFajlok.length];
        
        const tnr = document.createElement('div');
        tnr.className = 'kp-tnr';
        
        tnr.style.backgroundImage = `url(${URL.createObjectURL(fjl)})`;
        tnr.style.backgroundSize = 'cover';
        tnr.style.backgroundPosition = 'center';
        tnr.id = 'kep-' + (jelenlegiID = 0 + i);

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
        idozitesID = setInterval(mukodes, 3000);
        
        // Elrejtjük a customBtns gombot a képek feltöltése után
        customBtns.style.display = 'none';




    } 
    
    
    else {
        fajlokListaja.innerHTML = '<p>Nincsenek képfájlok a kiválasztott mappában.</p>';
    }
});
