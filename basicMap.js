console.log("JS" File Was loaded");

// 35.2176665 N, 80.831473 -> 35.2176665, -80.831473

let map = L.map("map", {
center: [35.2176665, -80.831473],
zoom:15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
