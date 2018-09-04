<template>
    <div class="fade">
      <transition>
        <slot></slot>
      </transition>
    </div>
</template>

<script>
  export default {
    name: 'commonFade'
  };
</script>

<style scoped lang="stylus">
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    -webkit-transition: opacity .5s
    -moz-transition: opacity .5s
    -ms-transition: opacity .5s
    -o-transition: opacity .5s
    transition: opacity .5s
</style>
