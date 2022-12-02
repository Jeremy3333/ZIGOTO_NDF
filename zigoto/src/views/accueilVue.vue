<template>
    <div class="accueil">
        <headerVue class="header" />
        <div class="wrapper">
            <router-link to="/game" class="box btn-1">
                <h2>La sensibilisation : le jeux !</h2> <img class="next" :src="require('../assets/img/next.svg')"
                    alt="">
            </router-link>
            <router-link to="/mauche" class="box btn-3">
                <h2>La sensibilisation façon jeune</h2> <img class="next" :src="require('../assets/img/next.svg')"
                    alt="">
            </router-link>
            <div class="box last_box">
                <h2>statistique</h2>
                <div class="box-center">
                    <div class="inner-box">
                        <h3>Les Chiffre en France</h3>
                        <ul>
                            <li>
                                <p>- 6 155 personnes ont découvert leur séropositivité en 2018.</p>
                            </li>
                            <li>
                                <p>- 52% des personnes ayant découvert leur séropositivité VIH en 2018 n’avaient jamais
                                    fait de test de dépistage auparavant.</p>
                            </li>
                            <li>
                                <p>- Les femmes représentaient 35% des découvertes de séropositivité VIH en 2018.</p>
                            </li>
                            <li>
                                <p>- Par classe d’âge, 13% des personnes ayant découvert leur séropositivité étaient
                                    âgées
                                    de moins de 25 ans, 64% de 25 à 49
                                    ans et 23% de 50 ans ou plus.</p>
                            </li>
                            <li>
                                <p>- Par mode de contamination, les personnes ayant découvert leur séropositivité en
                                    2018
                                    ont été contaminées par rapports
                                    hétérosexuels (56%), rapports sexuels entre hommes (40%), usage de drogues
                                    injectables (2%).</p>
                            </li>
                        </ul>
                    </div>
                    <div class="inner-box">
                        <h3>Les Chiffre dans le monde</h3>
                        <ul>
                            <li>
                                <p>- 37, 9 millions de personnes vivaient avec le VIH en 2018.</p>
                            </li>
                            <li>
                                <p>- 1, 7 million de personnes ont été infectées par le VIH en 2018.</p>
                            </li>
                            <li>
                                <p>- 770 000 personnes sont décédées de maladies liées au sida en 2018.</p>
                            </li>
                            <li>
                                <p>- 23, 3 millions de personnes séropositives étaient sous traitement anti-VIH en 2018
                                    contre 21, 7 millions à la fin de
                                    2017.</p>
                            </li>
                            <li>
                                <p>- Près de 79% des personnes vivant avec le VIH connaissaient leur statut sérologique
                                    en
                                    2018.</p>
                            </li>
                            <li>
                                <p>- Chaque semaine, 6200 adolescentes et jeunes femmes ont été contaminées par le VIH.
                                </p>
                            </li>
                            <li>
                                <p>- 54% des nouvelles infections dans le monde en 2018 concernaient des populations
                                    clés
                                    (travailleuses du sexe, personnes
                                    qui s’injectent des drogues, hommes ayant des rapports sexuels avec d’autres hommes,
                                    transgenres) et leurs partenaires
                                    sexuels contre 40% en 2017.</p>
                            </li>
                        </ul>
                    </div>
                </div>
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
a {
    text-decoration: none;
}

.wrapper {
    z-index: 0;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    background: #9FEFD9;
    width: 100vw;
    align-items: center;
}

.header {
    z-index: 1;
    position: relative;
}

.box {
    width: 75%;
    color: rgb(75, 75, 75);
    text-align: center;
    border: 1px solid white;
    border-radius: 15px;
    margin: 1% 0;
    height: 5vh;
    background: rgba(255, 255, 255, 0.25);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.box:hover {
    background: #FA97CD;
    border: none !important;
    margin: calc(1% + 1px) 0
}


.last_box {
    border: 1px solid white;
    border-radius: 15px;
    height: 45vh;
    flex-direction: column;
}

.last_box h2 {
    margin-top: 10px;
}

.box-center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: left;
}

h3 {
    margin-bottom: 10px;
}

.box-center ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.box-center ul li {
    margin: 5px 0;
}

.box-center ul li p {
    font-size: 1em;
}

.inner-box {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.loupe {
    position: absolute;
    z-index: 0;
    right: 0%;
    bottom: 0%
}

.ribon {
    transform: scaleX(-1);
    position: absolute;
    z-index: 0;
    left: -5%;
    top: 0%
}

.next {
    position: absolute;
    margin-left: 60vw;
    width: 3vw;
    height: auto;
    transition-duration: 500ms;
}

.box:hover .next {
    transform: translate(2.5vw);

}
</style>