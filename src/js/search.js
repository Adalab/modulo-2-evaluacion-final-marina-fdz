//Añadir y eliminar de favoritos

const addFavorites = (event) => {
    event.preventDefault();
    const clickedLiId = event.currentTarget.id;
    const clickedElement = event.target;
    
    const clickedDrinkData = cocktailsData.find((each)=> each.idDrink === clickedLiId);
    const favLiClickedIndex = cocktailsFav.findIndex((item) => item.idDrink === clickedLiId);

    if(favLiClickedIndex === -1){
        cocktailsFav.push(clickedDrinkData);
    }
    if(clickedElement.classList.contains('js_btn-remove')){
        cocktailsFav.splice(favLiClickedIndex, 1);
    }
    renderAllCocktails(cocktailsData, allList);
    renderAllCocktails(cocktailsFav, favList);
}



// Renderizar cocteles

function renderCocktail(each){
    let htmlLi = '';
    const favIndex = cocktailsFav.findIndex((item)=> item.idDrink === each.idDrink);
    let drinkClass = favIndex === -1 ? 'card' : 'card-fav';
    let btnClass = favIndex === -1 ? 'hidden' : 'btn';
    let imgDrink = each.strDrinkThumb === null ? imgDefault : each.strDrinkThumb;
    htmlLi = `<li class="${drinkClass} js_li-drinks" id="${each.idDrink}">
                <img class="img" src="${imgDrink}" alt="${each.strDrink}">
                <h3>"${each.strDrink}"</h3>
                <div class="js_btn-remove ${btnClass}">x</div>
            </li>`; 
    
    return htmlLi;
}


function renderAllCocktails(allDrinks, parent){
    parent.innerHTML = '';
    for (const drink of allDrinks){
        parent.innerHTML += renderCocktail(drink);
    }
    const allDrinksLi = document.querySelectorAll('.js_li-drinks');
    for(const li of allDrinksLi){
        li.addEventListener('click', addFavorites);
    }
    localStorage.setItem('Favorite cocktails', JSON.stringify(cocktailsFav));
}


//Datos del servidor

function getDataCocktail(input){
    const serverUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;

    fetch(serverUrl)
    .then((response) => response.json())
    .then((dataServer) => {
        cocktailsData = dataServer.drinks;
        localStorage.setItem('Cocktails', JSON.stringify(cocktailsData));
        console.log(cocktailsData);
        renderAllCocktails(cocktailsData, allList);
    })
}


//Cocteles favoritos guardados en local

const cocktailsFavLocal = localStorage.getItem('Favorite cocktails');
if(cocktailsFavLocal !== null){
    cocktailsFav = JSON.parse(cocktailsFavLocal);
}


//Renderizar los cocteles guardados en local primero

const cocktailsLocal = localStorage.getItem('Cocktails');
function searchCocktailsLocal(input){
    let searchedData = [];
    cocktailsData = JSON.parse(cocktailsLocal);
    searchedData = cocktailsData.filter((each) => each.strDrink.toLowerCase().includes(input.toLowerCase()));
    if(searchedData.length !== 0){
        renderAllCocktails(searchedData, allList);
        console.log('holis');
        console.log(searchedData);
    }else{
        getDataCocktail(input);
    }
    
}





//Función de búsqueda

const handleSearch = (event) => {
    event.preventDefault();
    const valueInputSearch = searchInput.value;
    searchCocktailsLocal(valueInputSearch);
    
    
}


// Cuando carga la página

renderAllCocktails(cocktailsFav, favList);
searchBtn.addEventListener('click', handleSearch);
