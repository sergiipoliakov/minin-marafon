const refs = {
	item: document.querySelector(".item"),
	placeholders: document.querySelectorAll(".placeholder"),
};

refs.item.addEventListener("dragstart", dragStart);
refs.item.addEventListener("dragend", dragEnd);

for (const placeholder of refs.placeholders) {
	placeholder.addEventListener("dragover", dragOver);
	placeholder.addEventListener("dragenter", dragEnter);
	placeholder.addEventListener("dragleave", dragLeave);
	placeholder.addEventListener("drop", dragDrop);
}

function dragStart(event) {
	event.target.classList.add("hold");

	setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragEnd(event) {
	event.target.classList.remove("hold", "hide");
}

function dragOver(event) {
	event.preventDefault();
}

function dragEnter(event) {
	event.target.classList.add("hovered");
}

function dragLeave(event) {
	event.target.classList.remove("hovered");
}

function dragDrop(event) {
	event.target.classList.remove("hovered");
	event.target.append(refs.item);
}
