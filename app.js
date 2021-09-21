//я сделал динамически добавление карточе в разметку.
// поменял < div > на < li >
//  если элименты повторяюстя то это должен быть список элементов,
//  так сематически правильно

const cards = [
	{
		imgUrl:
			"https://images.unsplash.com/photo-1420745981456-b95fe23f5753?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
		title: "Kyoto Japan",
	},
	{
		imgUrl:
			"https://images.unsplash.com/photo-1475319122043-5ca9eeceefaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
		title: "Iceland",
	},
	{
		imgUrl:
			"https://images.unsplash.com/photo-1445497680841-3fb9096cb55a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
		title: "Rocky Bay Resorts, Park Rynie, South Africa",
	},
	{
		imgUrl:
			"https://images.unsplash.com/photo-1611616910032-b63f95736a93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
		title: "Aguascalientes, Ags., México",
	},
	{
		imgUrl:
			"https://images.unsplash.com/photo-1540947877223-e2bc90ea3a02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
		title: "Skogafoss Stairs, Iceland",
	},
	{
		imgUrl:
			"https://images.unsplash.com/photo-1618431300096-f105ce827714?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80",
		title: "Royal Gorge, Colorado, USA",
	},
	{
		imgUrl:
			"https://images.unsplash.com/photo-1581084993490-cd464ef669ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1373&q=80",
		title: "Lac du Salagou, France",
	},
	{
		imgUrl:
			"https://images.unsplash.com/photo-1615549781643-78287c25b942?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1893&q=80",
		title: "Solto Collina, BG, Italia",
	},
	{
		imgUrl:
			"https://images.unsplash.com/photo-1498008018457-e4c2937641b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
		title: "Westfjords Region, Iceland",
	},
	{
		imgUrl:
			"https://images.unsplash.com/photo-1516715263256-ce21e82c7391?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2597&q=80",
		title: "Nesodden, Norway",
	},
	{
		imgUrl:
			"https://images.unsplash.com/photo-1615549781356-fa31834e3c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80",
		title: "North of Italy",
	},
];

const refs = {
	containerEl: document.querySelector(".container"),
	galleryListEl: document.querySelector(".js-gallery"),
};

const cardsMarkup = createCardsMarkup(cards);

refs.galleryListEl.insertAdjacentHTML("beforeend", cardsMarkup);

function createCardsMarkup(items) {
	return items
		.map(
			(item) => `<li  class="slide"
             style="background-image: url(${item.imgUrl}">
            <h3>${item.title}</h3>
        </li>`
		)
		.join(" ");
}

refs.containerEl.addEventListener("click", onSetActiveClass);

function onSetActiveClass(event) {
	clearActivClasses();
	if (event.target.classList.value !== "slide") {
		return;
	}
	event.target.classList.add("active");
}

const slides = refs.containerEl.querySelectorAll(".slide");

function clearActivClasses() {
	if (slides) {
		slides.forEach((slide) => slide.classList.remove("active"));
	}
}
