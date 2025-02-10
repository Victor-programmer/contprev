
function toggleMenu() {
  const hamburger = document.getElementById('hamburger');
  const navList = document.getElementById('nav-list');

  hamburger.classList.toggle('active');
  navList.classList.toggle('open');
}

// Fechar o menu ao clicar em um item da lista
document.querySelectorAll('#nav-list li').forEach(item => {
  item.addEventListener('click', () => {
      document.getElementById('hamburger').classList.remove('active');
      document.getElementById('nav-list').classList.remove('open');
  });
});


        function toggleDetails(card) {
            // Seleciona a aba de detalhes do card clicado
            const details = card.querySelector('.details');
            const isVisible = details.classList.contains('show');
        
            // Oculta todas as abas de detalhes
            const allDetails = document.querySelectorAll('.details');
            allDetails.forEach(d => d.classList.remove('show'));
        
            // Remove a classe 'active' de todos os cards
            const allCards = document.querySelectorAll('.service-card');
            allCards.forEach(c => c.classList.remove('active'));
        
            // Se a aba de detalhes não estava visível, mostra-a e adiciona a classe 'active' ao card
            if (!isVisible) {
                details.classList.add('show'); // Adiciona a classe para mostrar a aba de detalhes
                card.classList.add('active'); // Adiciona a classe 'active' ao card clicado
            }
        }
        
  //EFEITO FOTO DE PERFIL       
// Configurações das partículas
// Configurações de partículas
const totalParticles = 150; // Número de partículas
const profilePhoto = document.querySelector('.unique-profile-photo');

function createParticles() {
    // Remover partículas anteriores (caso a tela seja redimensionada)
    profilePhoto.querySelectorAll('.particle').forEach((particle) => particle.remove());
  
    // Tamanho dinâmico baseado no contêiner
    const rect = profilePhoto.getBoundingClientRect();
  
    // Ajustar raio baseado na largura da tela
    const radius = window.innerWidth <= 820 ? rect.width / 2.3 : rect.width / 3.1; // Menor raio para telas menores
  
    for (let i = 0; i < totalParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
  
      // Ângulo aleatório ao longo da borda
      const angle = Math.random() * 2 * Math.PI;
  
      // Calcular posição inicial das partículas usando ângulo e raio
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
  
      // Definir posição da partícula
      particle.style.left = `${50 + (x / rect.width) * 100}%`; // 50% + ajuste relativo
      particle.style.top = `${50 + (y / rect.height) * 100}%`; // 50% + ajuste relativo
  
      // Animação aleatória
      particle.style.animationDelay = `${Math.random() * 3}s`;
      particle.style.animationDuration = `${2 + Math.random() * 3}s`;
  
      profilePhoto.appendChild(particle);
    }
  }
  
  // Adicionar evento de redimensionamento para atualizar as partículas dinamicamente
  window.addEventListener('resize', createParticles);
  
// Inicializar partículas
createParticles();

// Recalcular partículas em redimensionamento da tela
window.addEventListener('resize', createParticles);
// Itera por cada carrossel
const carrossels = document.querySelectorAll('.unique-projects-box');

carrossels.forEach(carrossel => {
  const carouselTrack = carrossel.querySelector('.unique-carousel-track');
  const slides = carouselTrack.children;
  const leftArrow = carrossel.querySelector('.unique-carousel-arrow.left');
  const rightArrow = carrossel.querySelector('.unique-carousel-arrow.right');
  const description = carrossel.querySelector('.unique-project-description');

  // Descrições específicas para cada funcionário
  const employee = carrossel.getAttribute('data-employee');
  const projectDescriptions = {
    victor: [
      {
        text: "Criei um site interativo especialmente para a filha de um cliente, com o objetivo de tornar o presente de aniversário ainda mais especial e inesquecível, onde a pelúcia se apresenta e dá dicas de outro presente que havia escondido dentro da espuma dele.",
        link: "https://victor-programmer.github.io/Tartaruguinha/"
      },
      { text: "Projeto de Victor 2", link: null },
      { text: "Vídeo de Victor", link: null }
    ],
    leandro: [
      { text: "Projeto de Leandro 1", link: null},
      { text: "Projeto de Leandro 2", link: null },
      { text: "Vídeo de Leandro", link: null }
    ]
  };

  let currentIndex = 0;

  // Atualiza o carrossel
  function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Atualiza a descrição com texto e link
    const currentDescription = projectDescriptions[employee]?.[currentIndex];
    if (description && currentDescription) {
      description.innerHTML = currentDescription.text;
      if (currentDescription.link) {
        description.innerHTML += ` <a href="${currentDescription.link}" target="_blank" style="color: blue; text-decoration: underline;">Acessar o site</a>`;
      }
    }
  }

  // Navegação para a esquerda
  leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 1; // Volta ao último slide
    }
    updateCarousel();
  });

  // Navegação para a direita
  rightArrow.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Volta ao primeiro slide
    }
    updateCarousel();
  });

  // Inicializa o carrossel
  updateCarousel();
});

