
 let pokemonRepository = (function ()  {
     //create and array in the repository called pokemon list.
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
        
        function loadList() {
            return fetch(apiUrl).then(function (response) {
              return response.json();
            }).then(function (json) {
              json.results.forEach(function (item) {
                let pokemon = {
                  name: item.name,
                  detailsUrl: item.url
                };
                add(pokemon);
              });
            }).catch(function (e) {
              console.error(e);
            })
          }

          function loadDetails(item) {
            let url = item.detailsUrl;
            return fetch(url).then(function (response) {
              return response.json();
            }).then(function (details) {
              item.imageUrl = details.sprites.front_default;
              item.height = details.height;
              item.types = details.types;
            }).catch(function (e) {
              console.error(e);
            });
          }
          function showDetails(pokemon) {
              loadDetails(pokemon).then(function() {
                  console.log(pokemon); 
            });
          }
        
        return { 
            add: add,
            getAll: getAll,
            addListItem: addListItem,
            showDetails: showDetails,
            loadList: loadList,
            loadDetails: loadDetails
        };
    })();
    
    pokemonRepository.loadList().then(function() {
    
        pokemonRepository.getAll().forEach(function (pokemon) {
        
            pokemonRepository.addListItem(pokemon);
        });
    });
