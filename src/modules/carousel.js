const carousel = () => {
    const blocks = document.querySelector('.services-elements'),
        arrows = document.querySelector('.services-arrow'),
        cards = blocks.querySelectorAll('.col-sm-6');
    
    for(let i = 0; i < cards.length; i++){
        cards[i].setAttribute('id', 'card');
    }

    cards[3].style.display = 'none';
    cards[5].style.display = 'none';
    cards[4].style.display = 'none';


    for(let i = 0; i < 3; i++){
        cards[i].id = 'first';
    }
    for(let i = 3; i < cards.length; i++){
        cards[i].id = 'second';
    }

    const arrowRight = () => {
        for(let i = 0; i < 3; i++){
            cards[i].style.display = 'none';
        }
        for(let i = 3; i < cards.length; i++){
            cards[i].style.display = 'block';
        }
    };
    const arrowLeft = () => {
        for(let i = 0; i < 3; i++){
            cards[i].style.display = 'block';
        }
        for(let i = 3; i < cards.length; i++){
            cards[i].style.display = 'none';
        }
    }

    arrows.addEventListener('click', (event) => {
        let target = event.target;
        if(target.matches('.arrow-right')){
            arrowRight();
        } else if (target.matches('.arrow-left')){
            arrowLeft();
        }
    });
    
};

export default carousel;