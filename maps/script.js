var mymap = L.map('mapid').setView([-8.0632, -34.8711], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoianZzbjE5IiwiYSI6ImNqanlnZ2ZleDAwbXIzd2xzOXdwb3pqeWoifQ.QIEWDvnKar46fdCIEJSvMg'
}).addTo(mymap);

L.marker([-8.0632, -34.8711]).addTo(mymap).bindPopup("Welcome to Marco Zero").openPopup();

d3.csv("user_lat_long.csv", function(){
    console.log(data[0]);
});