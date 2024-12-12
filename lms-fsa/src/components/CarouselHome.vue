<template>
  <div
    class="carousel-home flex overflow-hidden relative w-full h-full"
    @mousedown="startDrag"
    @mousemove="onDrag"
    @mouseup="endDrag"
    @mouseleave="endDrag"
  >
    <div
      class="flex transition-transform duration-300 ease-linear"
      :class="{ 'transition-none': isDragging }"
      :style="{ transform: `translateX(${scrollOffset}px)` }"
      @mouseover="stopAutoScroll"
      @mouseleave="startAutoScroll"
    >
      <CardContainer
        v-for="(item, index) in visibleItems"
        :key="index"
        :image="item.image"
        :link="item.link"
        :is-dragging="isDragging"
      />
    </div>
  </div>
</template>

<script>
import CardContainer from './CardContainer.vue';

export default {
  components: { CardContainer },
  data() {
    return {
      items: [
        {
          image: 'http://lp.saudeavancada.com.br/img/imgSageCapaVitrine.svg',
          link: '/sage',
        },
        {
          image:
            'http://lp.saudeavancada.com.br/img/imgGestacaoCapaVitrine.svg',
          link: '/fertilidadegestacao',
        },
        {
          image: 'http://lp.saudeavancada.com.br/img/imgJejumCapaVitrine.svg',
          link: '/jejum',
        },
      ],
      visibleItems: [],
      scrollOffset: 0,
      dragStartX: null,
      dragStartOffset: null,
      isDragging: false,
      dragThreshold: 10, // Tamanho mínimo para considerar como arraste
      autoScrollInterval: null,
    };
  },
  computed: {
    infiniteItems() {
      const repeatCount = Math.ceil(window.innerWidth / 315) + 2;
      return Array(repeatCount).fill(this.items).flat();
    },
  },
  methods: {
    startDrag(event) {
      this.dragStartX = event.clientX;
      this.dragStartOffset = this.scrollOffset;
      this.isDragging = false;
    },
    onDrag(event) {
      if (this.dragStartX !== null) {
        const movement = event.clientX - this.dragStartX;
        this.scrollOffset = this.dragStartOffset + movement;

        // Verifica se o movimento excede o limite
        if (Math.abs(movement) > this.dragThreshold) {
          this.isDragging = true;
        }
      }
    },
    endDrag() {
      this.dragStartX = null;
      this.dragStartOffset = null;
    },
    startAutoScroll() {
      this.autoScrollInterval = setInterval(() => {
        this.scrollOffset -= 2;

        if (Math.abs(this.scrollOffset) >= this.items.length * 315) {
          this.scrollOffset = 0;
        }
      }, 30);
    },
    stopAutoScroll() {
      clearInterval(this.autoScrollInterval);
    },
  },
  mounted() {
    this.visibleItems = this.infiniteItems;
    this.startAutoScroll();
  },
  beforeUnmount() {
    this.stopAutoScroll();
  },
};
</script>
