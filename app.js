var colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

document.querySelector(".btn").addEventListener("click", function(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomColour = colors[randomNumber];

  document.querySelector("body").style.backgroundColor = randomColour;
  document.querySelector("h2").textContent = "Background Colour: " + randomColour;

});
