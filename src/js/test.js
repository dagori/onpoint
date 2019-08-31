
// const slider = document.querySelector('.slider');
// const vertical = document.querySelector('.vertical-container');
// const horizontal = document.querySelector('.horizontal-container');
// const vericalSlides = vertical.querySelectorAll('.slide');
// const radio = document.querySelector('.switcher-radio');
// const radioItem = radio.querySelectorAll('input');
// const scale = document.querySelector('.switcher-slider__scale');
// const thumb = document.querySelector('.switcher-slider__thumb');
// var oldIndex = 0;
// var position = 0;
// horizontal.style.width = (parseFloat(getComputedStyle(slider).width) * horizontal.children.length) + 'px';
// var verticalStep = slider.offsetHeight;
//
// document.ondragstart = function() {
//   return false;
// };
//
// function getCoords(elem) {
//   var coords = elem.getBoundingClientRect();
//   return {
//     left: coords.left + pageXOffset,
//     top: coords.top + pageYOffset,
//     right: coords.right + pageXOffset,
//     bottom: coords.bottom + pageYOffset
//   }
// }
//
// // Передвинуть горизонтальный слайдер
// function moveHorizontalSlides() {
//   var currentPos = parseFloat(getComputedStyle(thumb).left);
//   var width = scale.offsetWidth;
//   var step = slider.offsetWidth;
//   var division = width/4;
//   return (function() {
//     if(currentPos > division) {
//       horizontal.style.transform = `translateX(-${ step}px)`;
//     }
//     if(currentPos > width - division) {
//       horizontal.style.transform = `translateX(-${step + step}px)`;
//     }
//     if(currentPos < division) {
//       horizontal.style.transform = `translateX(0px)`;
//     }
//   })();
// }
//
// thumb.onmousedown = function(e) {
//   var thumbPos = getCoords(thumb);
//   var scalePos = getCoords(scale);
//   var shiftX = e.pageX - thumbPos.left;
//   thumb.style.cursor = 'grabbing';
//   document.onmousemove = function(e) {
//     var newPos =  e.pageX - scalePos.left - shiftX;
//     thumb.style.left = Math.max(0, Math.min(newPos, scale.offsetWidth - thumb.offsetWidth)) + 'px';
//     moveHorizontalSlides();
//   }
//   document.onmouseup = function() {
//     document.onmousemove = null;
//     thumb.onmouseup = null;
//     thumb.style.cursor = 'grab';
//   }
// }
//
// function changeSlideDecoration(indexFrom) {
//   if(!oldIndex) {
//     vericalSlides[0].classList.remove('next');
//     vericalSlides[1].style.backgroundPosition = 'center 20%, center';
//   }
//   if(oldIndex === 2) {
//     vericalSlides[1].style.backgroundPosition = 'center 50%, center';
//   }
//   if(!indexFrom) {
//     vericalSlides[0].classList.add('next');
//   }
// }
//
// //Передвинуть вертикальный слайдер
// radio.addEventListener('change', (e) => {
//   let currentRadioIndex = Array.from(radioItem).indexOf(e.target);
//   position = verticalStep * currentRadioIndex;
//   vertical.style.transform = `translateY(${-position}px)`;
//   changeSlideDecoration(currentRadioIndex);
//   var text = 'было: ' + oldIndex + ', видим: ' + currentRadioIndex;
//   document.querySelector('button').textContent = document.querySelector('button').textContent + "  " + text;
//   oldIndex = currentRadioIndex;
// });
//
// function moveVerticalSlides(indexFrom) {
//   changeSlideDecoration(indexFrom);
//   ///////////////////////////////////////
//
//   ///////////////////////////////////////
//   oldIndex = indexFrom;
// };
// var start;
// var diff;
// vertical.addEventListener('touchstart', (e) => {
//   var slide = e.target.closest('.slide');
//   if(!slide) return;
//   //var slideIndex = Array.from(vericalSlides).indexOf(slide);
//   start = e.pageY;
//   vertical.addEventListener('toutchend', (e) => {
//     diff = start - e.pageY;
//     if(Math.abs(diff) < 100 || !slide) return;
//           var text = 'было: ' + oldIndex + ', diff: ' + diff;
//     if(diff < 0) {
//
//       document.querySelector('button').textContent = document.querySelector('button').textContent + "  " + text;
//       position = Math.min(0,  position + verticalStep);
//       oldIndex=Math.max(oldIndex-1, 0);
//       console.log(position);
//     }
//     if(diff > 0) {
//
//       document.querySelector('button').textContent = document.querySelector('button').textContent + "  " + text;
//       position = Math.max(-slider*vericalSlides.length-1, position - verticalStep);
//       oldIndex=Math.min(oldIndex+1, vericalSlides.length-1);
//         console.log(position);
//     }
//     vertical.style.transform = `translateY(${position}px)`;
//     radioItem[oldIndex].checked = true;
//
//   });
// });
// document.querySelector('button').onclick = function() {
//   console.log('oldIndex: ' + oldIndex);
// }
