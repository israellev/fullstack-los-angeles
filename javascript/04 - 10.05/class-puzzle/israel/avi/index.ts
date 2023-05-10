const velosity1 = parseInt(prompt("Enter your spaceships velosity"));
const velosity2 = parseInt(prompt("Enter computer spaceships velosity"));
if (velosity1 > velosity2)
{
    alert("Avied is the winner")
}
else if (velosity2 > velosity1)
{
    alert("Avied need to speed up")
}
else if (velosity1 === velosity2)
{
    alert("The race is tie")
}