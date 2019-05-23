var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listitems = document.querySelectorAll("li");
var buttonD = document.getElementsByClassName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var btn1 = li.appendChild(document.createElement("Button"));
	btn1.appendChild(document.createTextNode("Delete"));
	btn1.classList.add("li");
	buttonD = document.getElementsByClassName("li");
	buttonD[buttonD.length-1].addEventListener("click", deleteListItem);
	listitems = document.querySelectorAll("li");
	listitems[listitems.length-1].addEventListener("click", markDoneAfterClick(listitems.length-1));
	input.value = "";

}

function deleteListItem(event) {
	event.target.parentNode.remove();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markDoneAfterClick(item) {
	return function toggleDone() {
			listitems[item].classList.toggle("done")
	}

}

for (var i = listitems.length - 1; i >= 0; i--) {
	listitems[i].addEventListener("click", markDoneAfterClick(i));
}

for (var i = buttonD.length - 1; i >= 0; i--) {
	buttonD[i].addEventListener("click", deleteListItem);
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);