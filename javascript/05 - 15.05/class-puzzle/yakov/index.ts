export {};
//3 ways to loop:
for (let i = 1; i <= 23; i++) {
  console.log(`${"happy birthday aviad your"} ${[i]} ${"yers old"}`);
}

// ---------------------------------------------------------------------
// The Gardener's Plant Watering Schedule (use 'for')
// Background: Daniel Michael Peretz works in gardening and needs to keep track of when to water the plants. Each plant needs to be watered every 2 days.
// Exercise: Use a do while loop to create a schedule that tells Daniel which day he needs to water the plants over a 10 day period.

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0)
    console.log(`${"daniel passed"} ${[i]} ${"days please water the plants"}`);
}
