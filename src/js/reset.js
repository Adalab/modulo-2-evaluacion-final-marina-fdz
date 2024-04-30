function resetDrinks(){
    cocktailsFav = [];
    getDataCocktail('margarita');
    renderAllCocktails(cocktailsFav, favList);
}

const handleReset = (event)=>{
    event.preventDefault();
    resetDrinks();
}