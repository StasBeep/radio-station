// Для изменения года в конце страницы автоматически
import {
    footerYear
} from "./_variables.js";

const now = new Date().getFullYear();

footerYear.textContent = `2019-${now} by reggaeuniverse.ru`;