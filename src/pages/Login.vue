<template lang="html">
  <!-- <div class="login"> -->
    <div class="container">
      <h4 align="center">เข้าสู่ระบบ</h4>
      <div class="row">
        <div class="col-md-6 card-block" align="center">
        คุณสามารถเชื่อมต่อ กับเราได้โดยผ่าน <b>Social</b> ผ่านทาง <b>Facebook</b> และ <b>Google</b> ได้ เพื่อความ<u>สะดวกและปลอดภัย</u>ของผู้ใช้
        </div>
        <div class="col-md-6 card-block">
        <button class="btn btn-primary btn-block" >
          <!-- v-on:click="loginFacebook()" -->
        <i class="fa fa-facebook"></i> Login Your Facebook
        </button>
        <button class="btn btn-danger btn-block">
          <!-- v-on:click="loginGoogle()" -->
          <i class="fa fa-google"></i> Login Your Google
        </button>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>

export default {
  // name: 'login',
  // methods: {
  //   loginFacebook: function () {
  //     alert('loginFacebook')
  //   },
  //   loginGoogle: function () {
  //     alert('loginGoogle')
  //   }
  // }
}
</script>

<style lang="css">
  .btn {
    cursor: pointer;
  }
</style>
