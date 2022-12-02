<template>
    <div class="accueil">
        <headerVue class="header"/>
        <div class="wrapper">
            <div class="box btn-1"> <h2>La sensibilisation : le jeux !</h2> <img class="next" :src="require('../assets/img/next.svg')" alt=""> </div>
            <div class="box btn-2"> <h2>Où se dépister ? Se protéger ?</h2> <img class="next" :src="require('../assets/img/next.svg')" alt=""></div>
            <div class="box btn-3"> <h2>La sensibilisation façon jeune</h2> <img class="next" :src="require('../assets/img/next.svg')" alt=""></div>
            <div class="box last_box">

            </div>

            <img class="loupe" :src="require('../assets/img/loupe.png')" alt="">
            <img class="ribon" :src="require('../assets/img/ribon.png')" alt="">
        </div>
    </div>
</template>

<script>
import headerVue from '../components/headerVue.vue'

export default {
    name: 'accueilVue',
    components: {
        headerVue
    }
}
</script>

<style scoped>
.wrapper{
    z-index: 0;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    background: #9FEFD9;
    width: 100vw;
    align-items: center;
}
.header{
    z-index: 1;
    position: relative;
}
.box{
    width: 75%;
    color: rgb(75, 75, 75);
    text-align:center;
    border: 1px solid white;
    border-radius: 15px;
    margin: 1% 0;
    height: 5vh;
    background: rgba(255, 255, 255, 0.25);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box:hover{
    background: #FA97CD;
    border:none!important;
    margin:calc(1% + 1px) 0
}


.last_box{
    border: 1px solid white;
    border-radius: 15px;
    height: 45vh;
}

.loupe{
    position: absolute;
    z-index: 0;
    right:0%;
    bottom:0%
}
.ribon{
    transform: scaleX(-1);
    position: absolute;
    z-index: 0;
    left:-5%;
    top:0%
}
.next{
    position:absolute;
    margin-left: 60vw;
    width: 3vw;
    height: auto;
    transition-duration: 500ms ;
}

.box:hover .next{
    transform: translate(2.5vw);
    
}
</style>