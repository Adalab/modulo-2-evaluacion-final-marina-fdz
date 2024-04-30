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