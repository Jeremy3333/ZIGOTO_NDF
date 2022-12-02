<template>
    <header>
        <router-link to="/"><img :src="require('../assets/img/ISTV.png')"></router-link>
        <h1>IST en folie</h1>
    </header>
</template>

<style>
header {
    width: 100%;
    height: 100px;
    background-color: #FA97CD;
}

header a {
    width: 100px;
    height: 100px;
    margin-left: 3%;
    float: left;
}

header img {
    width: 100%;
    height: 100%;
}

h1 {
    text-align: center;
    padding-top: 30px;
    margin-right: 7%;
    color: #fff;
}
</style>