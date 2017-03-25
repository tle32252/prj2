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
      <md-table-row>
        <md-table-head>Task Name</md-table-head>
        <md-table-head>Task Detail</md-table-head>
        <md-table-head>Time Spent</md-table-head>
        <!-- <md-table-head md-numeric>Carbs (g)</md-table-head>
        <md-table-head md-numeric>Protein (g)</md-table-head> -->
      </md-table-row>
    </md-table-header>

    <md-button class="md-raised md-primary" @click.native="click('Input')">Add new task done</md-button>

    <!-- <md-table-body>
      <md-table-row v-for="(row, index) in 5" :key="index">
        <md-table-cell>Dessert Name</md-table-cell>
        <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>
      </md-table-row>
    </md-table-body> -->
  </md-table>

</template>

<script>
import router from '@/router'
export default {
  methods: {
    click (input) {
      router.push({ name: 'Input' })
    }
  }
}
</script>

<style lang="css">
</style>
