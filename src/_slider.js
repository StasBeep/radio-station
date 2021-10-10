import {firstElementLoaded} from './_slider.operation.js'

//! массив из объектов slider (потом через API)
const arrObjSlider = [{
        image: 'https://i.pinimg.com/originals/e4/9b/c4/e49bc442a5cd920fc72e5105fa7ee52e.png',
        title: 'Title №1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime minus odio harum! Impedit dolore expedita animi ipsam quo, eos amet delectus debitis doloribus praesentium, corporis iusto id blanditiis ? Nihil, dolor. Voluptatum ut vero rerum, asperiores deleniti facere!Natus placeat pariatur enim laudantium ipsum rerum sunt, eum dolorem quod ipsam facilis consequatur harum facere ullam totam sapiente corrupti libero eveniet sequi ?',
        link: 'https://i.pinimg.com/originals/e4/9b/c4/e49bc442a5cd920fc72e5105fa7ee52e.png',
        data: '01.01.2021'
    },
    {
        image: 'https://top10a.ru/wp-content/uploads/2020/01/iwsfp0yhi-scaled.jpg',
        title: 'Title №2',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt aliquam, non excepturi odio dignissimos hic, placeat doloribus error tenetur quidem eveniet facilis corrupti id accusantium impedit eligendi maiores porro quaerat! Quis ipsum vitae laboriosam odit provident omnis molestias eaque, facere quo ad cum eos repellendus, atque maxime, amet pariatur alias quibusdam facilis eligendi mollitia voluptate incidunt tempore. Excepturi, eaque fugit.',
        link: 'https://top10a.ru/wp-content/uploads/2020/01/iwsfp0yhi-scaled.jpg',
        data: '01.02.2021'
    },
    {
        image: 'https://images.wallpaperscraft.ru/image/single/origami_korabliki_kosmos_129546_300x168.jpg',
        title: 'Title №3',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt aliquam, non excepturi odio dignissimos hic, placeat doloribus error tenetur quidem eveniet facilis corrupti id accusantium impedit eligendi maiores porro quaerat! Quis ipsum vitae laboriosam odit provident omnis molestias eaque, facere quo ad cum eos repellendus, atque maxime, amet pariatur alias quibusdam facilis eligendi mollitia voluptate incidunt tempore. Excepturi, eaque fugit.',
        link: '',
        data: '01.02.2021'
    },
    {
        image: 'https://images.wallpaperscraft.ru/image/single/les_tuman_derevia_128751_300x168.jpg',
        title: 'Title №4',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt aliquam, non excepturi odio dignissimos hic, placeat doloribus error tenetur quidem eveniet facilis corrupti id accusantium impedit eligendi maiores porro quaerat! Quis ipsum vitae laboriosam odit provident omnis molestias eaque, facere quo ad cum eos repellendus, atque maxime, amet pariatur alias quibusdam facilis eligendi mollitia voluptate incidunt tempore. Excepturi, eaque fugit.',
        link: 'https://images.wallpaperscraft.ru/image/single/les_tuman_derevia_128751_300x168.jpg',
        data: '01.04.2021'
    },
    {
        image: 'https://images.wallpaperscraft.ru/image/single/akula_delfin_more_130036_300x168.jpg',
        title: 'Title №5',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt aliquam, non excepturi odio dignissimos hic, placeat doloribus error tenetur quidem eveniet facilis corrupti id accusantium impedit eligendi maiores porro quaerat! Quis ipsum vitae laboriosam odit provident omnis molestias eaque, facere quo ad cum eos repellendus, atque maxime, amet pariatur alias quibusdam facilis eligendi mollitia voluptate incidunt tempore. Excepturi, eaque fugit.',
        link: 'https://images.wallpaperscraft.ru/image/single/akula_delfin_more_130036_300x168.jpg',
        data: ''
    }
];

document.addEventListener('DOMContentLoaded', firstElementLoaded(arrObjSlider[0]));