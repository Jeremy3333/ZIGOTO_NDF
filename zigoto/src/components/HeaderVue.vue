<template>
    <header>
        <img :src="require('../assets/img/ISTV.png')">
        <h1>IST en folie</h1>
    </header>
</template>

<style>
header {
    width: 100%;
    height: 100px;
    background-color: #FA97CD;
    text-align: center;
    display: flex;
    flex-direction: row;
}

img {
    width: 100px;
    height: 100px;
    margin-left: 3%;
}

h1 {
    color: white;
    font-size: 3em;
    margin-top: auto;
    margin-bottom: auto;
    width: 90%;
}
</style>