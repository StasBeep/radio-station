let explanation = document.querySelector('.connection-foundation-form-explanation');
let explFile = document.querySelector('.connection-foundation-form-file');

explanation.addEventListener('click', () => {
    explanation.style.display = 'none';
    explFile.style.display = 'block';
});

explFile.addEventListener('click', () => {
    explFile.style.display = 'none';
    explanation.style.display = 'block';
});