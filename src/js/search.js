//Reset

function resetDrinks(){
    cocktailsFav = [];
    getDataCocktail('margarita');
    renderAllCocktails(cocktailsFav, favList);
}

const handleReset = (event)=>{
    resetDrinks();
}

//Botón de eliminar todos los favoritos

function deleteAllBtn(){
    let htmlDeleteBtn = '<input type="submit" value="Eliminar favoritos" class="js_btn-deleteAll">';
    return htmlDeleteBtn;
}

//Eliminar de favoritos en lista lateral

const removeFavorites = (event) =>{
    const clickedElement = event.target;
    const liParentId = clickedElement.parentNode.id;
    const favLiClickedIndex = cocktailsFav.findIndex((item) => item.idDrink === liParentId);

    if(favLiClickedIndex === -1){
        cocktailsFav.splice(favLiClickedIndex, 1);
    }

    renderAllCocktails(cocktailsData, allList);
    renderAllCocktails(cocktailsFav, favList);
}

//Añadir y eliminar de favoritos

const addFavorites = (event) => {
    event.preventDefault();
    const clickedLiId = event.currentTarget.id;
    const clickedDrinkData = cocktailsData.find((each)=> each.idDrink === clickedLiId);
    const favLiClickedIndex = cocktailsFav.findIndex((item) => item.idDrink === clickedLiId);

    if(favLiClickedIndex === -1){
        cocktailsFav.push(clickedDrinkData);
    }else{
        cocktailsFav.splice(favLiClickedIndex, 1);
    }
    renderAllCocktails(cocktailsData, allList);
    renderAllCocktails(cocktailsFav, favList);
    
}

//Eventos para añadir y eliminar favoritos

function clickedFav(parent){
    
    if(parent === allList){
        const allDrinksLi = document.querySelectorAll('.js_li-drinks');
        for(const li of allDrinksLi){
            li.addEventListener('click', addFavorites);
        }
    }else{
        const allDrinksBtn = document.querySelectorAll('.js_btn-remove');
        for(const btn of allDrinksBtn){
            btn.addEventListener('click', removeFavorites);
        }
    }
    
}




// Renderizar cocteles

function renderCocktail(each){
    let htmlLi = '';
    const favIndex = cocktailsFav.findIndex((item)=> item.idDrink === each.idDrink);
    let drinkClass = favIndex === -1 ? 'card' : 'card-fav';
    let btnClass = favIndex === -1 ? 'hidden' : 'btn';
    let imgDrink = each.strDrinkThumb === null ? imgDefault : each.strDrinkThumb;
    htmlLi = `<li class="${drinkClass} js_li-drinks" id=${each.idDrink}>
                <img class="img" src=${imgDrink} alt=${each.strDrink}>
                <h3>${each.strDrink}</h3>
                <div class="js_btn-remove ${btnClass}">x</div>
            </li>`; 
    
    return htmlLi;
}



function renderAllCocktails(allDrinks, parent){
    parent.innerHTML = '';
    for (const drink of allDrinks){
        parent.innerHTML += renderCocktail(drink);
    }
    
    localStorage.setItem('Favorite cocktails', JSON.stringify(cocktailsFav));
    clickedFav(parent);
    
    
}


//Datos del servidor

function getDataCocktail(input){
    const serverUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;

    fetch(serverUrl)
    .then((response) => response.json())
    .then((dataServer) => {
        cocktailsData = dataServer.drinks;
        console.log(cocktailsData);
        renderAllCocktails(cocktailsData, allList);
    })
}


//Cocteles favoritos guardados en local

const cocktailsFavLocal = localStorage.getItem('Favorite cocktails');
if(cocktailsFavLocal !== null){
    cocktailsFav = JSON.parse(cocktailsFavLocal);
    
}



//Función de búsqueda

const handleSearch = (event) => {
    event.preventDefault();
    const valueInputSearch = searchInput.value;
    getDataCocktail(valueInputSearch);
    
    
}


// Cuando carga la página

renderAllCocktails(cocktailsFav, favList);
searchBtn.addEventListener('click', handleSearch);
getDataCocktail('margarita');
resetBtn.addEventListener('click', handleReset);


