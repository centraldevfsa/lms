<template>
  <section class="videos-slider relative flex items-center py-16">
    <!-- Setas -->
    <button
      @click="prevSlide"
      class="absolute left-4 z-10 p-2 bg-white text-gray-900 rounded-full shadow-lg hover:bg-gray-300 transition"
    >
      &#8592;
    </button>
    <button
      @click="nextSlide"
      class="absolute right-4 z-10 p-2 bg-white text-gray-900 rounded-full shadow-lg hover:bg-gray-300 transition"
    >
      &#8594;
    </button>

    <!-- Vídeos -->
    <div class="flex gap-6 overflow-hidden w-full">
      <div
        v-for="(video, index) in visibleVideos"
        :key="index"
        class="video-container flex-shrink-0 w-[315px] h-[177px] bg-black rounded-md"
      >
        <iframe
          :src="video.link"
          class="w-full h-full rounded-md"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        { link: 'https://www.youtube.com/embed/example1' },
        { link: 'https://www.youtube.com/embed/example2' },
        { link: 'https://www.youtube.com/embed/example3' },
        // Adicione mais vídeos
      ],
      currentIndex: 0,
    };
  },
  computed: {
    visibleVideos() {
      return this.videos.slice(this.currentIndex, this.currentIndex + 3);
    },
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.videos.length) % this.videos.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.videos.length;
    },
  },
};
</script>

<style scoped>
.videos-slider {
  position: relative;
  overflow: hidden;
}
.video-container {
  flex-shrink: 0;
  transition: transform 0.5s ease-in-out;
}
</style>
