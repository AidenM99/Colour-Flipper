var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


document.querySelector(".btn").addEventListener("click", function(){

  var hexColour = "#";

  for(i=1; i<=6; i++){

  hexColour += hex[getRandomNumber()];

  };

  document.querySelector("body").style.backgroundColor = hexColour;
  document.querySelector("h2").textContent = "Background Colour: " + hexColour;

});

function getRandomNumber(){

return Math.floor(Math.random()*hex.length);

};
