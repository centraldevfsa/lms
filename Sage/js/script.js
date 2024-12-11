function toggleDropdown(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('span.text-2xl');
    
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      arrow.style.transform = 'rotate(180deg)'; // Gira o ícone da seta
    } else {
      content.classList.add('hidden');
      arrow.style.transform = 'rotate(0deg)'; // Reseta a rotação da seta
    }
  }

      // Função para abrir o modal e carregar o vídeo
      function openModal() {
      document.getElementById('videoModal').classList.remove('hidden');
      document.getElementById('videoFrame').src="https://www.youtube.com/embed/BJiOBnm2DaE?autoplay=1"; // Vídeo com autoplay
  }

  // Função para fechar o modal e parar o vídeo
  function closeModal() {
      document.getElementById('videoModal').classList.add('hidden');
      document.getElementById('videoFrame').src = ""; // Limpa o src do iframe para parar o vídeo
  }

// Função para abrir o modal e carregar o vídeo do Depoimento 1
function openDepo1Modal() {
  document.getElementById('depo1Modal').classList.remove('hidden');
  document.getElementById('depo1Frame').src = "https://www.youtube.com/embed/Du68_r7qTOg?autoplay=1"; // Vídeo com autoplay
}

// Função para fechar o modal e parar o vídeo do Depoimento 1
function closeDepo1Modal() {
  document.getElementById('depo1Modal').classList.add('hidden');
  document.getElementById('depo1Frame').src = ""; // Limpa o src para parar o vídeo
}

// Função para abrir o modal e carregar o vídeo do Depoimento 2
function openDepo2Modal() {
  document.getElementById('depo2Modal').classList.remove('hidden');
  document.getElementById('depo2Frame').src = "https://www.youtube.com/embed/aLurxHPwKgY?autoplay=1"; // Vídeo com autoplay
}

// Função para fechar o modal e parar o vídeo do Depoimento 2
function closeDepo2Modal() {
  document.getElementById('depo2Modal').classList.add('hidden');
  document.getElementById('depo2Frame').src = ""; // Limpa o src para parar o vídeo
}

// Função para abrir o modal e carregar o vídeo do Depoimento 3
function openDepo3Modal() {
  document.getElementById('depo3Modal').classList.remove('hidden');
  document.getElementById('depo3Frame').src = "https://www.youtube.com/embed/WXVQuXq80Cw?autoplay=1"; // Vídeo com autoplay
}

// Função para fechar o modal e parar o vídeo do Depoimento 3
function closeDepo3Modal() {
  document.getElementById('depo3Modal').classList.add('hidden');
  document.getElementById('depo3Frame').src = ""; // Limpa o src para parar o vídeo
}

// Função para abrir o modal e carregar o vídeo do Depoimento 4
function openDepo4Modal() {
  document.getElementById('depo4Modal').classList.remove('hidden');
  document.getElementById('depo4Frame').src = "https://www.youtube.com/embed/iCfbBO3W2Qg?autoplay=1"; // Vídeo com autoplay
}

// Função para fechar o modal e parar o vídeo do Depoimento 4
function closeDepo4Modal() {
  document.getElementById('depo4Modal').classList.add('hidden');
  document.getElementById('depo4Frame').src = ""; // Limpa o src para parar o vídeo
}

// Função para abrir o modal e carregar o vídeo do Depoimento 5
function openDepo5Modal() {
  document.getElementById('depo5Modal').classList.remove('hidden');
  document.getElementById('depo5Frame').src = "https://www.youtube.com/embed/UoceAIi-iJo?autoplay=1"; // Vídeo com autoplay
}

// Função para fechar o modal e parar o vídeo do Depoimento 5
function closeDepo5Modal() {
  document.getElementById('depo5Modal').classList.add('hidden');
  document.getElementById('depo5Frame').src = ""; // Limpa o src para parar o vídeo
}

// Função para alterar imagem dos simpósios
function changeImage(image) {
      const imageContainer = document.getElementById('imageContainer');
      imageContainer.style.opacity = 0; // Inicia transição de fade-out

      setTimeout(() => {
          imageContainer.style.backgroundImage = `url('assets/img/${image}')`; // Altera a imagem
          imageContainer.style.opacity = 1; // Fade-in suave
      }, 500); // Tempo para transição do fade-out
  }