// **VIDEOS CARROSEL**

// Abre o modal com o vídeo
function openVideoModal(videoId) {
  const video = document.getElementById(videoId);
  const modal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-video');

  // Define o mesmo vídeo no modal
  const videoSource = video.querySelector('source').src;
  modalVideo.src = videoSource;

  // Exibe o modal e inicia o vídeo
  modal.style.display = 'flex';
  modalVideo.play();
}

// Fecha o modal e pausa o vídeo
function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-video');

  modal.style.display = 'none';
  modalVideo.pause();
  modalVideo.src = ''; // Remove a referência para garantir recarregamento
}
//CONTRATAR AGORA
document.addEventListener('DOMContentLoaded', function () {
  const hireButton = document.getElementById('unique-hire-button-Inovacao');
  
  if (hireButton) {
    hireButton.addEventListener('click', function () {
      window.location.href = 'https://wa.me/5511954445916?text=Olá,+tenho+interesse+em+um+dos+serviços+do+setor+de+inovação+e+elétrica.+';
    });
  } else {
    console.error('O botão com ID "unique-hire-button" não foi encontrado no DOM.');
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const hireButton = document.getElementById('unique-hire-button-contabil');
  
  if (hireButton) {
    hireButton.addEventListener('click', function () {
      window.location.href = 'https://wa.me/5511954445916?text=Olá,+tenho+interesse+em+um+dos+serviços+do+setor+de+contabilidade.+';
    });
  } else {
    console.error('O botão com ID "unique-hire-button" não foi encontrado no DOM.');
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const hireButton = document.getElementById('unique-hire-button-previdencia');
  
  if (hireButton) {
    hireButton.addEventListener('click', function () {
      window.location.href = 'https://wa.me/5511954445916?text=Olá,+tenho+interesse+em+um+dos+serviços+do+setor+de+previdência.+';
    });
  } else {
    console.error('O botão com ID "unique-hire-button" não foi encontrado no DOM.');
  }
});

  //CARROSSEL SERVIÇOS
  document.addEventListener('DOMContentLoaded', function () {
    let isUniqueFlipped = false;
  
    const frontCard = document.querySelector('.unique-services-box .front-card');
    const backCard = document.querySelector('.unique-services-box .back-card');
  
    // Verifique se os elementos existem antes de manipulá-los
    if (frontCard && backCard) {
      // Adicionar evento ao botão "Serviços para MEI"
      const nextButton = document.querySelector('.unique-next-button');
      if (nextButton) {
        nextButton.addEventListener('click', function () {
          flipUniqueCard(frontCard, backCard);
        });
      }
  
      // Adicionar evento ao botão "Voltar"
      const backButton = document.querySelector('.unique-back-button');
      if (backButton) {
        backButton.addEventListener('click', function () {
          flipUniqueCard(frontCard, backCard);
        });
      }
    }
  
    function flipUniqueCard(frontCard, backCard) {
      if (!isUniqueFlipped) {
        frontCard.style.transform = 'rotateY(-180deg)';
        backCard.style.transform = 'rotateY(0deg)';
      } else {
        frontCard.style.transform = 'rotateY(0deg)';
        backCard.style.transform = 'rotateY(180deg)';
      }
      isUniqueFlipped = !isUniqueFlipped;
    }
  });
  // Botões de interrogação
  document.addEventListener('DOMContentLoaded', function () {
    const tooltipIcons = document.querySelectorAll('.unique-tooltip-icon');
    const modal = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    
    // Mostra o modal com a mensagem
    tooltipIcons.forEach(icon => {
      icon.addEventListener('click', function () {
        const detail = this.getAttribute('data-detail');
        alertMessage.textContent = detail ? detail : 'Detalhes não disponíveis.';
        modal.style.display = 'flex'; // Exibe o modal
      });
    })
  
    // Fecha o modal ao clicar fora da área do conteúdo
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none'; // Esconde o modal se o clique for fora do conteúdo
      }
    });
  });
  
  

