const slider = () => {
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