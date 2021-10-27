
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
            listpokemon.classList.add('group-list-item', 'col-md-6', 'col-xl-2', 'col-lg-4')
            let button = document.createElement("button");
            button.innerText = pokemon.name;
            button.classList.add('btn', 'btn-block', 'btn-info');
            button.setAttribute('data-target', '#pokemonModalContainer');
		        button.setAttribute('data-toggle', 'modal')
            listpokemon.appendChild(button);
            pokemonList.appendChild(listpokemon);

            button.addEventListener('click', function(event) {
                showDetails(pokemon);
            })
           
           
        }
        //makes the button return the pokemon name in the console.
        function showDetails(pokemon) {
          loadDetails(pokemon).then(function() {
              showModal(pokemon); 
        })
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

          //Modal Function
          let modalContainer = document.querySelector('#pokemonModalContainer');

          function showModal(pokemon) {
            let modalTitle = document.querySelector('.modal-title');
            let modalBody = document.querySelector('.modal-body');
        
            modalTitle.innerText = '';
            modalBody.innerText = '';
        
            //create element for name in modal
            let nameElement = document.createElement('h1');
            nameElement.innerText = pokemon.name;
            nameElement.classList.add('name-element');
        
            //create img in modal content
            let imageElement = document.createElement('img');
            imageElement.src = pokemon.imageUrl;
            imageElement.classList.add('modal-img');
        
            //create element for height in modal content
            let heightElement = document.createElement('p');
            heightElement.innerText = 'Height: ' + pokemon.height
        
            //create element for pokemon in modal content
            let pokemonTypes = [];
            
              Object.keys(pokemon.types).forEach(key => {
                pokemonTypes.push(' ' + pokemon.types[key].type.name);
              });
        
            let typesElement = document.createElement('p');
            typesElement.innerText = 'Type: ' + pokemonTypes;
            typesElement.classList.add('types-element');
        
        
            modalTitle.append(nameElement);
            modalBody.append(imageElement);
            modalBody.append(heightElement);
            modalBody.append(typesElement); 

          modalContainer.classList.add('is-visible');
          
        }

        //create the hide modal function
        function hideModal() {
          modalContainer.classList.remove('is-visible');
        }

        //closes modal with escape key
        window.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();  
          }
        });

        //closes modal by clicking outside
        modalContainer.addEventListener('click', (e) => {
          let target = e.target;
          if (target === modalContainer) {
            hideModal();
          }
        });

        let pokemonSearchBar = document.querySelector('#filter');

            pokemonSearchBar.addEventListener('input', function() {
              let pokeListItem = document.querySelectorAll('li');
              let filter = pokemonSearchBar.value.toUpperCase();

              pokeListItem.forEach(function(pokemon){
                if (pokemon.innerText.toUpperCase().indexOf(filter) === 0) {
                  pokemon.style.display = 'block';
                } else {
                  pokemon.style.display = 'none';
                }
              });
            });
      
        
        return { 
            add: add,
            getAll: getAll,
            addListItem: addListItem,
            showDetails: showDetails,
            loadList: loadList,
            loadDetails: loadDetails,
            showModal: showModal,
            hideModal: hideModal
        };
    })();
    
    pokemonRepository.loadList().then(function() {
    
        pokemonRepository.getAll().forEach(function (pokemon) {
        
            pokemonRepository.addListItem(pokemon);
        });
    });
