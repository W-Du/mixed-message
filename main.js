import { colorList } from './colorData.js';
//var colorList = require('./colorData').colorList;


//targets
const button = document.getElementById('button');
const palette = document.getElementById('palette');
const colorName = document.getElementById('name');
const colorIntro = document.getElementById('introduction');

button.addEventListener('click', getMessage);
colorName.addEventListener('click', toggleIntro);

//fuctions

function initiateColor() {
    let index = Math.floor(Math.random()*colorList.length);
    let colorObj = colorList[index];
    displayInfo(colorObj);
  }

function getMessage() {

    //get current color index
    let name = colorName.value;
    if(!name) {
        initiateColor();
    }
    let year = decomposeName(name);
    let oldIndex = findColorIndex(year);    

    //get random color different from current
    let newIndex; 
    do {
        newIndex = Math.floor(Math.random()*colorList.length);
    } while (newIndex === oldIndex);

    //set html
    let newColor = colorList[newIndex];
    displayInfo(newColor);
}

function toggleIntro(evt){
    if(colorIntro.style.display==='none'){
        colorIntro.style.display = 'block';
    } else {
        colorIntro.style.display = 'none';
    }
}


//helper functions

function composeName(year, name){
    return `${year}: ${name}`;
}

function decomposeName(str) {
    if(str.includes(':')){
        return str.split(":")[0]
    } else {
        console.log('name invalid');
    }
}

function findColorIndex(y) {
    const index = colorList.findIndex(color => 
        color.year === y);
    return index;
}

function displayInfo(colorObject) {
    colorName.innerHTML = composeName(colorObject.year, colorObject.name);
    colorName.style.transitionDuration = '500ms';
    colorIntro.innerHTML = colorObject.intro;
    palette.style.backgroundColor = colorObject.color;
    palette.style.transitionDuration = '500ms';
}
