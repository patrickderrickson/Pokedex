
let pokemonList = [
    {name: 'Bulbasaur', types: ['Grass', 'Poison'], height: 0.7, weight: '6.9kg'},
    {name: 'Ivysaur', types: ['Grass', 'Poison'], height: 1, weight: '13kg'},
    {name: 'Venusaur', types: ['Grass', 'Poison'], height: 2, weight: '100kg'}
];
    pokemonList.forEach(function(pokemon) {
        if (pokemon.height >= 2) {
            document.write( '<p>' + pokemon.name + ' ' + '(Height: ' + pokemon.height +  ')' + ' - Wow that\'s big!' + '</p>')  
        }
        else document.write( '<p>' + pokemon.name + ' ' + '(Height: ' + + pokemon.height +  ')' + '</p>')
});

function divide (dividend, divisor) {
    if(divisor === 0) {
        return "You're trying to divide by 0"
    }   else{
        let result = dividend / divisor;
        return result;
    }
}

console.log(divide(4, 2));
console.log(divide(7, 0));
console.log(divide(1, 4));
console.log(divide(12, -3));