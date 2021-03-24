const popup = () =>{
    const btnCall = (document.querySelectorAll('div.relative a')[1]),
        modalCallback = document.getElementById('callback'),
        overlay = document.querySelector('.modal-overlay'),
        body = document.querySelector('body'),
        modalClose = document.querySelector('div.modal-close img');

    const close = () => {
        modalCallback.style.display = 'none';
        overlay.style.display = 'none';
    };
    const open = () => {
        modalCallback.style.display ='block';
        overlay.style.display = 'block';
    };

    modalClose.classList.add('popupCloseBtn');
    btnCall.classList.add('btnOpen');

    body.addEventListener('click', (event) => {
        let target = event.target;
        if(target.classList.contains('btnOpen')){
            open();
        } else if(target.classList.contains('button-services')){
            open();
        } else if(target.classList.contains('popupCloseBtn')){
            close();
        }
    });

    overlay.addEventListener('click', (event) => {
        let target = event.target;
            target = target.closest('#callback');
            if(!target){
                close();
            }
        });


};


export default popup;