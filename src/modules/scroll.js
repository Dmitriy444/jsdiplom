const scroll = () => {
    const arrowTop = document.querySelector('.up'),
        topMenu = document.querySelector('.top-menu'),
        ul = topMenu.querySelector('ul'),
        buttons = ul.querySelectorAll('li'),
        questions = document.querySelectorAll('.push100'),
        body = document.querySelector('body');

    arrowTop.setAttribute('hidden', true);
    topMenu.id = 'menu';
    topMenu.classList.add('ok');

    buttons[0].classList.add('price');
    buttons[1].classList.add('answer');
    buttons[2].classList.add('contacts');
    questions[0].id = 'price';
    questions[2].id = 'question';
    questions[3].id = 'contacts';
    
    const ourServices = document.getElementById('price');
    const question = document.getElementById('question');
    const ourContacts = document.getElementById('contacts');

    ul.addEventListener('click', (event)=>{
        let target = event.target;
            target = target.closest('.price');
        if(target){
            ourServices.scrollIntoView({block: "start", behavior: "smooth"});
        } else{
            let target = event.target;
                target = target.closest('.answer');
            if(target){
                question.scrollIntoView({block: "start", behavior: "smooth"});
            } else {
                let target = event.target;
                    target = target.closest('.contacts');
                if(target){
                    ourContacts.scrollIntoView({block: "start", behavior: "smooth"});
                }
            }
        }
    });

    arrowTop.addEventListener('click', ()=>{
        body.scrollIntoView({block: "start", behavior: "smooth"});
    });
    window.addEventListener('scroll', ()=>{
        if(window.pageYOffset > 520){
            arrowTop.removeAttribute('hidden');
        } else if(window.pageYOffset < 520){
            arrowTop.setAttribute('hidden', true);
        }
    });
};
 
export default scroll;