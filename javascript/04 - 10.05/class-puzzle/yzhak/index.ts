export {};

const aviadSpeed = Number(prompt("באיזה מהירות החללית של אביעד? (in km/h):"));

const competitorSpeed = Number(prompt("מהירות החללית של המתחרה? (in km/h):"));

if (aviadSpeed > competitorSpeed) {
  console.log("אביעד ניצחח!");
  alert("ביעד ניצחח!");
} else if (aviadSpeed < competitorSpeed) {
  console.log("אביעד צריך למהר!!!");
  alert("צריך למהררר");
} else {
  console.log("תיקו!");
}
alert("תיקו");
