var cat_btn = document.getElementById('cat_btn');
var cat_fact = document.getElementById('cat_result');
var dog_btn = document.getElementById('dog_btn');
var dog_fact = document.getElementById('dog_result');


cat_btn.addEventListener('click', showCatFacts);
dog_btn.addEventListener('click', showDogFacts);

function showCatFacts(){
    console.log("amir");
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        console.log(data.text);
        cat_fact.innerHTML = data.text;
        })
}

function showDogFacts(){
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        console.log(data.text);
        dog_fact.innerHTML = data.text;
        })
}