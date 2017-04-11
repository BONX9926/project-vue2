<template lang="html">
  <div class="home">
    <carousel></carousel>
    <step></step>
    <what></what>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import Step from '@/components/Step'
import What from '@/components/What'

export default {
  name: 'home',
  components: {
    Carousel,
    Step,
    What
  }
}
</script>

<style lang="css">
</style>
