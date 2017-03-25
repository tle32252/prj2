<template lang="html">
  <md-table v-once>
    <md-table-header>
      <md-menu md-align-trigger>
        <md-button md-menu-trigger>Project Name</md-button>

        <md-menu-content>
        <md-menu-item>My Item 1</md-menu-item>
        <md-menu-item>My Item 2</md-menu-item>
        <md-menu-item>My Item 3</md-menu-item>
      </md-menu-content>
      </md-menu>
      <md-table v-once>
        <md-table-header>
          <md-table-row>
            <md-table-head>Employee Name</md-table-head>
            <!-- <md-table-head md-numeric>Calories (g)</md-table-head>
            <md-table-head md-numeric>Fat (g)</md-table-head> -->
            <md-table-head md-numeric>Calculatee</md-table-head>
            <!-- <md-table-head md-numeric>Action</md-table-head> -->
            <!-- <md-table-cell v-for="(colll, index) in 1" :key="index" md-numeric>9</md-table-cell> -->
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(row, index) in 1" :key="index">
            <md-table-cell> Nameee</md-table-cell>
            <md-table-cell v-for="(colll, index) in 1" :key="index" md-numeric><md-button class="md-default" @click.native="click('Calculate')">Cal</md-button> </md-table-cell>
          </md-table-row>
        </md-table-body>

      </md-table>
    </md-table-header>
  </md-table>

</template>

<script>
import router from '@/router'
export default {
  methods: {
    click (calculate) {
      router.push({ name: 'Calculate' })
    }
  }
}
</script>

<style lang="css">
</style>
