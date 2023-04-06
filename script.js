// var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
// var interval;

// // this code when you work only given coordinate when you click tag
// // for(var i=0; i<navMenuAnchorTags.length; i++) {
// //     navMenuAnchorTags[i].addEventListener('click', function(event){
// //         event.preventDefault();
// //         var targetSectionId = this.textContent.trim().toLowerCase();
// //         var targetSection = document.getElementById(targetSectionId);

// //        interval = setInterval(scrollVertically, 20, targetSection);
// //     //  1st  we can also write the above line as:
// //     //    interval = setInterval(function(){scrollVertically(targetSection)}, 20);

// //     // 2nd we can also write the above line as:

// //     // var interval = setInterval(function(){
// //     //     var targetSectionCoordinates = targetSection.getBoundingClientRect();
// //     //     if(targetSectionCoordinates.top <= 0) {
// //     //         clearInterval(interval);
// //     //         return;
// //     //     }
// //     //     window.scrollBy(0, 50);
// //     // }, 20);

// //     });
// // }

// // function scrollVertically(targetSection) {
// //     var targetSectionCoordinates = targetSection.getBoundingClientRect();
// //     if(targetSectionCoordinates.top <= 0) {
// //         clearInterval(interval);
// //         return;
// //     }
// //     window.scrollBy(0, 50);
// // }

// // for about section
// navMenuAnchorTags[1].addEventListener("click", function (event) {
//   event.preventDefault();
//   var targetPos = 130;
//   var currentPos = 0;
//   var interval = setInterval(function () {
//     if (currentPos >= targetPos) {
//       clearInterval(interval);
//       return;
//     }
//     currentPos += 50;
//     window.scrollBy(0, 50);
//   }, 30);
// });

// // for skills section
// navMenuAnchorTags[2].addEventListener("click", function (event) {
//   event.preventDefault();
//   var targetPos = 800;
//   var currentPos = 0;
//   var interval = setInterval(function () {
//     if (currentPos >= targetPos) {
//       clearInterval(interval);
//       return;
//     }
//     currentPos += 50;
//     window.scrollBy(0, 50);
//   }, 20);
// });

// // for experience section
// navMenuAnchorTags[3].addEventListener("click", function (event) {
//   event.preventDefault();
//   var targetPos = 1450;
//   var currentPos = 0;
//   var interval = setInterval(function () {
//     if (currentPos >= targetPos) {
//       clearInterval(interval);
//       return;
//     }
//     currentPos += 50;
//     window.scrollBy(0, 50);
//   }, 20);
// });

// // for education section
// navMenuAnchorTags[4].addEventListener("click", function (event) {
//   event.preventDefault();
//   var targetPos = 2250;
//   var currentPos = 0;
//   var interval = setInterval(function () {
//     if (currentPos >= targetPos) {
//       clearInterval(interval);
//       return;
//     }
//     currentPos += 50;
//     window.scrollBy(0, 50);
//   }, 20);
// });

// // for portfolio section
// navMenuAnchorTags[5].addEventListener("click", function (event) {
//   event.preventDefault();
//   var targetPos = 3060;
//   var currentPos = 0;
//   var interval = setInterval(function () {
//     if (currentPos >= targetPos) {
//       clearInterval(interval);
//       return;
//     }
//     currentPos += 50;
//     window.scrollBy(0, 50);
//   }, 20);
// });

// // for contact section

function onClickMenu() {
    location.href ='https://clinquant-mermaid-09750f.netlify.app/';
 console.log("clicked");
}

// for calculator 

function onclickCalculator(){
    location.href ='https://fluffy-dango-534713.netlify.app/';
}