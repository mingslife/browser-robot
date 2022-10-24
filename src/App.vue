<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="h-6 bg-blue-500 text-center text-sm text-white" v-if="isMac">
    <div class="p-1">
      <span>未命名</span>
      <span>*</span>
      <span> - </span>
      <span>Browser Robot</span>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  computed: {
    isMac () {
      return window.navigator.userAgent.includes('Mac OS')
    }
  },
  mounted () {
  }
}
</script>
