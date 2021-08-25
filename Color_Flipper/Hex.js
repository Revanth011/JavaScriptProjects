const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.getElementById('btn_');
const color = document.querySelector('.color_')

btn.addEventListener('click', function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNum()];
        console.log(hexColor);
    }
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomNum() {
    return Math.floor(Math.random() * 16);
}