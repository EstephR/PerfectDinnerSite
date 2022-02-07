//Definition der Hosts//
//Main Headline//
var hostsEl = document.getElementById("mainheadline");
var host1 = "Sonja"; //Verknüpfung mit Backend
var host2 = "Tobi"; //Verknüpfung mit Backend

window.addEventListener("load", defineHosts);


function defineHosts() {
    var hostTxtHeader = host1 + " & " + host2;
    hostsEl.textContent = hostTxtHeader;
}

defineHosts();


//Gastgeber//
var host1El = document.querySelector(".host-name1");
var host2El = document.querySelector(".host-name2");

function defineHostsGastgeber() {
    host1El.textContent = host1;
    host2El.textContent = host2;
}

defineHostsGastgeber();


//Menü - abgreifen
var precourseEl = document.querySelector("#pre-course");
var maincourseEl = document.querySelector("#main-course");
var desertEl = document.querySelector("#desert");

var precourse = "Tomatencremesuppe"; //Verknüpfung mit Backend
var maincourse = "Ausgelöstes Backhendl auf Erdäpfelsalat mit Croutons"; //Verknüpfung mit Backend
var desert = "Mouse au Chocolat mit Schlagobers und Beeren"; //Verknüpfung mit Backend

function addmenu() {
    precourseEl.textContent = precourse;
    maincourseEl.textContent = maincourse;
    desertEl.textContent = desert;
}

addmenu();


//Formularbewertung//

//Infotext nach Abschicken ausgeben//
var ratingMsgEl = document.querySelector(".rating-message");
var nachname = document.getElementById("nachname");
var vorname = document.getElementById("vorname");
var form = document.getElementById("form");
var ratingTxt = "";

function ratingMessage() {
    if (nachname.value === "" || nachname.value == null) {
        ratingTxt = "Bitte Namen eingeben!";
        ratingMsgEl.textContent = ratingTxt;
    }
    if (vorname.value === "" || vorname.value == null) {
        ratingTxt = "Bitte Namen eingeben!";
        ratingMsgEl.textContent = ratingTxt;
    }

    form.addEventListener("submit", (e) => {
        if (vorname.value !== "" && nachname.value !== "") {
            ratingTxt = "Danke für deine Bewertung!";
            ratingMsgEl.textContent = ratingTxt;
            // e.preventDefault();
        }
    })
}