const addFavorites = (event) => {
    event.preventDefault();
    const clickedLiId = event.currentTarget.id;
    const clickedDrinkData = cocktailsData.find((each)=> each.idDrink === clickedLiId);
    const favLiClickedIndex = cocktailsFav.findIndex((item) => item.idDrink === clickedLiId);

    if(favLiClickedIndex === -1){
        cocktailsFav.push(clickedDrinkData);
    }else{
        // cocktailsFav.splice(favLiClickedIndex, 1);
    }
    console.log(cocktailsFav);
    renderAllCocktails(cocktailsData, allList);
    renderAllCocktails(cocktailsFav, favList);
}


function renderCocktail(each){
    let htmlLi = '';
    const favIndex = cocktailsFav.findIndex((item)=> item.idDrink === each.idDrink);
    let drinkClass = favIndex === -1 ? 'card' : 'card-fav';
    let imgDrink = each.strDrinkThumb === null ? imgDefault : each.strDrinkThumb;
    htmlLi = `<li class="${drinkClass} js_li-drinks" id="${each.idDrink}">
                <img src="${imgDrink}" alt="${each.strDrink}">
                <h3>"${each.strDrink}"</h3>
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


function getDataCocktail(input){
    const serverUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;

    fetch(serverUrl)
    .then((response) => response.json())
    .then((dataServer) => {
        cocktailsData = dataServer.drinks;
        console.log(cocktailsData);
        renderAllCocktails(cocktailsData, allList);
        localStorage.setItem('Cocktails', JSON.stringify(cocktailsData));
    })
}


const cocktailsFavLocal = localStorage.getItem('Favorite cocktails');
if(cocktailsFavLocal !== null){
    cocktailsFav = JSON.parse(cocktailsFavLocal);
}

const cocktailsLocal = localStorage.getItem('Cocktails');
function searchCocktailsLocal(input){
    cocktailsData = JSON.parse(cocktailsLocal);
    const searchedData = cocktailsData.filter((each) => each.strDrink.toLowerCase.includes(input.toLowerCase));
    renderAllCocktails(searchedData, allList);
}


const handleSearch = (event) => {
    event.preventDefault();
    const valueInputSearch = searchInput.value;
    if(cocktailsLocal !== null){yy
        searchCocktailsLocal(valueInputSearch);
    }else{
        getDataCocktail(valueInputSearch);
    }
}

renderAllCocktails(cocktailsFav, favList);
searchBtn.addEventListener('click', handleSearch);