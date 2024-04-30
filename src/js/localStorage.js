const cocktailsFavLocal = localStorage.getItem('Favorite cocktails');
if(cocktailsFavLocal !== null){
    cocktailsFav = JSON.parse(cocktailsFavLocal);
    
}