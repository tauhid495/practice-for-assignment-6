const searchFood = () => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.meals));
}
