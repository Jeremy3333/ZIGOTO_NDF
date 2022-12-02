<template >
<div class="test">
    <h1>inserer titre</h1>
    <p>Le saviez vous ? Chaque jour, plus d'un million de personnes contractent une IST. 
        <br>En 2020, l'OMS estimait à 374 millions le nombre de personnes ayant contracté l'
        <br>une des quatre IST suivantes : chlamydiose (129 millions), gonorrhée (82 millio
        <br>ns), syphilis (7,1 millions) et trichomonase (156 millions).22 août 2022 </p> 
    <img class="objet1" :src="require('../assets/img/minisponge.gif')">
    <div class="objet2" ></div>
    <button class="favorite styled"
        type="button">
    fermer
</button>
</div>
</template>



<style scoped>
*{
    margin: 0;
    padding: 0;
}
h1{
    color:#CA9104;
    text-align:center;
    font-size: 60px;
    
}

p{
    color:#14E1D5;
    font-size: 30px;
    margin-top:17%;
    margin-left:1095px;
    overflow:hidden;
    white-space: nowrap;
   

}

button{
    background-color:transparent;
    
    text-align: center;
    font-size: 20px;
    margin-left: 13%;
    margin-bottom: 0%;
    border:none;
    color:#417029;
}



.objet1{
        position: absolute;
        top:45%;
        left:25%;


} 
.objet2{
        width: 100px;
        height: 100px;
        z-index:10000000000;
        position:absolute;
        top:70%;
        left:6%;
}
.test {
        height: 100vh;
        width: 100vw;
        background-image:url('../assets/img/SEXE.png');
     }

button:focus{
    
    transform:translate(-90px,50px);
}
</style>