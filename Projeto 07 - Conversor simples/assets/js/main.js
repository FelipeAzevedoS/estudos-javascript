const valueKilometers = document.getElementById('inputKilometers');
const buttonConvert = document.getElementById('convert');
const valueMiles = document.getElementById('valueMiles');
const valueMeters = document.getElementById('valueMeters');
const valueCentimeters = document.getElementById('valueCentimeters');

function validateKm() {
    if(valueKilometers.value == '' || isNaN(Number(valueKilometers.value))) {
        valueMiles.innerText = `Type a valid number`;
        valueMeters.innerText = ``;
        valueCentimeters.innerText = ``;
        valueMiles.classList.add('error');
        return false;
    }
    valueMiles.classList.remove('error');
    return true;
};

function calculateValues () {
    let mi = (valueKilometers.value * 0.621371).toFixed(2);
    let m = (valueKilometers.value * 1000).toFixed(2);
    let cm = (valueKilometers.value * 100000).toFixed(2);
    
    valueMiles.innerText = `Value in Miles: ${mi}`;
    valueMeters.innerText = `Value in Meters: ${m}`;
    valueCentimeters.innerText = `Value in Centimeters: ${cm}`;
};

buttonConvert.addEventListener('click', function() {
    if(!validateKm()) return;
    calculateValues();
});