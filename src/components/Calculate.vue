<template lang="html">
  <form novalidate @submit.stop.prevent="submit">
    <!-- <md-input-container>
      <label>Task Name</label>
      <md-input v-model="taskName"></md-input>
    </md-input-container>

    <md-input-container>
      <label>Task Detail</label>
      <md-input v-model="taskDetail"></md-input>
    </md-input-container> -->

    <md-input-container>
      <label>Time Spent(Hr)</label>
      <md-input type="number" v-model="timespent"></md-input>
    </md-input-container>

    <md-input-container>
      <label>Cost per hour(Baht)</label>
      <md-input type="number" v-model="cph"></md-input>
    </md-input-container>


    <md-button class="md-raised md-primary" @click.native="calculate">calculate</md-button>
    <span>To Pay : {{ ans }} Baht</span>

  </form>

</template>

<script>
export default {
  data () {
    return {
      taskDetail: '',
      taskName: '',
      timespent: '',
      cph: '',
      ans: ''
      // msg: timespent * cph
    }
  },
  methods: {
    calculate () {
      var cph
      var timespent
      var ans = cph * timespent
      console.log(this.cph * this.timespent)
      this.ans = this.cph * this.timespent
      return ans
    }
  }
  // methods: {
  //   submit () {
  //     console.log(this.taskName)
  //     console.log(this.taskDetail)
  //     console.log(this.timespent)
  //   }
  // }
}
</script>
<style lang="css">
</style>
