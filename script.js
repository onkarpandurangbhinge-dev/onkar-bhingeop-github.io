// Load header
fetch('components/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

// Animations
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    if(sec.getBoundingClientRect().top < window.innerHeight - 100){
      sec.classList.add('visible');
    }
  });
});

// Skill bars
const fills = document.querySelectorAll('.bar-fill');

window.addEventListener('scroll', () => {
  fills.forEach(f => {
    if(f.getBoundingClientRect().top < window.innerHeight){
      f.style.width = f.dataset.width;
    }
  });
});

// Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
