var randomnumber1 = Math.random();
randomnumber1 = randomnumber1 * 6+1;
randomnumber1 = Math.floor(randomnumber1);
var randomdiceimage = "images/dice" + randomnumber1 +".png";//this will be a string from dice1.png-dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomdiceimage);


var randomnumber2 = Math.random();
randomnumber2 = randomnumber2 * 6+1;
randomnumber2 = Math.floor(randomnumber2);
var randomdiceimage2 = "images/dice" + randomnumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomdiceimage2);

if (randomnumber1 < randomnumber2)
{
    document.querySelector("h1").textContent="Player 2 wins   🚩";
}
else if (randomnumber1 > randomnumber2)
{
    document.querySelector("h1").textContent = "🚩     Player 1 wins";
}
else
{
    document.querySelector("h1").textContent = "🚩DRAW🚩";
}