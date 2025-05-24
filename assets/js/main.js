
const minFontSize = 12; 
const maxFontSize = 24; 
let currentFontSize = 16; 


function aplicarFonte() {
  document.documentElement.style.fontSize = currentFontSize + 'px';
}


function aumentarFonte() {
  if (currentFontSize < maxFontSize) {
    currentFontSize += 2;
    aplicarFonte();
  }
}


function diminuirFonte() {
  if (currentFontSize > minFontSize) {
    currentFontSize -= 2;
    aplicarFonte();
  }
}


function alternarContraste() {
  document.body.classList.toggle('high-contrast');
}


function toggleMenu() {
  const nav = document.querySelector('nav');
  const hamburger = document.querySelector('.hamburger-menu');
  
  nav.classList.toggle('active');
  
  
  const spans = hamburger.querySelectorAll('span');
  if (nav.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
}


function setupPageNavigation() {
  const pages = [
    'index.html',
    'ajuda.html',
    'dicas.html',
    'iniciar.html',
    'contato.html',
    'faq.html',
    'integrantes.html',
    'solucao.html'
  ];

  const currentPage = window.location.pathname.split('/').pop();
  let currentIndex = pages.indexOf(currentPage);

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        window.location.href = pages[currentIndex - 1];
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex < pages.length - 1) {
        window.location.href = pages[currentIndex + 1];
      }
    });

    if (currentIndex === 0) {
      prevBtn.disabled = true;
    }

    if (currentIndex === pages.length - 1) {
      nextBtn.disabled = true;
    }
  }
}


function setupFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      
      question.classList.toggle('active');
      
     
      const answer = question.nextElementSibling;
      answer.classList.toggle('active');
    });
  });
}


function validateContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      let isValid = true;
      
      
      const nameInput = document.getElementById('name');
      const nameError = document.getElementById('nameError');
      if (!nameInput.value.trim()) {
        nameError.style.display = 'block';
        nameError.textContent = 'Por favor, informe seu nome.';
        isValid = false;
      } else {
        nameError.style.display = 'none';
      }
      
     
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block';
        emailError.textContent = 'Por favor, informe um email válido.';
        isValid = false;
      } else {
        emailError.style.display = 'none';
      }
      
      const messageInput = document.getElementById('message');
      const messageError = document.getElementById('messageError');
      if (!messageInput.value.trim()) {
        messageError.style.display = 'block';
        messageError.textContent = 'Por favor, escreva sua mensagem.';
        isValid = false;
      } else {
        messageError.style.display = 'none';
      }
      
      if (!isValid) {
        event.preventDefault();
      } else {
        alert('Formulário enviado com sucesso!');
      }
    });
  }
}


document.addEventListener('DOMContentLoaded', function() {
  
  aplicarFonte();
  
  
  setupPageNavigation();
  
  
  setupFaqAccordion();
  
  
  validateContactForm();
  
  
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', toggleMenu);
  }
});
