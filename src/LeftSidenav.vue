<template lang="html">
  <div class="left-sidenav">
    <md-toolbar>
      <!-- <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button> -->
      <h2 class="md-title">Project Management</h2>
      <md-button class="md-default" @click.native="click('Home')">Home</md-button>
      <md-button class="md-default" @click.native="click('Home2')">Home2</md-button>
      <md-button class="md-default" @click.native="click('Input')">Input</md-button>
      <md-button class="md-default" @click.native="click('Calculate')">Calculate</md-button>
      <md-button class="md-default" @click.native="click('Users.sign_in')">Logout</md-button>

    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Menu Bar</h3>

        </div>
          <!-- <md-button class="md-default" @click.native="click('Home')">Home</md-button> -->
      </md-toolbar>
    </md-sidenav>
  </div>
</template>

<script>
import router from '@/router'
import usersAPI from '@/api/users.js'
export default {
  methods: {
    click (redirect) {
      router.push({ name: redirect })
    },
    Logout () {
      usersAPI.logout(function () {
      })
    }
  }
}
// import usersAPI from '@/api/users.js'
// export default {
//   methods: {
//     // toggleLeftSidenav () {
//     //   this.$refs.leftSidenav.toggle()
//     // },
    // LogOut () {
    //   usersAPI.logout(function () {
    //   })
    // }
//   }
// }
</script>


<style lang="css">

/*#but {
  padding-top: 40px;
}*/

</style>
