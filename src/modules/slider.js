const slider = () => {
    /*
    const itemRelative = (document.querySelector('.top-slider')),
        container = (itemRelative.querySelectorAll('.container')),
        h1 = document.querySelectorAll('.big'),
        //text = container.querySelector('.text'),
        table = document.querySelector('.table'),
        tables1 = itemRelative.querySelectorAll('.table'),
        relative = itemRelative.querySelectorAll('.relative'),
        images = document.querySelector('div.top-slider style');
    
    //console.log(itemRelative);
    //console.log(container);
    //console.log(h1[0]);
    //console.log(table);
    console.log(tables1);
    console.log(relative);
    //console.log(relative);
    console.log(images);

    itemRelative.id = 'idName';
    //relative.id = 'rel';
    let style1 = relative[0].style;
    console.log(style1.background);
       
        
    table.style.visibility = 'visible';
    table.style.opacity = 1;
    //h1[0].setAttribute('style', 'opacity = 0')
    relative[0].style.overflow = 'inherit'; //скрыть
    //relative[0].style.background = 'inherit';

    let currentSlide = 0;
    const prevSlide = () => {
        //relative[currentSlide].style.overflow = 'hidden';
        relative[currentSlide].style.visibility = 'hidden';
        //relative[currentSlide].style.opacity = 0;


        //relative[currentSlide].style.background = 'inherit';
        //tables1[currentSlide].style.visibility = 'hidden';
        //tables1[currentSlide].style.opacity = 0;
    };
    const nextSlide = () => {
        //relative[currentSlide].style.overflow = 'inherit';
        //relative[currentSlide].style.background = 'inherit';
        relative[currentSlide].style.visibility = 'visible';
        //relative[currentSlide].style.opacity = 1;

    }; 

    const autoPlaySlide = () => {
        prevSlide();
        currentSlide++;
        if(currentSlide >= tables1.length){
            currentSlide = 0;
        }
        nextSlide();
    };

    const startSlide = () => {
        setInterval(autoPlaySlide, 5000);
    };
    startSlide();
    */
    const topSlider = document.querySelector('.top-slider'),
        itemRelative = topSlider.querySelectorAll('.relative'),
        tables = topSlider.querySelectorAll('.table');

    console.log(topSlider);
    console.log(itemRelative);
    console.log(tables);

    let currentSlide = 0; 
    tables[0].style.visibility = 'visible';
    tables[0].style.opacity = '1';
    itemRelative[0].style.display = 'block';

    const prevSlide = () => {
        tables[currentSlide].style.visibility = 'hidden';
        tables[currentSlide].style.opacity = '0';
        itemRelative[currentSlide].style.display = 'none';
    };
    const nextSlide = () => {
        tables[currentSlide].style.visibility = 'visible';
        tables[currentSlide].style.opacity = '1';
        //tables[currentSlide].innerHTML = tables[0];
        itemRelative[currentSlide].style.display = 'block';
    };
    const autoPlaySlide = () => {
        prevSlide();
        currentSlide++;
        if(currentSlide >= tables.length){
            currentSlide = 0;
        }
        nextSlide();
    };
    const startSlide = () => {
        setInterval(autoPlaySlide, 3000);
    };
    startSlide();
};

export default slider;