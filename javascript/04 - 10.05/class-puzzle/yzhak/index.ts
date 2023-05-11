export {};

const aviadSpeed = Number(prompt("באיזה מהירות החללית של אביעד? (in km/h):"));

const competitorSpeed = Number(prompt("מהירות החללית של המתחרה? (in km/h):"));

if (aviadSpeed > competitorSpeed) {
  console.log("אביעד ניצחח!");
  alert("ביעד ניצחח!");
} else if (aviadSpeed < competitorSpeed) {
  console.log("אביעד צריך למהר!!!");
  alert("צריך למהררר");
} else aviadSpeed === competitorSpeed;
{
  console.log("תיקו!");
}
alert("תיקו");
////

const electricityGenerated = Number(
  prompt("כמות החשמל שיוצר הפנאל הסולארי ביום (in kWh):")
);

if (electricityGenerated % 2 === 0) {
  console.log("כמות החשמל המופקת שווה.");
} else {
  console.log("כמות החשמל המופקת לא תקינה.");
}
