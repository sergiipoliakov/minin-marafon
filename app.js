const refs = {
	container: document.querySelector(".container "),
	upButton: document.querySelector(".up-button"),
	downButton: document.querySelector(".down-button"),
	sidebar: document.querySelector(".sidebar"),
	mainSlide: document.querySelector(".main-slide"),
};

const slidesCount = refs.mainSlide.querySelectorAll("div").length;

refs.sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

refs.upButton.addEventListener("click", () => {
	changeSlide("up");
});
refs.downButton.addEventListener("click", () => {
	changeSlide("down");
});
let activeSlideIdx = 0;

function changeSlide(direction) {
	if (direction === "up") {
		activeSlideIdx += 1;

		if (activeSlideIdx === slidesCount) {
			activeSlideIdx = 0;
		}
	} else if (direction === "down") {
		activeSlideIdx -= 1;
		if (activeSlideIdx < 0) {
			activeSlideIdx = slidesCount - 1;
		}
	}

	const height = refs.container.clientHeight;
	refs.mainSlide.style.transform = `translateY(-${activeSlideIdx * height}px)`;

	refs.sidebar.style.transform = `translateY(${activeSlideIdx * height}px)`;
}
