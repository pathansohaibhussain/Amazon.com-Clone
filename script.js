let SearchBar = document.querySelector('.search-bar');
let outline = () => {
    SearchBar.style.outline = '2px solid orange';
}
let NoOutline = () => {
    SearchBar.style.outline = 'none';
}
SearchBar.addEventListener('click', () => {
    outline();
    setTimeout(NoOutline, 10000);
});

