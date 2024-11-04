const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.subnav1 a');
const footer = document.getElementById('end');

function removeActiveClasses() {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
}

function addActiveClass(id) {
  const activeLink = document.querySelector(`.subnav1 a[href="#${id}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

const observerOptions = {
  threshold: 0.6
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      removeActiveClasses();
      addActiveClass(entry.target.id);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

const footerObserver = new IntersectionObserver(footerObserverCallback, { 
  threshold: 0.01
});

const footerObserverCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      removeActiveClasses();
    }
  });
};


footerObserver.observe(footer);