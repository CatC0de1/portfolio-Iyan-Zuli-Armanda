let lastScrollTop = 0;

const navbar = document.getElementById('navbar');
const topRight = document.getElementById('top-right');

const navigation = document.getElementById('subnav1');
// const search = document.getElementById('subnav2');

const darkModeToggle = document.getElementById('dark-mode-toggle');
// const language = document.getElementById('language-toggle');

const navHome = document.getElementById('nav-home');
const navAbout = document.getElementById('nav-about');
const navPortfolio = document.getElementById('nav-portfolio');

// const playButton = document.querySelectorAll('.main-nav svg')
const playButtonOn = document.getElementById('playButtonOn');
const playButtonOff = document.getElementById('playButtonOff');
const backgroundMusic = document.getElementById('backgroundMusic');

const currentPath = window.location.pathname;


playButtonOn.addEventListener('click', toggleMusic);
playButtonOff.addEventListener('click', toggleMusic);

let isPlaying = false;

if (localStorage.getItem('musicPlaying') === 'true') {
  backgroundMusic.play();
  playButtonOn.style.display = 'none';
  playButtonOff.style.display = 'block';
  isPlaying = true;
}

function toggleMusic() {
    if (isPlaying) {
        backgroundMusic.pause();
        playButtonOn.style.display = 'block';
        playButtonOff.style.display = 'none';
        localStorage.setItem('musicPlaying', 'false');
    } else {
        backgroundMusic.play();
        playButtonOn.style.display = 'none';
        playButtonOff.style.display = 'block';
        localStorage.setItem('musicPlaying', 'true');
    }
    isPlaying = !isPlaying;
}


window.addEventListener('DOMContentLoaded', function() {
  if (currentPath === '/') {
    navHome.style.borderWidth = '2px';
    navHome.style.backgroundColor = '#E00000';
    topRight.style.marginTop = '35px';
    darkModeToggle.style.display = 'none';
  } else if (currentPath === '/about') {
    navAbout.style.borderWidth = '2px';
    navAbout.style.backgroundColor = '#E00000';
    topRight.style.marginTop = '30px';
  } else if (currentPath === '/portfolio') {
    navPortfolio.style.borderWidth = '2px';
    navPortfolio.style.backgroundColor = '#E00000';
    navigation.style.display = 'flex';
    topRight.style.marginTop = '80px';
  } else if (currentPath === '/portfolio/projects' || currentPath === '/portfolio/education') {
    topRight.style.marginTop = '25px';
  } else {
    darkModeToggle.style.display = 'none';
    }
});
  
window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    if (currentPath === '/portfolio') {
      navbar.style.top = '-75px';
      topRight.style.top = '-10px';   
    } else {
      navbar.style.top = '-80px';
      topRight.style.top = '-10px';
    }
  } else {
    navbar.style.top = '0';
    topRight.style.top = '60px';
  }
  lastScrollTop = scrollTop;
});


document.addEventListener('DOMContentLoaded', function() {
  const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
  document.body.classList.toggle('dark-mode', darkModeEnabled);
  document.getElementById('darkModeToggle').checked = darkModeEnabled;

  document.getElementById('darkModeToggle').addEventListener('change', function() {
      const isDarkMode = this.checked;
      document.body.classList.toggle('dark-mode', isDarkMode);
      localStorage.setItem('darkMode', isDarkMode);
  });
});
