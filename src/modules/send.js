const send = () => {
    const errorMessage = 'Что то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся.';

    const call = document.getElementById('callback');
    const statusMessage = document.createElement('div');

    const name = document.querySelector('.form-control');
    name.id = 'surname';
    const telephone = document.querySelector('.required');
    telephone.id = 'telephone';
    statusMessage.style.cssText = `font-size: 2rem;
    color: grey;`;

    // валидация
    call.addEventListener('input', (event)=> {
        let target = event.target;
        if(target.matches('#surname')){
            target.value = target.value.replace(/[^а-яА-ЯёЁ ]$/, '');
        } else if(target.matches('#telephone')){
            target.value = target.value.replace(/[^+0-9]$/, '');
        }
    });
    
    // отправка данных
    call.addEventListener('submit', (event) => {
        let target = event.target;
        if(target.matches('.modal-callback')){
            formName = target.querySelector('.form-control');
            formPhone = target.querySelector('.required');
        }

        event.preventDefault();
        target.append(statusMessage);
        statusMessage.textContent = loadMessage;
        setTimeout(()=> statusMessage.remove(), 3000);

        const formData = new FormData(target);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body)
                .then((response) => {
                    if(response.status !== 200){
                        throw new Error('status network not 200.');
                    }
                    statusMessage.textContent = successMessage;
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });

        target.querySelector('.form-control').value = '';
        target.querySelector('.required').value = '';

    });
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }; 
};

export default send;