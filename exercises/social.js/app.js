var Ryan = {
    name: 'Ryan Pettingill',
    species: 'human',
    gender: 'male',
    sexy: false,
    age: 24,
    wearing: ['scarf','shirt','pants','underwear','socks','shoes'],
    from: {
        country: 'USA',
        planet: 'Earth',
        cityState: [
            {
            city: 'Dothan',
            state: 'Alabama',
            }
            ]
    },
    breaks: function () {
        return "yeah, he aight";
    }
};

function hotter() {
    Ryan.sexy = true
    console.log(Ryan.breaks())
}
hotter()
console.log(Ryan.sexy)

function add(county, schoolD) {
    Ryan.from.cityState.push(county,schoolD)
}
add('county name','schoolDistrict')
console.log(Ryan.from.cityState)