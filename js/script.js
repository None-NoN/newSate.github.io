let headerNav = document.getElementById('header-nav');

headerNav.addEventListener('mouseover', function(event) {
    let target = event.target;
    if (target.tagName == "A" || target.tagName == "IMG") {
        let img;
        if (target.tagName == "A") {
            img = target.lastChild;
        } else {
            img = target;
        }
        if (img.src.includes("internet")) {
            img.src = "img/internet purple.png";
        } else if (img.src.includes("paper")) {
            img.src= "img/paper purple.png";
        } else if (img.src.includes("plane")) {
            img.src= "img/plane purple.png";
        } else if (img.src.includes("map")) {
            img.src= "img/map mark purple.png";
        }
    }
});

headerNav.addEventListener('mouseout', function(event) {
    let target = event.target;
    if (target.tagName == "A") {
        let img = target.lastChild;
        if (img.src.includes("internet")) {
            img.src = "img/internet gray.png";
        } else if (img.src.includes("paper")) {
            img.src= "img/paper gray.png";
        } else if (img.src.includes("plane")) {
            img.src= "img/plane gray.png";
        } else if (img.src.includes("map")) {
            img.src= "img/map mark gray.png";
        }
    }
});


let width = 240; // ширина изображения с учетом отступов
let count = 1; // кол-во слайдеров, на которые передвигаемся за раз
let positionCount = 0; // кол-во слайдеров, относительно начальной позиции (при 2 точке будет 1, при 3 - 2)
let position = 0; // начальная позиция

let list = document.querySelector('.team-members'); // слайдер
let dots = document.querySelectorAll('.dots-elem'); // точки

function checkActive() { // проверка класса active для изменения цвета
    dots.forEach((item, index, array) => {
        if (item.classList.contains("active")) {
            item.classList.remove('active');
        }
    });
    
    event.target.classList.add("active");
}

function showSlide(num) { // основной код сайдера
    position = width * count; // вычесление px 
    switch(num) {
        case 1: 
            checkActive();
            list.style.marginLeft = "0px"; // началальная точка, поэтому 0px
            break;

        case 2:
            positionCount = 1; // вычесление на сколько нужно продвинуться относительно 0 позиции
            position = position * positionCount;
            checkActive();
            list.style.marginLeft = -position + "px"; // двигаемся справа на лево, поэтому -position
            break;

        case 3: 
            positionCount = 2;
            position = position * positionCount;
            checkActive();
            list.style.marginLeft = -position + "px";
            break;

        case 4: 
            positionCount = 3;
            position = position * positionCount;
            checkActive();
            list.style.marginLeft = -position + "px";
            break;
    }
}
