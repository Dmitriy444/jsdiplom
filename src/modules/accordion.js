const accordion = () =>{
    const block = document.querySelector('.accordeon'),
        elements = block.querySelectorAll('.element'),
        btnWhat = block.querySelectorAll('.title'),
        elemContent = block.querySelectorAll('.element-content'),
        body = document.querySelector('body');

    btnWhat[0].classList.add('btn1');
    btnWhat[1].classList.add('btn2');
    btnWhat[2].classList.add('btn3');
    btnWhat[3].classList.add('btn4');

    for(let i = 0; i < elements.length; i++){
        elements[i].setAttribute('id', 'question');
    }

    const choice = () => {
        for(let i = 0; i < elements.length; i++){
            elements[i].classList.remove('active');
        }
        for(let i = 0; i < elemContent.length; i++){
            elemContent[i].style.display = 'none';
        }
    };
    choice();
    block.addEventListener('click', (event) => {
        let target = event.target;

        if(target.matches('.btn1')){
            choice();
            elements[0].classList.toggle('active');
            elemContent[0].style.display = elemContent[0].style.display === 'none' ? 'block' : 'none';
        }
        if(target.matches('.btn2')){
            choice();
            elements[1].classList.toggle('active');
            elemContent[1].style.display = elemContent[1].style.display === 'none' ? 'block' : 'none';
        }
        if(target.matches('.btn3')){
            choice();
            elements[2].classList.toggle('active');
            elemContent[2].style.display = elemContent[2].style.display === 'none' ? 'block' : 'none';
        }
        if(target.matches('.btn4')){
            choice();
            elements[3].classList.toggle('active');
            elemContent[3].style.display = elemContent[3].style.display === 'none' ? 'block' : 'none';
        }
    });

    body.addEventListener('click', (event)=>{
        let target = event.target;
            target = target.closest('.accordeon');
        if(!target){
            choice();
        }
    });
};

export default accordion;