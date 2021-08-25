const box = document.querySelectorAll('.box')

console.log(box)

window.addEventListener('scroll', disBoxes)
const view_h = window.innerHeight / 5 * 4
function disBoxes() {
    box.forEach(box_ => {
        const boxTop = box_.getBoundingClientRect().top
        if (boxTop < view_h) {
            box_.classList.add("show")
        } else {
            box_.classList.remove("show")
        }
    })

}
