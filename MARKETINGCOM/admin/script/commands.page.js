const options = document.querySelectorAll('.options');

options.forEach(element => {
    if (element.innerText === ' |   |  '|| element.innerText === ' |   ') {
        element.style.display = 'none'
    }
});