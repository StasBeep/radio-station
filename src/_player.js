import { inpVolume } from "./_variables.js";

// Состояние изменения цвета ползунка
inpVolume.addEventListener('input', () => {
    const value = inpVolume.value;
    inpVolume.style.background = `linear-gradient(to right, #181818 ${value}%, #181818 ${value}%, #888888 ${value}%, #888888 100%)`
});