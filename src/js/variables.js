const searchInput = document.querySelector('.js_input');
const searchBtn = document.querySelector('.js_btn-search');
const resetBtn = document.querySelector('.js_btn-reset');
const allList = document.querySelector('.js_list-all');
const favList = document.querySelector('.js_list-fav');
const imgDefault = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';

let cocktailsData = [];
let cocktailsFav = [];
