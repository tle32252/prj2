<template lang="html">
  <form novalidate @submit.stop.prevent="submit">

    <md-input-container>
      <label>Project Name</label>
      <md-input v-model="pName"></md-input>
    </md-input-container>

    <md-input-container>
      <label>Task Name</label>
      <md-input v-model="taskName"></md-input>
    </md-input-container>

    <md-input-container>
      <label>Task Detail</label>
      <md-input v-model="taskDetail"></md-input>
    </md-input-container>

    <md-input-container>
      <label>Time Spent (Hr)</label>
      <md-input type="number" v-model="timespent"></md-input>
    </md-input-container>
    <md-button class="md-raised md-primary" @click.native="submit">submit</md-button>

  </form>

</template>

<script>
export default {
  data () {
    return {
      pName: '',
      taskDetail: '',
      taskName: '',
      timespent: ''
    }
  },
  methods: {
    submit () {
      console.log(this.pName)
      console.log(this.taskName)
      console.log(this.taskDetail)
      console.log(this.timespent)
    }
  }
}
</script>
<style lang="css">
</style>
