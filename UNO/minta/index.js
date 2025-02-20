
let gomb = document.getElementById("hozzaAd")
let keret = document.getElementById("keret")

gomb.addEventListener("click", function () {
    hozzaAdas=document.getElementById("hozzaAd")
    hozzaAd.remove()
    let szovegDoboz = document.createElement("input")
    szovegDoboz.setAttribute("id", "szovegDoboz")
    szovegDoboz.setAttribute("placeholder","Játékosnév")
    
    

    let deleteGomb = document.createElement("button")
    deleteGomb.setAttribute("id", "deleteGomb")
    deleteGomb.textContent="-"

    let kicsiKeret =document.createElement("div")
    kicsiKeret.setAttribute("id","kicsiKeret")
    kicsiKeret.appendChild(szovegDoboz)
    kicsiKeret.appendChild(deleteGomb)
    deleteGomb.addEventListener("click", function () {
        kicsiKeret.remove()
    })
    keret.appendChild(kicsiKeret)
    szovegDoboz.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            if(szovegDoboz.value==""){
                alert("Nem lehet üres!")
            }
            else{
                let szovegLabel = document.createElement("label")
                szovegLabel.setAttribute("id","szovegLabel")
            szovegLabel.textContent = szovegDoboz.value
            szovegLabel.addEventListener("dblclick",function(){
                kicsiKeret.replaceChild(szovegDoboz,szovegLabel)    
            })
            kicsiKeret.replaceChild(szovegLabel,szovegDoboz)
            }
            
        }
    
    })


})
