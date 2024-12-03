// Képek tározója - képek objektumokban tárolva (régi és új verzió)
const imageSet = [
    { old: 'orbanMost.jpg', new: 'orbanRegen.jpg' },
    { old: 'regi.jpg', new: 'uj.jpg' },
    { old: 'nap.webp', new: 'moon.jpg' },
    // További képek itt hozzáadhatók
];

let currentIndex = 0; // A kezdőképet jelző index
let imageContainer = document.querySelector('.image-container');

// A képek frissítése
function updateImages() {
    // A konténer tartalmának törlése
    imageContainer.innerHTML = '';

    // A jelenlegi képek beállítása
    const imageBox1 = document.createElement('div');
    imageBox1.setAttribute("id","kep1")
    imageBox1.classList.add('image-box');
    imageBox1.innerHTML = `<img src="${imageSet[currentIndex].old}" alt="Régi kép">`;

    const imageBox2 = document.createElement('div');
    imageBox2.classList.add('image-box');
    imageBox2.innerHTML = `<img src="${imageSet[currentIndex].new}" alt="Új kép">`;

    imageContainer.appendChild(imageBox1);
    imageContainer.appendChild(imageBox2);

    // Animációk alkalmazása: fade-out, majd fade-in
    setTimeout(() => {
        imageBox1.classList.add('fade-out');
        imageBox2.classList.add('fade-out');
    }, 0);

    setTimeout(() => {
        // Képek frissítése az új indexekkel
        currentIndex = (currentIndex + 1) % imageSet.length; // Váltás a képek között

        // Az új képek frissítése
        imageBox1.innerHTML = `<img src="${imageSet[currentIndex].old}" alt="Régi kép">`;
        imageBox2.innerHTML = `<img src="${imageSet[currentIndex].new}" alt="Új kép">`;

        // A képek újra való megjelenítése
        imageBox1.classList.remove('fade-out');
        imageBox2.classList.remove('fade-out');
        imageBox1.classList.add('fade-in');
        imageBox2.classList.add('fade-in');
    }, 1000); // 1 másodperces várakozás után történik a frissítés
}

// A képek cseréje időzítve
//Az elején azért nem jön be semmi mert ott is van animáció 4másodpárc
setInterval(updateImages, 1000); // Képek cseréje minden 4 másodpercben
