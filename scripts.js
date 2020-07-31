const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal-overlay')


for (let card of cards) {
    card.addEventListener('click', function() {
        const videoId = card.getAttribute('id')

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://youtube.com/embed/${videoId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    
    //removing the video after closing modal
    modalOverlay.querySelector('iframe').src = ''

})

