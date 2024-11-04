var modal = document.getElementById("imgModal");
var modalImg = document.getElementById("modalImg");
var closeModal = document.getElementById("closeModal");

var certif_certificates = document.querySelectorAll('.certif img');
var certif_portfolio = document.querySelectorAll('.certificate img')
var pro_projects = document.querySelectorAll('.left img');
var pro_portfolio = document.querySelectorAll('.project img');
var edu = document.querySelectorAll('.left img');
var pp = document.querySelectorAll('.main-top .right img');

certif_certificates.forEach(function(img) {
  img.addEventListener('click', function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });
});

certif_portfolio.forEach(function(img) {
  img.addEventListener('click', function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });
});

pro_projects.forEach(function(img) {
  img.addEventListener('click', function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });
});

pro_portfolio.forEach(function(img) {
  img.addEventListener('click', function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });
});

edu.forEach(function(img) {
  img.addEventListener('click', function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });
});

pp.forEach(function(img) {
  img.addEventListener('click', function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });
});

closeModal.onclick = function() {
  modal.style.display = "none";
  document.body.classList.remove('blur');
};

// modal.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//     document.body.classList.remove('blur');
//   }
// };