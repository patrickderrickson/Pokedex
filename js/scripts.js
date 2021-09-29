
 let pokemonRepository = (function ()  {
     //create and array in the repository called pokemon list.
   let pokemonList = [
        {
            name: 'Bulbasaur', 
            types: ['Grass', 'Poison'], 
            height: 0.7, 
            weight: '6.9kg'
        },
        {
            name: 'Ivysaur', 
            types: ['Grass', 'Poison'], 
            height: 1, 
            weight: '13kg'
        },
        {
            name: 'Venusaur', 
            types: ['Grass', 'Poison'], 
            height: 2, 
            weight: '100kg'
        }
    ];
        //the add function allows you to add pokemon to the list.
        function add(pokemon) {
            pokemonList.push(pokemon);
        }
        //the getAll function will return the array.
        function getAll() {
            return pokemonList;
        }
        //creates a button for each pokemon array

        function addListItem(pokemon) {
            let pokemonList = document.querySelector(".pokemon-list");
            let listpokemon = document.createElement("li");
            let button = document.createElement("button");
            button.innerText = pokemon.name;
            button.classList.add("button-class");
            listpokemon.appendChild(button);
            pokemonList.appendChild(listpokemon);

            button.addEventListener('click', function(event) {
                showDetails(pokemon);
            })
           
           
        }
        //makes the button return the pokemon name in the console.
        function showDetails(pokemon) {
            console.log(pokemon.name);
        }
        
        return { 
            add: add,
            getAll: getAll,
            addListItem: addListItem,
            showDetails: showDetails
        };
    })();
    
    
    pokemonRepository.getAll().forEach(function (pokemon) {
        
        pokemonRepository.addListItem(pokemon);

});

