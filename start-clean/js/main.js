const chooseColor = document.querySelectorAll('.choose-color__btn');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function(element) {
    element.addEventListener('click', open)
})

function open(event) {
    const target = event.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`)

    chooseColor.forEach(function(item){
        item.classList.remove('choose__color-btn--acting')
    })

    target.classList.add('choose__color-btn--acting')

    contentItem.forEach(function(item){
        item.classList.remove('content-item__active')
    });

    contentActive.forEach(function(item) {
        item.classList.add('content-item__active')
    })
}