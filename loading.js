window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loader.classList.add('loader-hidden');
    }, 1000); // Shows loader for at least 1 second
    
    loader.addEventListener('transitionend', () => {
        document.body.removeChild(loader);
    });
}); 