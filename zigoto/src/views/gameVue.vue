<template>
    <div class="game">
        <headerVue />
        <div class="main">
            <div class="center_section">
                <h2>étudiants sensibilisées: {{ sensib }}</h2>
                <img v-on:click="(sensib += click_power)" :src="require('../assets/img/message.svg')">
            </div>
            <div class="side_bar_right">
                <ul>
                    <li v-on:click="eloquence_lvlUp()">
                        <img :src="require('../assets/img/talk.svg')" />
                        <div class="button-text">
                            <div>
                                <h3>éloquance</h3>
                                <p>+1 par clique</p>
                            </div>
                            <div>
                                <p>niveau: {{ lvl_eloquence }}</p>
                                <p>cout: {{ cout_eloquence }}</p>
                            </div>
                        </div>
                    </li>
                </ul>
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
    data() {
        return {
            sensib: 0,
            click_power: 1,
            lvl_eloquence: 1,
            cout_eloquence: 10
        }
    },

    methods: {
        eloquence_lvlUp() {
            if (this.sensib >= this.cout_eloquence) {
                this.sensib -= this.cout_eloquence
                this.click_power += 1
                this.lvl_eloquence += 1
                this.cout_eloquence += 10
            }
        }
    }
}
</script>

<style>
body,
html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

.game {
    height: 100vh;
    width: 100%;
}

h2 {
    text-align: center;
    padding-top: 30px;
    margin-right: 7%;
    color: #000;
}

.main {
    width: 100vw;
    height: 100%;
    background-color: #FA97CD;
    display: flex;
}

.center_section {
    width: 70%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.center_section img {
    width: 60%;
    height: 40%;
    margin: auto;
}

.side_bar_right {
    width: 29vw;
    height: 100%;
    /* background-color: rgb(223, 223, 223); */
    background-color: #fff;
    display: flex;
    border: #000 solid 1px;
}

.side_bar_right ul {
    list-style-type: none;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.side_bar_right li {
    width: 100%;
    height: 100px;
    background-color: #FFF;
    border-bottom: #000 solid 1px;
    margin-bottom: 10px;
    display: flex;
}

.side_bar_right li:hover {
    background-color: #FA97CD;
}

.side_bar_right li img {
    width: 50px;
    height: 50px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 5%;
    float: left;
}

.button-text {
    width: 100%;
    height: 50px;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 5%;
    float: left;
    display: flex;
    justify-content: space-between;
}
</style>