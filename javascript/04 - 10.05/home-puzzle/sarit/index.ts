export {}
let totalEnergy = 0;

for (let i = 6; i <= 18; i++) { // Loop from 6AM to 6PM
  const energyProduced = Math.floor(Math.random() * 10) + 1; // Generate a random amount of energy between 1 and 10 kW
  totalEnergy += energyProduced; // Add the energy produced this hour to the total energy produced for the day
  console.log(`At ${i}:00, the solar panel produced ${energyProduced} kW of energy.`); // Print out the energy produced this hour
}

console.log(`Total energy produced for the day: ${totalEnergy} kW.`); // Print out the total energy produced for the day