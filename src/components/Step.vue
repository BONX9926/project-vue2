<template lang="html">
  <div class="step">
    <!-- <div class="row" align="center">

    </div> -->
    <!-- <h1 align="center" class="bgcolor" style="display:block;">ขั้นตอนในการใช้บริการ</h1> -->
    <div class="container-fluid">
      <div class="row bgcolor padding-top">
        <h1 align="center" id="ad"><center>ขั้นตอนในการใช้บริการ</center></h1>
        <div class="row" align="center">
          <div class="col-md-4 col-lg-4">
          <h2><img src="../assets/image/network.png" class="padding-top"></h2>
          <p>
          <h2>เช้าสู่ระบบ</h2>
          <p>เข้าสู่ระบบผ่าน socail media เพื่อเป็นสมาชิกกับเรา เพื่อความสะดวกสบายและความปลอดภัยแก่ผู้ใช้งาน</p>
          </p>
          </div>
          <div class="col-md-4 col-lg-4">
          <h2><img src="../assets/image/notepad.png" class="padding-top"></h2>
          <p>
          <h2>กรอกข้อมูลเพิ่มเติม</h2>
          <p>กรุณากรอกข้อมูลให้ครบถ้วน เพื่อความถูกต้องของตำแหน่งที่ตั้งของที่พักและข้อมูลอื่นๆ</p>
          </p>
          </div>
          <div class="col-md-4 col-lg-4">
          <h2><img src="../assets/image/desktop.png" class="padding-top"></h2>
          <p>
          <h2>เข้าใช้งาน</h2>
          <p>หลังจากที่กรอกข้อมูล ครบถ้วนแล้วสามารถเข้าใช้งานในระบบได้ทันที</p>
          </p>
          </div>
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
  #ad {
    text-align: center;
  }
  table#step {
    background-color: pink;
  }
  .bgcolor {
    background-color: #E8EAF6;
  }
  .padding-top {
    padding-top: 20px;
  }
  h1#c {
    align: center;
  }
</style>
