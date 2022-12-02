<template>
    <div class="game">
        <div class="alertWrap" v-if="alert">
            <div class="alert">
                <h3>Le saviez vous?</h3>
                <p>{{ event[fun_fact_counter - 1].fun_fact }}</p>
                <div class="button" v-on:click="(alert = false)">
                    <p>ok</p>
                </div>
            </div>
        </div>
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
            timer: null,
            fun_fact_counter: 0,
            alert: false,
            event: [
                {
                    value: 10,
                    fun_fact: "Le TPE est un Traitement-Post-Exposition qui permet d'empêcher une contamination lorsqu'on a été exposé au VIH. Il se compose de plusieurs médicaments actifs contre le VIH et il doit être pris pendant 28 jours. Pour que son efficacité soit la meilleure possible, il faut le débuter immédiatement, de préférence moins de 4 heures après le risque et au plus tard dans les 48 heures, après un risque de transmission du VIH."
                },
                {
                    value: 50,
                    fun_fact: "pour faire un dépistage du SIDA il faut attendre un délai de 3 mois après la dernière prise de risque"
                },
                {
                    value: 100,
                    fun_fact: "Il n'y a pas de risque VIH quand on se fait faire une fellation mais il peut y en avoir si on fait une fellation à un homme qui a le VIH si sa charge virale n'est pas indétectable."
                },
                {
                    value: 500,
                    fun_fact: "symptômes semblables à ceux de la grippe : fièvre, maux de tête ou de gorge, douleurs musculaires ou articulaires, ganglions enflés au cou, aux aisselles ou à l'aine, ulcères dans la bouche, etc..."
                },
                {
                    value: 1000,
                    fun_fact: "Pour réaliser un test de dépistages du VIH, des IST et des hépatites, il est possible de se rendre dans un CeGIDD (Centre Gratuit d’Information, de Dépistage et de Diagnostic), mais aussi en laboratoire avec l'ordonnance d'un médecin, en pharmacie via un autotest ou par le biais d'un programme communautaire de dépistage."
                },
                {
                    value: 5000,
                    fun_fact: "Transmission par voie sexuelle Le risque de contamination est faible au cours d'une pénétration vaginale, car la transmission du VIH n'est pas très fréquente dans ce cas.Les études montrent que le taux de transmission au cours d'un rapport sexuel anal est 10 fois plus élevé que pour une pénétration vaginale."
                },
                {
                    value: 10000,
                    fun_fact: "Bravo vous avez fini le jeu"
                }
            ]
        }
    },
    mounted: function () {
        this.timer = setInterval(() => {
            this.sensib += (this.sensib_auto / 10);
            this.checkFunFact()
        }, 100)
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
        checkFunFact() {
            if (!(this.event.length <= this.fun_fact_counter)) {
                if (this.sensib >= this.event[this.fun_fact_counter].value) {
                    this.alert = true
                    this.fun_fact_counter++;
                }
            }
        },
        sensibilisation() {
            this.sensib += this.sensib_auto;
        }
    }

}
</script>

<style scoped>
body,
html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

.alertWrap {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.66);
    display: flex;
    justify-content: center;
    align-items: center;
}

.alert {
    width: 33vw;
    height: 50vh;
    background: white;
    border-radius: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.alert h3 {
    margin-top: 10%;
}

.alert p {
    margin: 5%;
}

.button {
    background-color: #5865F2;
    width: 40%;
    height: 10%;
    border-radius: 20px;
    margin-bottom: 10%;
    margin-left: auto;
    margin-right: auto;
    color: #FFF;
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