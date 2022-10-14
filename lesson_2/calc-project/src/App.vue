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
      <div><input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">Отоброзить экранную клавиатуру</label>
      </div>
      <div class="container" v-if="checked">
        <div class="number-container">
          <el-tag type="success" v-for="number in numbers" v-model="number.id">
            <button class="number">
              {{number.id}}
            </button>
          </el-tag>
        </div>
        <div class="radio-container">
          <el-tag type="success">
            <input type="radio" id="one" value="Один" v-model="picked">
            <label for="one">Операнд 1</label>
            <br>
            <input type="radio" id="two" value="Два" v-model="picked">
            <label for="two">Операнд 2</label>
            <br>
          </el-tag>
          <span>Выбрано: {{ picked }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
      
<script>

const numbers = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  }
]

export default {
  name: 'App',
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      numbers,
      checked: false
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
