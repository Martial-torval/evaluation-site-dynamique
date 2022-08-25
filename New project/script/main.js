let btnGenerate = document.getElementById('btnRandomImg');
let randomImg = document.getElementById('randomImg');


btnGenerate.addEventListener('click', generateRandomImg);

function generateRandomImg() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => randomImg.src = data.message)
}



