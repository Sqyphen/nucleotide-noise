const dnaContainer = document.querySelector(".dna-container");
const nucleotides = ["A", "C", "G", "T"];
const opacitys = [0, 0, 0, 0, 0, 0.2, 0.2, 0.3, 0.5, 0.7, 1];
const boxSize = 11;

function init() {
	const winWidth = window.innerWidth;
	const winHeight = window.innerHeight;
	const columns = winWidth / boxSize;
	const rows = winHeight / boxSize;
	const numNucleotides = columns * rows;

	dnaContainer.innerHTML = "";

	let i = 0;
	while (i <= numNucleotides) {
		addNucleotide(i, dnaContainer);
		i++;
	}
}

function addNucleotide(index, parent) {
	const newNucleotide = document.createElement("div");
	newNucleotide.classList.add("nucleotide");
	newNucleotide.setAttribute("data-index", index);
	newNucleotide.style.cssText = `opacity:${randomArrayItem(opacitys)};`;
	newNucleotide.innerHTML = randomArrayItem(nucleotides);
	parent.appendChild(newNucleotide);
}

function randomArrayItem(array) {
	return array[Math.floor(Math.random() * array.length)];
}

window.addEventListener("resize", init);

init();
