<template>
    <div v-on:click="onBtnClick" class="btn">ADD NEW +</div>
</template>
  
<script>
export default {
    name: 'AddButton',
    methods: {
        onBtnClick() {
            this.$emit('show')
        }
    }
}
</script>
  
<style>
.btn {
    background-color: indianred;
    border: 1px solid indianred;
    border-radius: 3px;
    color: white;
    padding: 7px 25px;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover {
    background-color: transparent;
    color: coral;
}
</style>
  