// Selecting HTML Elements from the DOM, for use in our Js.
// grab by ID, class, tag
var title = document.getElementById('title')
// var texts = document.getElementsByClassName('text')
// var pTags = document.getElementsByTagName('p')

console.log(title)
// console.log(pTags)

// document.querySelector("#title")
// document.querySelectorAll("p")

// Practice 1
// 1. Create a directory called dom-practice
// 2. Create index.html and app.js files
// 3. Create HTML boilerplate and and h1 with and ID
// 4. Select and console.log that h1 in your app.js


// Creating and Editing Elements
    // 1. Create the element
        var myH1 = document.createElement('h1')
    // 2. Give the element some content
        myH1.textContent = "Hello World"            // <h1>Hello World</h1>
        // myH1.innerHTML = "<h2>Hello World</h2>"  // <h2>Hello World</h2>
    // 3. Placing that element on the DOM
        var container = document.getElementById('container')

       // parent            // child
        container.appendChild(myH1)

// Practice 2
// 1. Create a div in your HTML and give it an ID
// 2. Create an h1 in js
// 3. Give that h1 text content
// 4. Select the div from your HTML
// 5. Append the h1 into the div so it shows up on the webpage


// Adding, removing, toggling classes
var pTag = document.getElementsByClassName('my-class')
pTag[0].classList.add("highlight")
pTag[0].classList.remove("highlight")
// .toggle('highlight')

// https://images.unsplash.com/photo-1548736614-128923fa2a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80

// Adding/removing attributes
var myImg = document.createElement('img')
myImg.setAttribute("src", "https://images.unsplash.com/photo-1548736614-128923fa2a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80")
myImg.style.width = "200px"
myImg.style.height = "200px"
container.appendChild(myImg)

// ParentNode, childNodes
console.log(container.childNodes)