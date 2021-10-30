let pokemonRepository=function(){let e=[],t="https://pokeapi.co/api/v2/pokemon/?limit=150";function n(t){e.push(t)}function o(e){i(e).then(function(){a(e)})}function i(e){let t=e.detailsUrl;return fetch(t).then(function(e){return e.json()}).then(function(t){e.imageUrl=t.sprites.front_default,e.height=t.height,e.types=t.types}).catch(function(e){console.error(e)})}let l=document.querySelector("#pokemonModalContainer");function a(e){let t=document.querySelector(".modal-title"),n=document.querySelector(".modal-body");t.innerText="",n.innerText="";let o=document.createElement("h1");o.innerText=e.name,o.classList.add("name-element");let i=document.createElement("img");i.src=e.imageUrl,i.classList.add("modal-img");let a=document.createElement("p");a.innerText="Height: "+e.height;let c=[];Object.keys(e.types).forEach(t=>{c.push(" "+e.types[t].type.name)});let s=document.createElement("p");s.innerText="Type: "+c,s.classList.add("types-element"),t.append(o),n.append(i),n.append(a),n.append(s),l.classList.add("is-visible")}function c(){l.classList.remove("is-visible")}window.addEventListener("keydown",e=>{"Escape"===e.key&&l.classList.contains("is-visible")&&c()}),l.addEventListener("click",e=>{e.target===l&&c()});let s=document.querySelector("#filter");return s.addEventListener("input",function(){let e=document.querySelectorAll("li"),t=s.value.toUpperCase();e.forEach(function(e){0===e.innerText.toUpperCase().indexOf(t)?e.style.display="block":e.style.display="none"})}),{add:n,getAll:function(){return e},addListItem:function(e){let t=document.querySelector(".pokemon-list"),n=document.createElement("li");n.classList.add("group-list-item","col-md-6","col-xl-2","col-lg-4");let i=document.createElement("button");i.innerText=e.name,i.classList.add("btn","btn-block","btn-info"),i.setAttribute("data-target","#pokemonModalContainer"),i.setAttribute("data-toggle","modal"),n.appendChild(i),t.appendChild(n),i.addEventListener("click",function(t){o(e)})},showDetails:o,loadList:function(){return fetch(t).then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){n({name:e.name,detailsUrl:e.url})})}).catch(function(e){console.error(e)})},loadDetails:i,showModal:a,hideModal:c}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});