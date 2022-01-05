





const formSearch = document.getElementById('searchForm');
const searchField = document.getElementById('search');
const locationSearch = document.getElementById('location');
const puzzle = document.getElementById('puzzle')

formSearch.addEventListener('submit',(e)=>{
    e.preventDefault();
        if(searchField.value === ''){
            locationSearch.innerHTML = "Please must provide a term value ... !"
        }else{
            locationSearch.textContent = searchField.value;
            fetch('http://puzzle.mead.io/puzzle').then(res =>{
            res.json().then( data =>{
                puzzle.innerHTML = data.puzzle;
            })
            })
        }

})