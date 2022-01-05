console.log("Wellcome in static file");


let resValue;
fetch('http://puzzle.mead.io/puzzle').then(res =>{
    res.json().then( res =>{
        resValue = res['puzzle'];
        console.log(res);
    })
})