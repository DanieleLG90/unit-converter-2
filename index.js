
const meterFeet = 3.281
const literGallons = 0.264
const kgPound = 2.204

let inputEl = document.getElementById ("input-el")
const convertBtn = document.getElementById ("convert-btn")
let lengthText = document.getElementById ("length-text")
let volumeText = document.getElementById ("volume-text")
let massText = document.getElementById ("mass-text")




convertBtn.addEventListener ("click", function (){
    conversion (meterFeet, lengthText, "meters", "ft")
    conversion (literGallons, volumeText, "liters", "gallons")
    conversion (kgPound, massText, "kilos", "pounds")
    
})

function conversion (number, text, par1, par2) {
    let firstConv = parseInt(inputEl.value) * number
    let secondConv = parseInt(inputEl.value) / number
    
    text.innerHTML = 
        `${inputEl.value} ${par1} = ${firstConv.toFixed(3)} ${par2} | 
        ${inputEl.value} ${par2} = ${secondConv.toFixed(3)} ${par1} ` 
}