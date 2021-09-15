
let pokemonList = [
    {name: 'Bulbasaur', types: ['Grass', 'Poison'], height: 0.7, weight: '6.9kg'},
    {name: 'Ivysaur', types: ['Grass', 'Poison'], height: 1, weight: '13kg'},
    {name: 'Venusaur', types: ['Grass', 'Poison'], height: 2, weight: '100kg'}
];

for (let i = 0; i < pokemonList.length; i++) {
    let pokemonName = pokemonList[i].name;
    let pokemonHeight = pokemonList[i].height;

    if (pokemonList[i].height >= 2) {
        document.write( '<p>' + pokemonName + ' ' + '(Height: ' + pokemonHeight +  ')' + ' - Wow that\'s big!' + '</p>')  
    }
    else document.write( '<p>' + pokemonName + ' ' + '(Height: ' + + pokemonHeight +  ')' + '</p>')
}