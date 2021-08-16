
// color gen 

// const declaration
const css = document.querySelector("h3"); 
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

// function to set 
function colourGenerator() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	// display text for the colour rgb
	css.textContent = body.style.background + ";";
}

// add event listener for both input colours with function call
color1.addEventListener("input", colourGenerator);
color2.addEventListener("input", colourGenerator);

// END OF BACKGROUND GEN 



