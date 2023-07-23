<template>
  <div>
    <div
      class="hamburger-menu-button"
      :class="{ open: showMenu }"
      @click="transformBurger"
    >
      <span
        class="hamburger-menu-button-burger bg-black rounded-full"
        :class="{ open: showMenu }"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    transformBurger() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.hamburger-menu-button {
  position: relative;
  height: 16px;
  width: 24px;
  @include transition-ease;

  &-burger {
    position: absolute;
    right: 0;
    top: 0.5rem;
    width: 24px;
    height: 2px;
    @include transition-ease;

    &::before {
      content: "";
      position: absolute;
      top: -8px;
      width: 24px;
      height: 2px;
      background: black;
      border-radius: 9999px;
      @include transition-ease;
    }

    &::after {
      content: "";
      position: absolute;
      top: 8px;
      width: 16px;
      height: 2px;
      background: black;
      border-radius: 9999px;
      @include transition-ease;
    }

    &.open {
      transform: rotate(360deg);
      background: transparent;

      &::before {
        transform: rotate(45deg) translate(5px, 8px);
      }

      &::after {
        width: 28px;
        transform: rotate(-45deg) translate(3px, -7px);
      }
    }
  }
}
</style>
