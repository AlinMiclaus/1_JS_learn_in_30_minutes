/*link for video lesson: https://www.youtube.com/watch?v=zPHerhks2Vg */

var ourHeadline = document.querySelector("#our-headline");
var ourButton = document.querySelector("#our-button");
var listItems = document.querySelectorAll("#our-list li");
var ourList = document.querySelector("#our-list");
var count = 0;
var newItemCounter = 1;
var ourSecondHeadline = document.querySelector("#our-second-headline");
var ourSecondButton = document.querySelector("#our-second-button");
var SecondlistItems = document.querySelectorAll("#our-second-list li");
var ourSecondList = document.querySelector(" #our-second-list");
var count = 0;
var newSecondItemCounter = 1;

ourList.addEventListener("click",activateItem);
function activateItem(e){
	if(e.target.nodeName == "LI"){
	ourHeadline.innerHTML = e.target.innerHTML;
		for(i = 0; i < e.target.parentNode.children.length; i++){
			e.target.parentNode.children[i].classList.remove("active");
		}
	e.target.classList.add("active");
	}
}

ourButton.addEventListener("click",createNewItem);
function createNewItem(){
	ourList.innerHTML += "<li>Something New Item "+ newItemCounter +"</li>";
	newItemCounter++;
}

ourSecondList.addEventListener("click",activateSecondItem);
function activateSecondItem(e){
	if(e.target.nodeName == "LI"){
	ourSecondHeadline.innerHTML = e.target.innerHTML;
		for(i = 0; i < e.target.parentNode.children.length; i++){
			e.target.parentNode.children[i].classList.remove("active");
		}
	e.target.classList.add("active");
	}
}

ourSecondButton.addEventListener("click",createNewSecondItem);
function createNewSecondItem(){
	ourSecondList.innerHTML += "<li>Some New Item "+ newSecondItemCounter +"</li>";
	newSecondItemCounter++;
}