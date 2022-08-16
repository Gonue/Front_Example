const API_KEY = "885d0f96c9665d5f806f81e3b76836a4";

https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
 const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}`;
 fetch(url);
}
function onGeoError(){
    alert("Can't Find you")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
