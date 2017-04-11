<template>
  <div id="app">
    <navbar></navbar>
    <!-- <img src="./assets/logo.png">
    <img src="./assets/image/bg3.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
