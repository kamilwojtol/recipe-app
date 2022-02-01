<template>
  <div class="home">
    <swiper
    :slides-per-view="1"
    >
      <swiper-slide>
        <Card :recipe="recipe"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from '@/components/Card/Card.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { RecipeService } from '@/services/RecipeService';
import { Recipes } from '@/interfaces/RecipeInterfaces';
import 'swiper/swiper-bundle.css';

@Options({
  components: {
    Card,
    Swiper,
    SwiperSlide
  },
})
export default class Home extends Vue {
  private recipe: Recipes;

  async getRecipe(): Promise<void> {
    this.recipe = await RecipeService.getRandomRecipe();
  }

  created() {
    this.getRecipe();
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: calc(100vh - 100px);

  .swiper-container {
    height: 100%;
  }
}
</style>
