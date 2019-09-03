import _ from "lodash";
import txt from "./test.txt";
import style from "./styles/home.css";

function txtComponent() {
	var element = document.createElement("div");

	element.innerHTML = txt;

	return element;
}

function component() {
	var element = document.createElement("div");

	element.innerHTML = _.join(["Hello", "webpack"], " ");
	element.classList.add("hello");

	return element;
}

console.log(style);
document.body.appendChild(txtComponent());
document.body.appendChild(component());
