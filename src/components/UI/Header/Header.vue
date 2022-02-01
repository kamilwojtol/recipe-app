<template>
  <header class="header">
    <Logo />
    <nav class="navigation">
    <Button class="btn">
      <font-awesome-icon :icon="['far', 'user']"></font-awesome-icon>
    </Button>
    <Button class="btn">
      <font-awesome-icon :icon="['far', 'list-alt']"></font-awesome-icon>
    </Button>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Logo from "../../Logo/Logo.vue";
import Button from "../../Button/Button.vue";

@Options({
  components: {
    Logo,
    Button,
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center
}

.btn {
  font-size: 32px;
  cursor: pointer;
}
</style>
