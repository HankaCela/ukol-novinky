const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = '#e9e9e9';

const newsElement = document.querySelector('.news');
newsElement.style.backgroundColor = 'white';
newsElement.style.maxWidth = '60rem';

const headingElement = document.querySelector('h1');
headingElement.classList.add('news__title');
headingElement.textContent = 'Aktuální novinky';

const firstPostElement = document.getElementById('zprava1');
firstPostElement.classList.add('post--main');

const thirdPostImage = document.querySelector('#zprava3 img');
thirdPostImage.src = 'images/zprava3-novy.jpg';