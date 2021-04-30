var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var dltbtn = document.createElement("button");
	dltbtn.appendChild(document.createTextNode("Delete"));
	dltbtn.className = "delete";
	li.appendChild(dltbtn);
	ul.appendChild(li);
	input.value = "";
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

function crossListAfterClick(item) {
	if (item.target.nodeName === "LI"){
		item.target.classList.toggle("done");		
	}
}

function deleteListAfterClick(item) {
	if (item.target.className === "delete") {
		item.target.parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", crossListAfterClick);

ul.addEventListener("click", deleteListAfterClick);