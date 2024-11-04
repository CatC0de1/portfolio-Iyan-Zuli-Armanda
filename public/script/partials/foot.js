window.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const footer = document.getElementById('footer');
  const backToTop = document.getElementById('back-to-top');
  const lowest = document.getElementById('lowest');
    
  if (currentPath === '/') {
    footer.style.position = 'fixed';
    backToTop.style.display = 'none';
  } else {
    footer.style.position = 'relative';
  }
  
  if (currentPath === '/portfolio' || currentPath === '/portfolio/projects' || currentPath === '/portfolio/certificates' || currentPath === '/about' || currentPath === '/portfolio/education') {
    footer.style.backgroundColor = 'rgb(38, 1, 0)';
    lowest.style.backgroundColor = 'rgb(38, 1, 0)';
  } else {
    lowest.style.display = 'none';
  }
});


window.addEventListener('scroll', function() {
  const backToTop = document.getElementById('back-to-top');
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }

  lastScrollTop = scrollTop;
});
