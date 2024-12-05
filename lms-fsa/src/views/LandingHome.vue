<template>
  <div>
    <Carousel :slides="slidesData" />
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue';

export default {
  components: {
    Carousel,
  },
  data() {
    return {
      slidesData: [
        {
          background: 'https://via.placeholder.com/1920x1080/FF0000/FFFFFF',
          logo: 'https://via.placeholder.com/150',
          headline: 'Slide 1 Headline',
          subtext: 'This is the first slide description.',
        },
        {
          background: 'https://via.placeholder.com/1920x1080/00FF00/FFFFFF',
          logo: 'https://via.placeholder.com/150',
          headline: 'Slide 2 Headline',
          subtext: 'This is the second slide description.',
        },
        {
          background: 'https://via.placeholder.com/1920x1080/0000FF/FFFFFF',
          logo: 'https://via.placeholder.com/150',
          headline: 'Slide 3 Headline',
          subtext: 'This is the third slide description.',
        },
        {
          background: 'https://via.placeholder.com/1920x1080/FFFF00/FFFFFF',
          logo: 'https://via.placeholder.com/150',
          headline: 'Slide 4 Headline',
          subtext: 'This is the fourth slide description.',
        },
      ],
    };
  },
};
</script>
