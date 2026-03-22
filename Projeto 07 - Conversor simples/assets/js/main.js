const valueKilometers = document.getElementById('inputKilometers');
const buttonConvert = document.getElementById('convert');
const valueMiles = document.getElementById('valueMiles');
const valueMeters = document.getElementById('valueMeters');
const valueCentimeters = document.getElementById('valueCentimeters');

function calculateValues () {
    let mi = (valueKilometers.value * 0.621371).toFixed(2);
    let m = (valueKilometers.value * 1000).toFixed(2);
    let cm = (valueKilometers.value * 100000).toFixed(2);
    
    valueMiles.innerText = `Value in Miles: ${mi}`;
    valueMeters.innerText = `Value in Meters: ${m}`;
    valueCentimeters.innerText = `Value in Centimeters: ${cm}`;
};

buttonConvert.addEventListener('click', function() {
    calculateValues();
});