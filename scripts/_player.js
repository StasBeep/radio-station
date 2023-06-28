import {
  btnPlayPause,
  btnSound,
  inpVolume
} from "./_variables.js";
import {
  playMusic,
  clickChangesVolume,
  changeLevelVolume
} from "./_functions.js";

// Ключ отображения работы звукового потока
let audioStream = false;
let statusVolume = {
  sound: true,
  saveLevelVolume: Number(inpVolume.value)
}; // статус on/off звука

// Запуск/остановка звукового потока
btnPlayPause.addEventListener('click', () => {
  audioStream = playMusic(audioStream);
});

// Отключение/включение звука у потока
btnSound.addEventListener('click', () => {
  statusVolume = clickChangesVolume(statusVolume);
});

// Состояние изменения цвета ползунка
inpVolume.addEventListener('input', () => {
  statusVolume.saveLevelVolume = changeLevelVolume(inpVolume.value);
});
