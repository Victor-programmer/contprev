document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = question.classList.toggle('active');
        
        answer.style.maxHeight = isOpen ? answer.scrollHeight + 'px' : '0';
        
        // Fecha outras respostas
        document.querySelectorAll('.faq-question').forEach(q => {
            if (q !== question) {
                q.classList.remove('active');
                q.nextElementSibling.style.maxHeight = '0';
            }
        });
    });
  });