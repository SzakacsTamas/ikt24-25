const mpptBmnt = document.getElementById('mpptBmnt');
        const fjlLst = document.getElementById('fjlLst');
        let kpFjlk = [];
        let jlnlLg = 0;
        let idztsId;

        const kpKzlt = () => {
            fjlLst.innerHTML = '';
            if (kpFjlk.length === 0) {
                fjlLst.innerHTML = '<p>Nincsenek képfájlok a kiválasztott mappában.</p>';
                return;
            }

            for (let i = 0; i < 2; i++) {
                const fjl = kpFjlk[(jlnlLg + i) % kpFjlk.length];
                
                const tnr = document.createElement('div');
                tnr.className = 'kp-tnr';

                const kp = document.createElement('img');
                kp.src = URL.createObjectURL(fjl);

                tnr.appendChild(kp);
                fjlLst.appendChild(tnr);
            }

            jlnlLg = (jlnlLg + 2) % kpFjlk.length;
        };

        mpptBmnt.addEventListener('change', (esmn) => {
            kpFjlk = [];
            jlnlLg = 0;
            clearInterval(idztsId);

            const fjlk = esmn.target.files;
            const kpKtrjts = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg', '.jfif', '.avif'];

            for (const fjl of fjlk) {
                const ktrjts = fjl.name.substring(fjl.name.lastIndexOf('.')).toLowerCase();
                if (kpKtrjts.includes(ktrjts)) {
                    kpFjlk.push(fjl);
                }
            }

            if (kpFjlk.length > 0) {
                kpKzlt();
                idztsId = setInterval(kpKzlt, 1500);
            } else {
                fjlLst.innerHTML = '<p>Nincsenek képfájlok a kiválasztott mappában.</p>';
            }
        });