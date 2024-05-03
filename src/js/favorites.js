//Botón de eliminar todos los favoritos

const handleRemoveAllFavs = (event) =>{
    event.preventDefault();
    cocktailsFav = [];
    renderAllCocktails(cocktailsFav, favList);
    renderAllCocktails(cocktailsData, allList);
}

function deleteAllBtn(){
    const removeAllElement = document.createElement('input');
    removeAllElement.type = 'reset';
    removeAllElement.value = 'Eliminar favoritos';
    removeAllElement.classList.add('btn-removeAll');


    if( cocktailsFav.length !== 0){
        favList.appendChild(removeAllElement);
    }

    removeAllElement.addEventListener('click', handleRemoveAllFavs);
}

//Eliminar de favoritos en lista lateral

const removeFavorites = (event) =>{
    event.preventDefault();
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
    console.log(clickedDrinkData.strDrink);
    renderAllCocktails(cocktailsData, allList);
    renderAllCocktails(cocktailsFav, favList);
    deleteAllBtn();
    
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