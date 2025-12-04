 // Sticky navbar
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section-title, .feature-card').forEach(el => {
      observer.observe(el);
    });

    // FAQ Toggle
    function toggleFaq(button) {
      const answer = button.nextElementSibling;
      const icon = button.querySelector('.faq-icon');
      
      answer.classList.toggle('active');
      icon.classList.toggle('active');
    }

    // Modal Functions
    function openModal() {
      document.getElementById('signInModal').classList.add('active');
    }

    function closeModal() {
      document.getElementById('signInModal').classList.remove('active');
    }

    function handleGetStarted() {
      const email = document.getElementById('heroEmail').value;
      if (email) {
        alert('Welcome! Your email has been registered: ' + email);
      } else {
        alert('Please enter your email address');
      }
    }

    // Close modal when clicking outside
    document.getElementById('signInModal').addEventListener('click', (e) => {
      if (e.target.id === 'signInModal') {
        closeModal();
      }
    });