//Created a constant to store all the "parallax" class layers 
const parallaxEl = document.querySelectorAll(".parallax");

//Created two values that represent the x axis and the y axis so we can dictate the distance each element will be moved depending on the mouse coordinates inside the page
let xValue = 0;
let yValue = 0;

let rotateDegree = 0; //Needs to be updated as we move the mouse

function update(cursorPosition) {
  //We get an array (node list) of elements from querySeelctorAll so in order to modify the translate values (to move the elements) we need to iterate through each one of them

  parallaxEl.forEach((element) => {
    let speedx = element.dataset.speedx; //Dataset allows us to acces info from custom data attribute
    let speedy = element.dataset.speedy;
    let speedz = element.dataset.speedz;
    let rotateSpeed = element.dataset.rotation;

    //check if layers are on right side or left side
    // Will return 1 if its on left or -1 if on right
    let isInLeft = parseFloat(getComputedStyle(element).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue = (cursorPosition - parseFloat(getComputedStyle(element).left)) * isInLeft * 0.1;

    element.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg)`; //We add -xValue so elements move opposite direction of mouse
  })
}

update(0);

//The layers wil be moving as long as we move the mouse, those two variables need to be updated every time we move the mouse, for this we add an eventlistener of mousemvoe to the window
window.addEventListener("mousemove", (e) => {
  //We need to get the mouse coordinates inside the window, we get that from the event object which is the argument that the event passes to the callback function
  //Shows x coordinates from mousemove event relative to top left corner
  xValue = e.clientX - (window.innerWidth / 2); //We get the coordinates from the center by substracting half of the window width
  yValue = e.clientY - (window.innerHeight / 2);

  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

  update(e.clientX);

});

// ========= Swiper js ==============

var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false
  },
  //autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

