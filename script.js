// Scroll to top button functionality
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = '↑';
scrollTopButton.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

// Form validation for all forms on the site
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', function (e) {
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all fields.');
    } else {
      alert('Your message has been sent!');
    }
  });
});

// Smooth scroll for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

// Mobile navigation toggle for smaller screens
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.textContent = '☰';
document.querySelector('header nav').appendChild(navToggle);

const navMenu = document.querySelector('header nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close the menu when an anchor link is clicked
const navLinks = document.querySelectorAll('header nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
