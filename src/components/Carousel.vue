<template lang="html">
  <div class="carousel">
    <b-carousel controls indicators :interval="3000" background="grey">

     <!-- Text slides -->
      <b-carousel-slide height="500px" caption="One slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum." id="carousel-one">
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide height="500px" caption="Two slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum." id="carousel-two">
          Hello world
      </b-carousel-slide>

     <!-- Slides with image -->
      <b-carousel-slide height="500px" caption="Tree slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum." id="carousel-tree">
      </b-carousel-slide>

    </b-carousel>
    <!-- <div class="" id="carousel-one">

    </div> -->
    <!-- <img src="../assets/image/bg3.png" alt=""> -->
  </div>
  <!-- <h1>aaaa</h1> -->
</template>

<script>
export default {
  name: 'carousel'
}
</script>

<style lang="css">
  #carousel-one {
    background-image: url('../assets/image/bedroom.jpg');
  }
  #carousel-two {
    background-image: url('../assets/image/bathroom.jpg');
  }
  #carousel-tree {
    background-image: url('../assets/image/kitchen.jpg');
  }
</style>
