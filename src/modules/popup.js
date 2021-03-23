const popup = () =>{
    const btnCall = (document.querySelectorAll('div.relative a')[1]),
        modalCallback = document.getElementById('callback'),
        overlay = document.querySelector('.modal-overlay'),
        body = document.querySelector('body'),
        modalClose = document.querySelector('div.modal-close img');

    modalCallback.style.display = 'none';
    overlay.style.display = 'none';

    modalClose.classList.add('popupCloseBtn');
    btnCall.classList.add('btnOpen');

    body.addEventListener('click', (event) => {
        let target = event.target;
        if(target.classList.contains('btnOpen')){
            modalCallback.style.display ='block';
            overlay.style.display = 'block';
        } else if(target.classList.contains('popupCloseBtn')){
            modalCallback.style.display ='none';
            overlay.style.display = 'none';
        }
    });

    overlay.addEventListener('click', (event) => {
        let target = event.target;
            target = target.closest('#callback');
            if(!target){
                modalCallback.style.display ='none';
                overlay.style.display = 'none';
            }
        });


};


export default popup;