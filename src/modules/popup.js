const popup = () =>{
    const btnCall = (document.querySelectorAll('div.relative a')[1]),
        modalCallback = document.getElementById('callback'),
        overlay = document.querySelector('.modal-overlay');

    modalCallback.style.display = 'none';
    overlay.style.display = 'none';

    btnCall.addEventListener('click', () => {
        modalCallback.style.display = modalCallback.style.display === 'none' ? 'block' : 'none';
        overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    });
};


export default popup;