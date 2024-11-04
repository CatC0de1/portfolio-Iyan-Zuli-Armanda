// document.addEventListener("DOMContentLoaded", function () {
//   const body = document.querySelector('body');

//   body.classList.add('fade-in');

//   document.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', function (e) {
//       e.preventDefault();
//       const href = this.getAttribute('href');

//       body.classList.add('fade-out');

//       setTimeout(() => {
//         window.location.href = href;
//       }, 100);
//     });
//   });
// });

// window.addEventListener('DOMContentLoaded', function() {
//   const currentPath = window.location.pathname;
//   const background = document.getElementById('background');

//   if (currentPath === '/') {
//     background.style.backgroundImage = "url('/images/ngoding.jpg')";
//   // } else if (currentPath === '/about' || currentPath === '/credit' || currentPath === '/privacy-polity') {
//   //   background.style.backgroundImage = "url('/images/coding.jpg')";
//   // } else if (currentPath === '/cv') {
//   //   background.style.backgroundImage = "";
//   //   background.style.backdropFilter = 'blur(20px)';
//   }
// });