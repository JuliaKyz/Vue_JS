<template>
  <div class="form" v-if="isShown" :style="{top: y + 'px', left: x + 'px'}">
    <div @click="onCloseClick" class="closeModal"></div>
    <span @click="onEditClick" >Edit</span>
    <span @click="deleteCosts">Delete</span>
  </div>
</template>

<script>
export default {
  name: "ContextMenu",
  data() {
    return {
      isShown: false,
      cost: undefined,
      x: undefined,
      y: undefined
    };
  },

  methods: {
    show(cost) {
      this.isShown = true;
      this.cost = cost;
    },

    hide() {
      this.isShown = false;
    },

    onCloseClick() {
      this.$context.hide();
    },

    onEditClick(){
      this.$router.push(`/edit/payment/${this.cost.category}?value=${this.cost.value}&date=${this.cost.date}&id=${this.cost.id}`)
      this.$context.hide();
    },

    deleteCosts() {
      if (this.cost !== undefined) {
        this.$store.commit("deleteCostsList", this.cost)
      }

      this.$context.hide();
    },
  },

  mounted() {
    this.$context.EventEmitter.$on("showContextMenu", this.show);
    this.$context.EventEmitter.$on("hideContextMenu", this.hide);
  },

  computed: {
    isPopupActive() {
      return this.$store.getters.getIsPopupActive;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form {
  width: 200px;
  height: 150px;
  position: fixed;
  background-color: white;
  border: 1px solid #7242b9;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &-input {
    width: 80%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #7242b9;
    padding: 0;
    margin: 10px 0;
    outline: none;
  }
}

.error {
  border-bottom: 1px solid red;
}

.closeModal {
  position: absolute;
  top: 30px;
  right: 20px;
  width: 24px;
  height: 24px;
  opacity: 0.2;
  cursor: pointer;
  transition: opacity ease 0.5s;

  &:hover {
    opacity: 1;
  }
}

.closeModal::before,
.closeModal::after {
  content: "";
  position: absolute;
  top: 10px;
  display: block;
  width: 24px;
  height: 3px;
  background: #000;
}

.closeModal::before {
  transform: rotate(45deg);
}

.closeModal::after {
  transform: rotate(-45deg);
}

.btn {
  margin-top: 20px;
  margin-left: 55%;
  background-color: #7242b9;
  border: 1px solid #7242b9;
  border-radius: 3px;
  color: white;
  padding: 7px 25px;
  display: inline-block;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: transparent;
    color: #7242b9;
  }
}
</style>
