<template>
  <div id="app">
    <div class="screen">
      <input v-model.number="operand1" type="text" />
      -
      <input v-model.number="operand2" type="text" />
      =>
      <input v-model="result" type="text" readonly />
    </div>
    <div class="keyboard">
      <div class="row">
        <button @click="getResult ('+')">+</button>
        <button @click="getResult ('-')">-</button>
        <button @click="getResult ('*')">*</button>
        <button @click="getResult ('/')">/</button>
        <button @click="getResult ('**')">**</button>
        <button @click="getResult ('//')">//</button>
      </div>
    </div>
  </div>
</template>
      
<script>

export default {
  name: 'App',
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
    }
  },
  methods: {
    getResult(operator) {
      switch (operator) {
        case '+':
          this.result = this.operand1 + this.operand2
          break;
        case '-':
          this.result = this.operand1 - this.operand2
          break;
        case '*':
          this.result = this.operand1 * this.operand2
          break;
        case '/':
          this.result = this.operand1 / this.operand2
          break;
        case '**':
          this.result = this.operand1 ** this.operand2
          break;
        case '//':
          this.result = Math.floor(this.operand1 / this.operand2)
          break;

        default:
          break;
      }
    }
  }
}
</script>
      
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
