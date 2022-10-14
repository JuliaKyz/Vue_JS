<template>
  <div class="btn">ADD NEW +</div>
</template>

<script>
export default {
  name: "AddButton",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
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
