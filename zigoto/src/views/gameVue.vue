<template>
    <div class="game">
        <headerVue />
        <div class="main">
            <div class="center_section">
                <h2>étudiants sensibilisées: {{ (Math.floor(sensib * 10) / 10).toLocaleString('en-US') }}</h2>
                <p>puissance du clique: {{ (Math.floor(click_power * 10) / 10).toLocaleString('en-US') }}</p>
                <p>sensibilisation par second: {{ (Math.floor(sensib_auto * 10) / 10).toLocaleString('en-US') }}</p>
                <img v-on:click="(sensib += click_power);" :src="require('../assets/img/message.svg')">
            </div>
            <div class=" side_bar_right">
                <ul>
                    <li v-on:click="eloquence_lvlUp()">
                        <img :src="require('../assets/img/talk.svg')" />
                        <div class="button-text">
                            <div>
                                <h3>éloquance</h3>
                                <p>+{{ ((this.click_power * 1.5) - this.click_power).toFixed(1) }} par clique</p>
                            </div>
                            <div>
                                <p>niveau: {{ lvl_eloquence }}</p>
                                <p>cout: {{ cout_eloquence.toFixed(1) }}</p>
                            </div>
                        </div>
                    </li>
                    <li v-on:click="tract_lvlUp()">
                        <img :src="require('../assets/img/paper.svg')" />
                        <div class="button-text">
                            <div>
                                <h3>tract</h3>
                                <p>+{{ (this.lvl_tract * 1.5).toFixed(1) }} sensibilisation par seconde</p>
                            </div>
                            <div>
                                <p>niveau: {{ lvl_tract }}</p>
                                <p>cout: {{ cout_tract.toFixed(1) }}</p>
                            </div>
                        </div>
                    </li>
                    <li v-on:click="school_lvlUp()">
                        <img :src="require('../assets/img/teacher.svg')" />
                        <div class="button-text">
                            <div>
                                <h3>école</h3>
                                <p>+{{ (this.lvl_school * 10).toFixed(1) }} sensibilisation par seconde</p>
                            </div>
                            <div>
                                <p>niveau: {{ lvl_school }}</p>
                                <p>cout: {{ cout_school.toFixed(1) }}</p>
                            </div>
                        </div>
                    </li>
                    <li v-on:click="vidAd_lvlUp()">
                        <img :src="require('../assets/img/video.svg')" />
                        <div class="button-text">
                            <div>
                                <h3>publicité sur des vidéo</h3>
                                <p>+{{ (this.lvl_vidAd * 100).toFixed(1) }} sensibilisation par seconde</p>
                            </div>
                            <div>
                                <p>niveau: {{ lvl_vidAd }}</p>
                                <p>cout: {{ cout_vidAd.toFixed(1) }}</p>
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
            sensib_auto: 0,
            lvl_eloquence: 1,
            cout_eloquence: 5,
            lvl_tract: 1,
            cout_tract: 50,
            lvl_school: 1,
            cout_school: 100,
            lvl_vidAd: 1,
            cout_vidAd: 500,
            timer: null
        }
    },
    methods: {
        eloquence_lvlUp() {
            if (this.sensib >= this.cout_eloquence) {
                // inclrease click power in an exponential way
                this.click_power = this.click_power * 1.5;
                // increase sensibilisation
                this.sensib -= this.cout_eloquence;
                // increase eloquence level
                this.lvl_eloquence += 1;
                // increase eloquence cost
                this.cout_eloquence = this.cout_eloquence * 1.5;
            }
        },
        tract_lvlUp() {
            if (this.sensib >= this.cout_tract) {
                // increase sensibilisation
                this.sensib -= this.cout_tract;
                // increase tract level
                this.lvl_tract += 1;
                // increase tract cost
                this.cout_tract = this.cout_tract * 1.5;
                // increase sensibilisation per second in an exponential way
                this.sensib_auto += this.lvl_tract * 1.5;
            }
        },
        school_lvlUp() {
            if (this.sensib >= this.cout_school) {
                // increase sensibilisation
                this.sensib -= this.cout_school;
                // increase school level
                this.lvl_school += 1;
                // increase school cost
                this.cout_school = this.cout_school * 1.5;
                // increase sensibilisation per second in an exponential way
                this.sensib_auto += this.lvl_school * 10;
            }
        },
        vidAd_lvlUp() {
            if (this.sensib >= this.cout_vidAd) {
                // increase sensibilisation
                this.sensib -= this.cout_vidAd;
                // increase vidAd level
                this.lvl_vidAd += 1;
                // increase vidAd cost
                this.cout_vidAd = this.cout_vidAd * 1.5;
                // increase sensibilisation per second in an exponential way
                this.sensib_auto += this.lvl_vidAd * 100;
            }
        },
        sensibilisation() {
            this.sensib += this.sensib_auto;
        }
    },
    mounted: function () {
        this.timer = setInterval(() => {
            this.sensib += (this.sensib_auto / 10);
        }, 100)
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

.center_section img:active {
    transform: scale(0.95);
}

.side_bar_right {
    width: 29vw;
    height: 100%;
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
    padding-right: 5%;
    float: left;
    display: flex;
    justify-content: space-between;
}
</style>