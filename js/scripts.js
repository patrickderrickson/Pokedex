
 let pokemonRepository = (function ()  {
   let pokemonList = [
        {name: 'Bulbasaur', types: ['Grass', 'Poison'], height: 0.7, weight: '6.9kg'},
        {name: 'Ivysaur', types: ['Grass', 'Poison'], height: 1, weight: '13kg'},
        {name: 'Venusaur', types: ['Grass', 'Poison'], height: 2, weight: '100kg'}
    ];
        function add(pokemon) {
            pokemonList.push(pokemon);
        }

        function getAll() {
            return pokemonList;
        }
        
        return { 
            add: add,
            getAll: getAll
        };
    })();
    
    
    
    
    
    
    
    
    pokemonRepository.getAll().forEach(function (pokemon) {
        if (pokemon.height >= 2) {
            document.write( '<p>' + pokemon.name + ' ' + '(Height: ' + pokemon.height +  ')' + ' - Wow that\'s big!' + '</p>')  
        }
        else document.write( '<p>' + pokemon.name + ' ' + '(Height: ' + + pokemon.height +  ')' + '</p>')
});

