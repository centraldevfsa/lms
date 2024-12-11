<template>
    <div
      class="card-container transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-4xl cursor-pointer rounded-xl m-2 mt-10 mb-10"
      :class="{
        'w-[250px] h-[488px]': !hovering,
        'w-[720px] h-[488px]': hovering, // 16:9 ratio (landscape)
      }"
      @mouseover="startHover"
      @mouseleave="endHover"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="endDrag"
    >
      <div
        class="absolute inset-0 bg-center bg-cover rounded-xl"
        :style="{ 
          backgroundImage: `url(${image})` 
        }"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        hovering: false,
        hoverTimeout: null,
        isDragging: false, // Para verificar se é drag ou clique
        dragStartX: null, // Para armazenar a posição inicial do clique
      };
    },
    methods: {
      startHover() {
        this.hoverTimeout = setTimeout(() => {
          this.hovering = true;
        }, 100);
      },
      endHover() {
        clearTimeout(this.hoverTimeout);
        this.hovering = false;
      },
      startDrag(event) {
        this.isDragging = false; // Reinicia o estado de drag
        this.dragStartX = event.clientX; // Salva a posição inicial
      },
      onDrag(event) {
        if (this.dragStartX !== null) {
          const dragDistance = Math.abs(event.clientX - this.dragStartX);
          if (dragDistance > 5) {
            this.isDragging = true; // Considera como drag se o movimento for maior que 5px
          }
        }
      },
      endDrag() {
        if (!this.isDragging) {
          this.navigateToDetails(); // Somente executa o clique se não foi drag
        }
        this.dragStartX = null; // Reseta a posição inicial
        this.isDragging = false; // Reseta o estado de drag
      },
      navigateToDetails() {
        this.$router.push(this.link); // Navega para o link associado ao card
      },
    },
  };
  </script>
  
  <style scoped>
  .card-container {
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4);
    border-radius: 15px; /* Garante que o arredondamento afete toda a estrutura */
    overflow: hidden; /* Impede qualquer vazamento visual */
  }
  
  .card-container > div {
    border-radius: 15px;
  }
  
  .card-container:hover > div {
    border: none;
  }
  
  .card-container .absolute {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: inherit; /* Herdar o mesmo arredondamento */
  }
  </style>
  