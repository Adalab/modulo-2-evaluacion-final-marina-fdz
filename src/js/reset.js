function resetDrinks(){
    cocktailsFav = [];
    getDataCocktail('margarita');
    renderAllCocktails(cocktailsFav, favList);
    searchInput.value = '';
}

const handleReset = (event)=>{
    event.preventDefault();
    resetDrinks();
}