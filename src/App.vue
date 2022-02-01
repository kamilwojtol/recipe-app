<template>
  <main class="container">
    <Header />
    <router-view />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/UI/Header/Header.vue";

@Options({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
