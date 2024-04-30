const handleSearch = (event) => {
    event.preventDefault();
    const valueInputSearch = searchInput.value;
    getDataCocktail(valueInputSearch);
    
    
}

