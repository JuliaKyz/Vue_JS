<template>
  <div id="app">
    <AddButton v-on:show="popupToggle"></AddButton>
    <List v-bind:list="costsList"></List>
    <Form v-if="isPopupActive"></Form>
  </div>
</template>

<script>
import AddButton from './components/AddButton.vue'
import Form from './components/Form.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: { AddButton, Form, List },
  data() {
    return {
      isPopupActive: false,
      costsList: []
    }
  },
  methods: {
    // fetchData() {
    //   return [
    //     { id: 1, date: '12.09.2022', category: 'food', value: 1582 },
    //     { id: 2, date: '15.09.2022', category: 'transport', value: 245 },
    //     { id: 3, date: '20.09.2022', category: 'healthcare', value: 780 }
    //   ]
    // },
    popupToggle() {
      this.isPopupActive = !this.isPopupActive
    }
  },
  //  created() {
  //  this.costsList = this.fetchData()
  //  }
}
</script>

<style>

</style>
