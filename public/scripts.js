const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal-overlay');
const modal_content = modal.querySelector('.modal');

for (const card of cards) {
    card.addEventListener('click', function(){
        modal.classList.add('active');
        const cardId = card.getAttribute('id');
        modal.querySelector('iframe').src = `https://rocketseat.com.br/${cardId}`;
    })
}

modal.querySelector('.close-modal').addEventListener('click', function(){
    modal.classList.remove('active');
    modal.querySelector('iframe').src = '';
    modal_content.classList.remove('active');
})

modal.querySelector('.maximize-modal').addEventListener('click', function(){
    if(modal_content.classList.contains('active')){
        modal_content.classList.remove('active');
    }else{
        modal_content.classList.add('active');
    }
})

