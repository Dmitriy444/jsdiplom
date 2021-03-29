const send = () => {
    const errorMessage = 'Ошибка',
        loadMessage = 'Идёт отправка',
        successMessage = 'Отправлено';

    const call = document.getElementById('callback');
    const statusMessage = document.createElement('div');
    const form = document.querySelector('.rf form[name="form-callback"]');

    const name = document.querySelector('.form-control');
    name.id = 'surname';
    name.setAttribute('required', true);
    const telephone = document.querySelector('.required');
    telephone.id = 'telephone';
    telephone.setAttribute('required', true);
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
    call.addEventListener('submit', (event)=>{
        event.preventDefault();
        call.append(statusMessage);
        statusMessage.textContent = loadMessage;
        setTimeout(()=> statusMessage.remove(), 3000);
        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body, 
            ()=>{
                statusMessage.textContent = successMessage;
            },
            (error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            }
        );

        form.querySelector('.form-control').value = '';
        form.querySelector('.required').value = '';
    });

    const postData = (body, outputData, errorData) => {
        const request  = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if(request.readyState !== 4){
                return;
            }
            if(request.status === 200){
                outputData();
            } else {
                errorData(request.status);
            }
        });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(body));
    };
};

export default send;