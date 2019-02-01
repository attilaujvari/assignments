var form = document.travelForm

form.addEventListener("submit",function (event) {
    event.preventDefault()

var dietChosen = form.diet
var result = []
    for (i = 0; i < dietChosen.length; i++){
        if (dietChosen[i].checked){
            result.push(dietChosen[i].value)
        }
    }


    alert(
        "First Name: " + form.fName.value +
        "\nLast Name: " + form.lName.value +
        "\nAge: " + form.age.value +
        "\nGender: " + form.gender.value +
        "\nLocation: " + form.destination.value +
        "\nDietary restrictions: " + result
    )
})