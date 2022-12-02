<template>
  <div class="map">
    <Map  :center="center" :zoom="zoom" ref="map" />
    <div style="width: 100%;display: flex;">
      <button v-on:click="setCenter()">localisation</button>
    </div>
    <NavBar/>
  </div>
</template>

<script>
import Map from '@/components/mapCompVue.vue'

export default {
  name: 'mapVue',
  components: {
    Map
  },
  data() {
    return {
      center : { lat: 46.776439,lng:2.419556},
      zoom:6,
    };
  },
  mounted() {
  },
  methods:{
    async setCenter(){
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
          let center = {lat:position.coords.latitude,lng:position.coords.longitude}
          let zoom = 15
          this.$refs.map.setCenter(center,zoom)
        })
      }
    }
  }
}
</script>

<style scoped>
.map {
  height: calc(100vh - 100px);
  width: 100%;
}
button{
  height:90px;
  width: 90px;
  border:none;
  border-radius:100%;
  background: #009EC2;
  cursor: pointer;
  margin:auto;
  margin-top:-2.5%
}
</style>
