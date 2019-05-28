const dnaContainer = document.querySelector(".dna-container");
const nucleotides = ["A", "C", "G", "T"];
const opacitys = [0, 0, 0, 0, 0, 0.2, 0.2, 0.3, 0.5, 0.7, 1];
const boxSize = 11;

function init() {
	const numNucleotides = 659;

	dnaContainer.innerHTML = "";

	// https://github.com/josephg/noisejs
	noise.seed(Math.random());

	let i = 0;
	while (i <= numNucleotides) {
		addNucleotide(i, dnaContainer);
		i++;
	}
}

function addNucleotide(index, parent) {
	noise.seed(Math.random());

	const value = noise.simplex2(index / 100, index / 100);
	const newNucleotide = document.createElement("div");

	const opacity = Math.abs(Math.floor(value * 10, 0)) / 10;

	newNucleotide.classList.add("nucleotide");
	newNucleotide.setAttribute("data-index", index);
	//newNucleotide.style.cssText = `opacity:${randomArrayItem(opacitys)};`;
	//newNucleotide.style.cssText = `opacity:${value};`;
	newNucleotide.classList.add(opacityClass(opacity));
	newNucleotide.innerHTML = randomArrayItem(nucleotides);
	parent.appendChild(newNucleotide);
}

function randomArrayItem(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function opacityClass(opacity) {
	let opacityClass = "opac-whole";

	switch (opacity) {
		case 0:
			opacityClass = "opac-zero";
			break;
		case 0.1:
			opacityClass = "opac-one";
			break;
		case 0.2:
			opacityClass = "opac-two";
			break;
		case 0.3:
			opacityClass = "opac-three";
			break;
		case 0.4:
			opacityClass = "opac-four";
			break;
		case 0.5:
			opacityClass = "opac-five";
			break;
		case 0.6:
			opacityClass = "opac-six";
			break;
		case 0.7:
			opacityClass = "opac-seven";
			break;
		case 0.8:
			opacityClass = "opac-eight";
			break;
		case 0.9:
			opacityClass = "opac-nine";
			break;
	}

	return opacityClass;
}

window.addEventListener("resize", init);

init();
