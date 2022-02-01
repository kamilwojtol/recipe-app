<template>
  <div class="card">
    <div class="card-img-box">
      <img src="@/assets/img/recipe.jpg" alt="Recipe photo" class="card-img">
    </div>
    <div class="card-box">
      <div class="card-title-section">
        <h2 class="card-title">Test Recipe</h2>
        <Favourite />
      </div>
      <p class="card-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, enim dignissimos. 
        Rem aut doloremque recusandae quidem ipsa dolor saepe consequuntur?</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Favourite from '@/components/UI/Favourite/Favourite.vue'

@Options({
  components: {
    Favourite
  }
})
export default class App extends Vue {
  
}
</script>

<style lang="scss" scoped>
  .card {
    width: 40vw;
    margin: 0 auto;
    border-radius: 12px;
    box-shadow: 3px 7px 29px -11px rgba(52, 42, 50, 1);
    min-width: 300px;
    max-width: 500px;
    cursor: pointer;

    &-img-box {
      position: relative;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%);
        z-index: 1;
      }
    }

    &-img {
      max-width: 100%;
      height: auto;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }

    &-box {
      padding: 10px 10px 20px 20px;

      .card-title-section {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .card-title {
          margin: 5px 0;
          font: 600 24px $font-secondary;
          @media (min-width: 768px) {
            font: 600 32px $font-secondary;
          }
        }
      }
    }

    &-title,
    &-desc {
      color: $cl-black;
    }

    &-desc {
      font: 400 16px $font-primary;
      margin-top: 20px;
    }
  }
</style>
