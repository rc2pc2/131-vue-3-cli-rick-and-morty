<script>
import MainCharactersList from "./MainCharactersList.vue";
import MainResultsMessage from "./MainResultsMessage.vue";
import MainCharacterSearchInput from "./MainCharacterSearchInput.vue";
import axios from 'axios';

// 1: IMPORTO IL FILE STORE.JS
import { store } from "../store.js"; 

export default {
    components:{
        MainCharactersList,
        MainResultsMessage,
        MainCharacterSearchInput
    },
    data() {
        return {
            apiUrl: "https://rickandmortyapi.com/api/character/",
            store, // 2: Importo store nei miei data
        }
    },
    methods:{
         // chiamata API con axios
        getCharacters( characterName = "" ){
            axios.get("https://rickandmortyapi.com/api/character/", {
                    params: {
                        name: characterName,
                    }
                })
            .then((response) => {
                console.log(response.data.results);
                store.charactersList = response.data.results;
                store.loaded = true;
            })
            .catch(function (error) {
                console.log(error);
            });
        },

        searchNewCharacter(searchedInput){
            console.log(searchedInput);
            this.getCharacters(searchedInput);
        }
    },

    created(){
        this.getCharacters();
    }

}
</script>

<template>
    <main>
        <!-- nel parent ci mettiamo in ascolto per un evento personalizzato del component figlio -->
         <!-- colleghiamo il nostro evento custom ad un metodo da invocare -->
        <MainCharacterSearchInput @search-input="searchNewCharacter" />
        <MainCharactersList :charactersList="store.charactersList" />
        <MainResultsMessage />
    </main>
</template>

<style scoped>
</style>