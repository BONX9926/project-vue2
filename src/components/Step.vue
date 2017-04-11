<template lang="html">
  <div class="step">
    <div class="container-fluid bgcolor-s">
      <h1 align="center" class="padding-top">ขั้นตอนในการใช้บริการ</h1>
      <div class="row padding-top" align="center">
      <div class="col-md-4 col-lg-4">
      <h2><img src="../assets/image/network.png"></h2>
      <p>
      <h2>เข้าสู่ระบบ</h2>
      <p>เข้าสู่ระบบผ่าน socail media เพื่อเป็นสมาชิกกับเรา เพื่อความสะดวกสบายและความปลอดภัยแก่ผู้ใช้งาน</p>
      </p>
      </div>
      <div class="col-md-4 col-lg-4">
      <h2><img src="../assets/image/notepad.png"></h2>
      <p>
      <h2>กรอกข้อมูลเพิ่มเติม</h2>
      <p>กรุณากรอกข้อมูลให้ครบถ้วน เพื่อความถูกต้องของตำแหน่งที่ตั้งของที่พักและข้อมูลอื่นๆ</p>
      </p>
      </div>
      <div class="col-md-4 col-lg-4">
      <h2><img src="../assets/image/desktop.png"></h2>
      <p>
      <h2>เข้าใช้งาน</h2>
      <p>หลังจากที่กรอกข้อมูล ครบถ้วนแล้วสามารถเข้าใช้งานในระบบได้ทันท</p>
      </p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'step'
}
</script>

<style lang="css">
  .bgcolor-s {
    background-color: #E8EAF6;
  }
  .padding-top {
    padding-top: 20px;
  }
  h1#c {
    align: center;
  }
</style>
