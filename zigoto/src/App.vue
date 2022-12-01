<template>
  <HeaderVue></HeaderVue>
  <NavVue></NavVue>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue'
import NavVue from './components/NavVue.vue'

export default {
  name: 'App',
  components: {
    HeaderVue,
    NavVue
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
