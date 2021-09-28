const refs = {
	startBtn: document.querySelector("#start"),
	screens: document.querySelectorAll(".screen"),
	timeList: document.querySelector("#time-list"),
	timeEl: document.querySelector("#time"),
	board: document.querySelector("#board"),
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

let time = 0;
let score = 0;

refs.startBtn.addEventListener("click", (event) => {
	event.preventDefault();
	refs.screens[0].classList.add("up");
});

refs.timeList.addEventListener("click", (event) => {
	if (event.target.classList.contains("time-btn")) {
		time = parseInt(event.target.getAttribute("data-time"));
		refs.screens[1].classList.add("up");
		startGame();
	}
});

refs.board.addEventListener("click", (event) => {
	if (event.target.classList.contains("circle")) {
		score += 1;
		event.target.remove();
		createRandomCircle();
	}
});

function startGame() {
	setInterval(decreaseTime, 1000);
	createRandomCircle();
	setTime(time);
}

function decreaseTime() {
	if (time === 0) {
		finishGame();
	} else {
		let current = --time;
		if (current < 10) {
			current = `0${current}`;
		}
		setTime(current);
	}
}

function setTime(value) {
	refs.timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
	refs.timeEl.parentNode.classList.add("hide");
	refs.board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`;
}

function createRandomCircle() {
	const circle = document.createElement("div");
	const size = getRandomNumber(10, 60);
	const color = getRandomeColor();
	const { width, height } = refs.board.getBoundingClientRect();
	const x = getRandomNumber(0, width - size);
	const y = getRandomNumber(0, height - size);

	circle.classList.add("circle");
	circle.style.background = color;
	circle.style.width = `${size}px`;
	circle.style.height = `${size}px`;
	circle.style.top = `${y}px`;
	circle.style.left = `${x}px`;

	refs.board.append(circle);
}

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function getRandomeColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
