//Task 1
const block1 = document.querySelector('.block_1');

block1.onclick = function (event) {
    let x = event.offsetX == undefined ? event.layerX : event.offsetX;
    let y = event.offsetY == undefined ? event.layerY : event.offsetY;
    let result = document.querySelector(".block_1-coordinates");
    result.textContent = `X ${x} : Y ${y}`; 
};

//Task  2 

const folder = document.querySelector('.block_2');
folder.onclick = function(){
    folder.classList.toggle('open');
};

//Task 3

const wrapper = document.querySelector(".task3_wrapper");
//Creating little spartans
function goSparta() {
    for (let i = 0; i < 245; i++) {
        let spartan = document.createElement("div");
        spartan.classList.add("square");
        wrapper.appendChild(spartan);
    }
}

goSparta();

//Changing little spartans

const onClick = event => {
    if (event.target !== event.currentTarget) {
        event.target.classList.add('round');

        setTimeout(() => {
            event.target.classList.remove('round');
        }, 2000);
    }
};

wrapper.addEventListener('click', onClick);

//Task 4 

//Задача 4. Создайте div размерами ширина – 100%, высота 250px. Ниже добавьте 4-5 изображений с одинаковыми классами, разного размера. 
//Добавьте событие, которое будет при клике на изображении устанавливать его фоном блока div со свойством background-size: contain. 

const setCover = event => {
    if(event.target !== event.currentTarget){

        event.target.classList.toggle('.block_4');

    }
};

