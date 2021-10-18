// EXAMINE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById("exampleId"));
// var exampleVariable = doc ument.getElementById("exampleId");
// console.log(exampleVariable);
// exampleVariable.textContent = 'Hello';
// exampleVariable.innerText = 'Goodbye';
// console.log(exampleVariable.innerText);
// console.log(exampleVariable.textContent);
//INNERTEXT pays attention to styling where TEXTCONTENT does not
// exampleVariable.innerHTML = '<h2>Hello</h2>';
//INNERHTML puts variable INSIDE HTML element
// exampleVariable.style.borderBottom = "solid 3px orange";

// GETELEMENTBYCLASSNAME //
// var items = document.getElementsByClassName("exampleClass");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "hello";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// // Gives error
// // items.style.backgroundColor = "#f4f4f4";

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = "#f4f4f4";
// }

// GETELEMENTBYTAGNAME //
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "hello";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// // Gives error
// // items.style.backgroundColor = "#f4f4f4";

// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = "#f4f4f4";
// }

// QUERYSELECTOR //
// var header = document.querySelector("#exampleId");
// header.style.borderBottom = "solid 4px orange";

// var input = document.querySelector("input");
// input.value = "Hello World";

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";

// QUERYSELECTORALL //
// var titles = document.querySelectorAll(".title");

// console.log(titles);
// titles[0].textContent = "Hello";

// // alternating
// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "#f4f4f4";
//     even[i].style.backgroundColor = "#ccc";
// }

// TRAVERSING THE DOM //
var itemlist = document.querySelector("#items");
//parentNode
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemlist.parentNode.parentNode);
// you can chain .parentNode

//parentElement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemlist.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemlist.childNodes);

// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = "yellow";

// //firstChild
// console.log(itemlist.firstChild);
// //firstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = "Hello";

// //lastChild
// console.log(itemlist.lastChild);
// //lastElementChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = "Hello";

//nextSibling
// console.log(itemlist.nextSibling);
// //nextElementSibling
// console.log(itemlist.nextElementSibling);

// //previousSibling
// console.log(itemlist.previousSibling);
// //previousElementSibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = "green";

//createElement

//Create a div
var newDiv = document.createElement("div");

// Add class
newDiv.className = "hello";

//Add id
newDiv.id = "hello 1";

//Add atrr
newDiv.setAttribute("title", "Hello div");

// Create text node
var newDivText = document.createTextNode("Hello world");

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);

newDiv.style.fontSize = "30px";

container.insertBefore(newDiv, h1);
