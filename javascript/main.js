

const menu = document.querySelector(".backgroundMenu")
const contactModal = document.querySelector(".backgroundContact")



/**
 *
 * Menu integration
 */
let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
    sidenav.classList.add("active");
    menu.classList.toggle("invisible")
}



function closeNav() {
    sidenav.classList.remove("active");
    menu.classList.toggle("invisible")
}
/**
 *
 * Modal Contact integration
 */
contactModal.addEventListener("click",()=>{
    contactModal.classList.add("fullscreen")
})


function initialize() {
    let map = L.map('map').setView([46.26073, 5.6588], 20); // LIGNE 18

    let osmLayer = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', { // LIGNE 20
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    })

    map.addLayer(osmLayer)
}


