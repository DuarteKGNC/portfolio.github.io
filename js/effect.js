document.addEventListener('DOMContentLoaded', function() {
    const elem = document.getElementById('animated-text');
    const originalText = elem.innerText;
    elem.innerText = '';  

    let i = 0;
    function typeWriter() {

        if (i < originalText.length) {
            const currentChar = originalText[i] === ' ' ? '&nbsp;' : originalText[i];
            elem.innerHTML += currentChar;

            let delay = 80;
            if (originalText[i] === ' ') {
                delay = 50;  
            } else if (originalText[i] === '!') {
                delay = 330; 
            }

            i++;
            setTimeout(typeWriter, delay);
        }
    }

    typeWriter();
});
