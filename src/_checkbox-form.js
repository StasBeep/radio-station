import { explanation, explFile } from "./_variables.js";

explanation.addEventListener('click', () => {
    explanation.style.display = 'none';
    explFile.style.display = 'block';
});

explFile.addEventListener('click', () => {
    explFile.style.display = 'none';
    explanation.style.display = 'block';
});