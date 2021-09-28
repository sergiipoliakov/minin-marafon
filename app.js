const refs = {
	board: document.querySelector("#board"),
	container: document.querySelector(".container"),
};

const colors = [
	"#5fff02",
	"#0145ff",
	"#fdec00",
	"#cb14f8",
	"#fd000d",
	"#00fde8",
	"#fd6500",
];

const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
	const square = document.createElement("div");
	square.classList.add("square");

	square.addEventListener("mouseover", () => {
		setColor(square);
	});
	square.addEventListener("mouseleave", () => {
		removeColor(square);
	});

	refs.board.append(square);
}

function setColor(element) {
	const color = getRandomeColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
	element.style.backgroundColor = "#1d1d1ded";
	element.style.boxShadow = `0 0 2px #1d1d1ded`;
}

function getRandomeColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
