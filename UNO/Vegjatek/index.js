let linkLogin=document.getElementById("nav-button1");

linkLogin.addEventListener("click", function(){

    let existingForm = document.getElementById("loginFormContainer");

    if (existingForm) {
        existingForm.style.animation = "fadeOut 0.3s ease-out forwards";

        // Várunk az animáció végéig, majd töröljük az elemet
        setTimeout(() => {
            existingForm.remove();
        }, 300); // Az animáció időtartamával megegyező (0.5s = 500ms)
    }
    else
    {
        let keret=document.createElement("div")
    keret.id="loginFormContainer"
    let form=document.createElement("form")
    let felhNev=document.createElement("input")
    let jelszo=document.createElement("input")
    let labelForName=document.createElement("p")
    let labelForPassword=document.createElement("p")
    labelForName.innerHTML="Felhszanálónév"
    labelForPassword.innerHTML="Jelszó"
    labelForName.className="formLabels"
    labelForPassword.className="formLabels"
    felhNev.className="formGomb"
    jelszo.className="formGomb"
    felhNev.setAttribute("type","text")
    jelszo.setAttribute("type","password")
    let loginSubmit=document.createElement("input")
    loginSubmit.id="loginsubmit"
    loginSubmit.setAttribute("type","submit")
    form.appendChild(labelForName)
    form.appendChild(felhNev)
    form.appendChild(labelForPassword)
    form.appendChild(jelszo)
    form.appendChild(loginSubmit)
    keret.appendChild(form)
    document.body.append(keret)
    }
    
})

document.addEventListener("DOMContentLoaded", function() {
    let overlay = document.createElement("div");
    overlay.className = "fade-in-overlay";
    document.body.appendChild(overlay);
});
