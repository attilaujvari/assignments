var form1 = document.formBaddies
var submitButton = document.getElementById('resultSubmit')
form1.addEventListener('submit', function(e) {
    e.preventDefault()
    resultDisplay.innerHTML = ""
//grab input values
    var numGuumba = Number(form1.buttonGoomba.value) * 5
    var numBobomp = Number(form1.buttonBobomp.value) * 7
    var numCheep = Number(form1.buttonCheepcheep.value) * 11
    var total = numGuumba + numBobomp + numCheep
//clear user input
    form1.buttonBobomp.value = ""
    form1.buttonGoomba.value = ""
    form1.buttonCheepcheep.value = ""
//create element
    var displayResult = document.createElement('h3')
    displayResult.textContent = "You can bill Princess Peach for " + total + " coins."
    resultDisplay.appendChild(displayResult)

    console.log(total)


})

