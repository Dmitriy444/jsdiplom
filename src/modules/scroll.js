const scroll = () => {
    const arrowTop = document.querySelector('.up'),
        body = document.querySelector('body');

    arrowTop.setAttribute('hidden', true);

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