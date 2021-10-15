
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
          loadDetails(pokemon).then(function() {
              showModal(pokemon.name, pokemon.height, pokemon.imageUrl); 
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
        let modalContainer = document.querySelector('#modal-container');

        function showModal(name, height, img) {
          //clear all prexisting modal content
          modalContainer.innerHTML = '';

          let modal = document.createElement('div');
          modal.classList.add('modal');

          //create close button inside the modal
          let closeButton = document.createElement('button');
          closeButton.classList.add('modal-close');
          closeButton.innerText = 'close';
          closeButton.addEventListener('click', hideModal);

          //create pokemon name element
          let pokemonName = document.createElement('h1');
          pokemonName.innerText = name;

          //create pokemon height element
          let pokemonHeight = document.createElement('p');
          pokemonHeight.innerText = 'Height:', height;

          //create pokemon image
          let pokemonImg = document.createElement('img');
          pokemonImg.src = img;

          modal.appendChild(closeButton);
          modal.appendChild(pokemonName);
          modal.appendChild(pokemonHeight);
          modal.appendChild(pokemonImg);
          modalContainer.appendChild(modal);

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
