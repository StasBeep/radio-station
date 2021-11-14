import {
    feedBtn,
    feedCheckBox
} from './_variables.js';

feedCheckBox.addEventListener('click', () => {
    if (feedCheckBox.checked) {
        feedBtn[0].disabled = false;
    } else {
        feedBtn[0].disabled = true;
    }
});