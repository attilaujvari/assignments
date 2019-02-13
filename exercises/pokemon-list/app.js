var container = document.getElementById("container")
var xhr = new XMLHttpRequest ()

xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState === 4){
        var jsonData = xhr.responseText
        var data = JSON.parse(jsonData)
        console.log(data.objects[0].pokemon)
        listPokemons(data.objects[0].pokemon)

    }
}

xhr.open("GET", "https://api.vschool.io/pokemon/", true)
xhr.send()

function listPokemons(pokemonArr) {
    for (var i = 0; i < pokemonArr.length; i++){
        var pokemonName = pokemonArr[i].name
        var name = document.createElement('p')
        name.textContent = pokemonName
        container.appendChild(name)
    }
}