import products from "./products.js";

const loadContent = () => {
    let listContent = document.querySelector('.listTab');
    let iframeInput = document.querySelector('.frame');
    iframeInput.innerHTML = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!ls0x88e2ca55810a493%3A0x4700ddfcbfad6!2schicago+theatre!5e0!3m2!lsen!2sus!4v1388701393606"></iframe>
    `
    products.forEach(item => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('card');
        var { image, _name, details, potentialValue, potentialYield, potentialCash } = item
        newProduct.innerHTML = `
        <div class="listProperty">
          <div class="imgImport"><img src="${image}" alt=""></div>
          <div class="ProperRight">
             <h1 class="allText">${_name}</h1>
             <h4 class="allText">Potential cashflow : $${potentialCash}</h4>
             <h4 class="allText">Potential yield : ${potentialYield}%</h4>
             <h4 class="allText">Potential value : $${potentialValue}</h4>
             <P class="allText">${details}</p>
         </div>
        </div>
        `;
        listContent.appendChild(newProduct);
    })
}
loadContent();

let themeAfter = document.querySelector('.themeAfter');
let themeBefore = document.querySelector('.themeBefore');
let bgColBody = document.querySelector('body');
// let allOfText = document.querySelector('p');


themeAfter.addEventListener('click', () => {
    themeAfter.classList.toggle('active');

    if (themeAfter.classList.contains('active')) {
        let slide = 'translate(23px)';
        localStorage.setItem('slider', slide);
        themeAfter.style.transform = 'translate(23px)';

        let bgTheme = '#000';
        localStorage.setItem('theme', bgTheme);
        bgColBody.style.backgroundColor = '#000';
        themeAfter.style.backgroundColor = '#000';

        let textColor = '#fff';
        localStorage.setItem('textTheme', textColor);
        bgColBody.style.color = '#fff';
        themeAfter.style.backgroundColor ='#fff';



    } else {
        let slide = 'translate(0px)';
        localStorage.setItem('slider', slide);
        themeAfter.style.transform = 'translate(0px)';

        let bgTheme = '#fff';
        localStorage.setItem('theme', bgTheme);
        bgColBody.style.backgroundColor = '#fff';
        bgColBody.style.color = '#000';
        themeBefore.style.backgroundColor = '#fff';



        let textColor = '#000';
        localStorage.setItem('textTheme', textColor);
    }
})

let slideValue = localStorage.getItem('slider');
themeAfter.style.transform = slideValue;

let themeValue = localStorage.getItem('theme');
bgColBody.style.backgroundColor = themeValue;

//for the slide

themeAfter.style.backgroundColor = themeValue;
themeBefore.style.backgroundColor = themeValue;

let allTextValue = localStorage.getItem('textTheme');
bgColBody.style.color = allTextValue

 