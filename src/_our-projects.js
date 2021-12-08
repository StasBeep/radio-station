import {
    ulProjects,
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
    linkFour
} from './_variables.js'

const open = `<svg class="projects-list-li-btn-svg" viewbox="0 0 16 16">
                <g>
                    <path d="M8,13l8-10H0L8,13z" />
                </g>
            </svg>`

const close = `<svg class="projects-list-li-btn-svg" viewbox="0 0 16 16">
                <g>
                    <polygon points="8,3 0,13 16,13"/>
                </g>
            </svg>`

let clickOne = false;
let clickTwo = false;
let clickThree = false;
let clickFour = false;
let shift = true;

btnOne.addEventListener('click', () => {
    clickOne = definitionData('1', clickOne);
});

btnTwo.addEventListener('click', () => {
    clickTwo = definitionData('2', clickTwo);
});

btnThree.addEventListener('click', () => {
    clickThree = definitionData('3', clickThree);
});

btnFour.addEventListener('click', () => {
    clickFour = definitionData('4', clickFour);
});

deleteAnimation();

function definitionData(data, condition) {
    switch (data) {
        case '1':
            openingInformation(btnOne, descrOne, linkOne, condition);
            break;
        case '2':
            openingInformation(btnTwo, descrTwo, linkTwo, condition);
            break;
        case '3':
            openingInformation(btnThree, descrThree, linkThree, condition);
            break;
        case '4':
            openingInformation(btnFour, descrFour, linkFour, condition);
            break;
    }
    return !condition;
}

function openingInformation(btn, descr, link, condition) {
    if (condition) {
        btn.innerHTML = `${open}`;
        descr.style.display = 'none';
        link.style.display = 'none';
    } else {
        btn.innerHTML = `${close}`;
        descr.style.display = 'block';
        link.style.display = 'block';
    }
}

function deleteAnimation() {
    if (window.innerWidth > '599') {
        setInterval(() => {
            if (shift) {
                ulProjects[0].style.order = '4';
                ulProjects[1].style.order = '3';
                ulProjects[2].style.order = '2';
                ulProjects[3].style.order = '1';
                shift = !shift;
            } else {
                ulProjects[0].style.order = '1';
                ulProjects[1].style.order = '2';
                ulProjects[2].style.order = '3';
                ulProjects[3].style.order = '4';
                shift = !shift;
            }
        }, 30000);
    } else {
        console.log('10');
    }
}