<template lang="html">
  <b-navbar toggleable type="inverse" variant="" class="bg-nav">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="/">
      <span>Cleaning</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <!-- <b-nav-item to="/">หน้าแรก</b-nav-item> -->
        <!-- <b-nav-item to="about" class="font-w">เกี่ยวกับเรา</b-nav-item> -->
        <b-nav-item to="service" class="font-w">บริการของเรา</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar class="ml-auto">

        <b-nav is-nav-bar>
          <b-nav-item to="login" class="font-w">เข้าสู่ระบบ/สมัครสมาชิก</b-nav-item>
        </b-nav>
        <!-- Navbar dropdowns -->
        <!-- <b-nav-item-dropdown text="เข้าสู่ระบบ/สมัครสมาชิก" right-alignment>
          <b-dropdown-item to="#">EN</b-dropdown-item>
          <b-dropdown-item to="#">ES</b-dropdown-item>
          <b-dropdown-item to="#">RU</b-dropdown-item>
          <b-dropdown-item to="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <b-nav-item-dropdown right-alignment v-if="status">

          <!-- Using text slot -->
          <template slot="text">
            <span class="font-w">User</span>
          </template>

          <b-dropdown-item to="#">Profile</b-dropdown-item>
          <b-dropdown-item to="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

export default {
}
</script>

<style lang="css">
  .bg-nav {
    background-color: #4286f4;
  }
  .font-w {
    font-weight: bold;
  }
</style>
