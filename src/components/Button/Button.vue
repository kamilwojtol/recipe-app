<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Logo extends Vue {}
</script>

<style lang="scss" scoped>
.btn {
  padding: 10px;
  border: 0;
  color: $cl-primary;
  background-color: transparent;
}
</style>
