document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

document.addEventListener('selectstart', function(event) {
  event.preventDefault();
});

document.addEventListener('dragstart', function(event) {
  event.preventDefault();
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'u' || event.ctrlKey && event.key === 's') {
    event.preventDefault();
  }
});

// document.getElementById("element").addEventListener("contextmenu", function(event) {
//   event.preventDefault();
// });