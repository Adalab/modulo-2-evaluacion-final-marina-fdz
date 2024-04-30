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

const handleRemoveAllFavs = (event) =>{
    cocktailsFav = [];
    renderAllCocktails(cocktailsFav, favList);
}

function deleteAllBtn(){
    const removeAllElement = document.createElement('input');
    removeAllElement.type = 'reset';
    removeAllElement.value = 'Eliminar favoritos';
    removeAllElement.classList.add('btn-removeAll');
    
    // const removeAllElement = document.createElement('div');
    // const textRemove = document.createTextNode('Eliminar favoritos');
    // removeAllElement.appendChild(textRemove);
    // removeAllElement.classList.add('btn-removeAll');

    if( cocktailsFav.length !== 0){
        favList.appendChild(removeAllElement);
    }

    removeAllElement.addEventListener('click', handleRemoveAllFavs);
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


// Renderizar cocteles

function renderCocktail(each){
  
    const favIndex = cocktailsFav.findIndex((item)=> item.idDrink === each.idDrink);
    let drinkClass = favIndex === -1 ? 'card' : 'card-fav';
    let imgDrink = each.strDrinkThumb === null ? imgDefault : each.strDrinkThumb;
    
    const liElement = document.createElement('li');
    liElement.classList.add(drinkClass);
    liElement.classList.add('js_li-drinks');
    liElement.setAttribute('id', each.idDrink);
    
    const imgElement = document.createElement('img');
    imgElement.src = imgDrink;
    imgElement.classList.add('img');
    imgElement.setAttribute('alt', each.strDrink);
    liElement.appendChild(imgElement);

    const h3Element = document.createElement('h3');
    const h3Text = document.createTextNode(each.strDrink);
    h3Element.appendChild(h3Text);
    liElement.appendChild(h3Element);

    if(favIndex !== -1){
        const removeBtnElement = document.createElement('icon');
        // const textBtn = document.createTextNode('x');
        // removeBtnElement.appendChild(textBtn);
        removeBtnElement.classList.add('fa-solid');
        removeBtnElement.classList.add('fa-xmark');
        removeBtnElement.classList.add('js_btn-remove');
        removeBtnElement.classList.add('btn');
        liElement.appendChild(removeBtnElement);
    }

    console.log(liElement);
    return liElement;
    

}



function renderAllCocktails(allDrinks, parent){
    parent.innerHTML = '';
    for (const drink of allDrinks){
        parent.appendChild(renderCocktail(drink));
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
deleteAllBtn();
