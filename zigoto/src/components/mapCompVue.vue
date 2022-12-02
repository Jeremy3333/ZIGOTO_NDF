<template>
    <div class="accueil">
        <headerVue class="header"/>
        <p>Cette page aurait du montrer une carte de toutes les pharmacies de france, mais nous n'avons pas réussie à temps !</p>
        <div id="map">
            <!--In the following div the HERE Map will render-->
            <div id="mapContainer" style="height:600px;width:100%" ref="hereMap">
        </div>
  </div>
    </div>
</template>

<script>
import headerVue from '../components/headerVue.vue'

export default {
    name: 'accueilVue',
    components: {
        headerVue
    },
    props: {
        center: Object,
        zoom: Number
    },
    data() {
        return {
            platform: null,
            apikey: "UPzBjZDkp0T0pFImMjB3tgOXvjGuqDVpM0cN-rRAjdk",
            // You can get the API KEY from developer.here.com
            map:null,
            H:null,
            ui:null,
        };
    },
    async mounted() {
        const platform = new window.H.service.Platform({
            apikey: this.apikey
        });
        this.platform = platform;
        await this.initializeHereMap();
        
    }, methods: {
        initializeHereMap() {
            const mapContainer = this.$refs.hereMap;
            const H = window.H;
            this.H = H
            var maptypes = this.platform.createDefaultLayers();

            var map = new H.Map(mapContainer, maptypes.vector.normal.map, {
                zoom: this.zoom,
                center: this.center
            });
            this.map = map

            addEventListener("resize", () => map.getViewPort().resize());

            // add behavior control
            new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

            // add UI
            const ui=H.ui.UI.createDefault(map, maptypes);
            this.ui = ui      
        }, 
        setCenter(center, zoom){
            this.map.setCenter(center)
            this.map.setZoom(zoom)
            // this.setPin({lat: 46.776439,lng:2.419556}, "<div style='width:250px'><p>OUI</p></div>")
        },
        getUserPos(){
            if (navigator.geolocation){
                return navigator.geolocation.getCurrentPosition()
            }
        },
        setPin(local,data){
            var ui = this.ui
            var H = this.H
            var map = this.map
            let pin = new H.map.Marker(local)
            pin.setData(data);
            
            pin.addEventListener("tap", event=>{
                let bubble = new this.H.ui.InfoBubble(
                    event.target.b,
                    {
                        content : event.target.getData()
                    }
                )
                ui.addBubble(bubble)
            },false)
            map.addObject(pin)
        },
    }
}
</script>

<style scoped>
#map {
  width: 60vw;
  min-width: 360px;
  text-align: center;
  margin: 5% auto;
  background-color: #ccc;
}
</style>