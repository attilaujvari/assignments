console.log(document.getElementById("title"));

// 1.   create element
var myH1 = document.createElement('h1');
// 2.   give element content
myH1.textContent = "Hello World";
//or with below, also modify HTML tag
//   myH1.innerHTML = "<h2>Hello World</h2>"
// 3.   placing element in DOM
var container = document.getElementById('container');
container.appendChild(myH1);


var yourH3 = document.createElement("h3")
yourH3.textContent = "Hello Me";
var fuckeddy = document.getElementById('fuckeddy');
fuckeddy.appendChild(yourH3);

//adding, removing, toggling classes
var pTag = document.getElementById