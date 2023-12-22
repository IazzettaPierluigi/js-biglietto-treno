//input per l'età
let etaUser = prompt("Please enter your age:");

//input per i km da fare
let quantiKm = prompt("Please enter the distance you will travel in kilometers:");

//calcolo costo del biglietto base
let costoBigl = quantiKm * 0.21 ;

//calcolo percentuale da sottrarre Under18
let under18 = costoBigl * 0.20;

//calcolo percentuale da sottrarre a Over65
let over65 = costoBigl * 0.40;

if (etaUser < 18){
    document.writeln(costoBigl -= under18)
} else if (etaUser > 65) {
    document.writeln(costoBigl -= over65)
} else {
    document.writeln(costoBigl)
}

// document.writeln(costoBigl)