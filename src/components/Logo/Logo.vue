<template>
  <a class="logo-container" href="/">
    <img class="logo" src="@/assets/img/logo.svg" alt="Recipeapp logo" />
    <h1 class="title">savory</h1>
  </a>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Logo extends Vue {}
</script>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  text-decoration: none;

  .title {
    font: 800 32px $font-secondary;
    color: $cl-primary;
    margin-left: 10px;
  }
}
</style>
