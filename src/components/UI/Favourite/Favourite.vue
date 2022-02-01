<template>
  <div class="fav">
    <font-awesome-icon class="fav-icon" :icon="['far', 'heart']"></font-awesome-icon>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Favourite extends Vue {}
</script>

<style lang="scss" scoped>
.fav {
  margin-right: 20px;

  .fav-icon {
    color: $cl-primary;
    font-size: 32px;
    cursor: pointer;
  }
}
</style>
