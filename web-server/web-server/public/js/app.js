console.log("Wellcome in static file");



fetch('http://puzzle.mead.io/puzzle').then(res =>{
    res.json().then( res =>{
        console.log(res);
    })
})

const formSearch = document.getElementById('searchForm');
const searchField = document.getElementById('search');

formSearch.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = searchField.value;
    console.log('location',location);
    searchField.value = '';
})