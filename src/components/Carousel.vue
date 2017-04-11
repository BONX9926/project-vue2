<template lang="html">
  <div class="carousel">
    <b-carousel controls indicators :interval="3000" background="grey">

     <!-- Text slides -->
      <b-carousel-slide height="500px"
                       caption="First slide"
                       text="Nulla vitae elit libero, a pharetra augue mollis interdum." img="http://placeskull.com/600/300/ABABAB/-1/0">
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide height="500px" img="">
          Hello world
      </b-carousel-slide>

     <!-- Slides with image -->
      <b-carousel-slide height="500px"
                        img="https://img.clipartfest.com/084f90e505995f2c6bee502e2677777d_kitchen-cleaning-clip-art-kitchen-cleaning-clip-art_1024-768.png">
      </b-carousel-slide>

    </b-carousel>
  </div>
  <!-- <h1>aaaa</h1> -->
</template>

<script>
export default {
  name: 'carousel'
}
</script>

<style lang="css">
</style>
