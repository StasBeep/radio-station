// * Переменные элементов, для смены языка
const menuEl1 = document.getElementById('el-menu-1');
const menuEl2 = document.getElementById('el-menu-2');
const menuEl3 = document.getElementById('el-menu-3');
const menuEl4 = document.getElementById('el-menu-4');
const langBtn = document.getElementById('languages-button');
const contDesc = document.getElementById('content-description');
const contCard1 = document.getElementById('card-words-1');
const contCard2 = document.getElementById('card-words-2');
const contCard3 = document.getElementById('card-words-3');
const projectTitleOne = document.getElementById('project-title-one');
const projectTitleTwo = document.getElementById('project-title-two');
const projectTitleThree = document.getElementById('project-title-three');
const projectTitleFour = document.getElementById('project-title-four');
const broadcastTitle = document.getElementById('broadcast-title');
const feedTitle = document.getElementsByClassName('feedback-form-title')[0];
const feedLabel = document.getElementsByClassName('feedback-form-subtitle');
const feedProposal = document.getElementsByClassName('feedback-form-proposal');
const feedBtn = document.getElementsByClassName('feedback-form-btn');
const feedExp = document.getElementsByClassName('feedback-explanations');
const feedFile = document.getElementsByClassName('feedback-form-file')[0];
const feedAgree = document.getElementById('politics-agree');
const feedPolicyLink = document.getElementById('politics-link');

// * Переменные player
const playlistTitle = document.getElementById('playlist-title');
const playlistList = document.getElementById('playlist-list');
const numPlay = document.getElementById('control-play');
const numStop = document.getElementById('control-stop');

const audioEl = document.getElementById('audioElem');

// * Переменные slider
// Ссылка положение json-файла на gitub
const API_slider = 'https://raw.githubusercontent.com/StasBeep/radio-station/slider-click/sliderObj.json';

const sliderImg = document.getElementById('slider-img');
const sliderTitle = document.getElementById('slider-title');
const sliderText = document.getElementById('slider-text');
const sliderLink = document.getElementById('slider-link');
const sliderData = document.getElementById('slider-data');

const sliderImg1 = document.getElementById('slider-img-1');
const sliderImg3 = document.getElementById('slider-img-3');

const sliderTitle1 = document.getElementById('slider-title-1');
const sliderTitle3 = document.getElementById('slider-title-3');

const sliderLink1 = document.getElementById('slider-link-1');
const sliderLink3 = document.getElementById('slider-link-3');

const sliderBack = document.getElementById('slider-back');
const sliderForward = document.getElementById('slider-forward');

// * Переменные our-project
const ulProjects = document.getElementsByClassName('projects-list-li');
const projectTitle = document.getElementById('project-title');
const btnOne = document.getElementById('project-btn-one');
const btnTwo = document.getElementById('project-btn-two');
const btnThree = document.getElementById('project-btn-three');
const btnFour = document.getElementById('project-btn-four');
const descrOne = document.getElementById('project-description-one');
const descrTwo = document.getElementById('project-description-two');
const descrThree = document.getElementById('project-description-three');
const descrFour = document.getElementById('project-description-four');
const linkOne = document.getElementById('project-details-one');
const linkTwo = document.getElementById('project-details-two');
const linkThree = document.getElementById('project-details-three');
const linkFour = document.getElementById('project-details-four');

// * Переменные form -> checkbox
const feedCheckBox = document.getElementById('politics');

// * Переменные блока footer
const footerYear = document.getElementById('footer-year');

// * Мобильное меню
const menuLink = document.getElementsByClassName('fixed-menu-list')[0];
const menuSocial = document.getElementsByClassName('fixed-menu-social')[0];
const checkEl = document.getElementById('checkbox');

export {
    numPlay,
    numStop,
    audioEl,
    playlistTitle,
    playlistList,
    API_slider,
    sliderImg,
    sliderImg1,
    sliderImg3,
    sliderLink1,
    sliderLink3,
    sliderTitle1,
    sliderTitle3,
    sliderTitle,
    sliderText,
    sliderLink,
    sliderData,
    sliderBack,
    sliderForward,
    menuEl1,
    menuEl2,
    menuEl3,
    menuEl4,
    langBtn,
    contDesc,
    contCard1,
    contCard2,
    contCard3,
    ulProjects,
    projectTitle,
    btnOne,
    btnTwo,
    btnThree,
    btnFour,
    descrOne,
    descrTwo,
    descrThree,
    descrFour,
    linkOne,
    linkTwo,
    linkThree,
    linkFour,
    projectTitleOne,
    projectTitleTwo,
    projectTitleThree,
    projectTitleFour,
    broadcastTitle,
    feedExp,
    feedBtn,
    feedLabel,
    feedTitle,
    feedProposal,
    feedFile,
    feedAgree,
    feedPolicyLink,
    feedCheckBox,
    footerYear,
    menuLink,
    menuSocial,
    checkEl
}