export {}

var aviadSpeed = parseFloat(prompt("aviad please enter the speed of your spaceship in km/h:"));
var competitorSpeed = parseFloat(prompt("competitor please enter the speed of your spaceship in km/h:"));

if (aviadSpeed > competitorSpeed){
    alert("aviad wins the race!!");
} else if (aviadSpeed < competitorSpeed){
    alert("aviad needs to speed up");
}else {
    alert("its a tie!");
}

var solarPanelElectricity = parseFloat(prompt("enter the mount of electricity a solar panel generate in a day in kwh:"));

if (solarPanelElectricity % 2 === 0){
  alert("the amount of electricity generate is even ");
} else {
    alert("the amount of electricity is odd");
}