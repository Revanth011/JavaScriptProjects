const colors = ['red', 'green', 'rgb(33,42,55)', '#97A51A'];

const btn = document.getElementById('btn_');
const color = document.querySelector('.color_')

btn.addEventListener('click', function () {
    const RandomNum = getRandomNum();
    console.log(RandomNum);
    document.body.style.backgroundColor = colors[RandomNum];
    color.textContent = colors[RandomNum];
});

function getRandomNum() {
    return Math.floor(Math.random() * 4);
}

