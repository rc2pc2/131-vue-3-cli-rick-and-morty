<script>
import MainCharactersListItem from "./MainCharactersListItem.vue";
// import MainLoader from "./MainLoader.vue";

export default {
    data() {
        return {
            // charactersList: [],
        }
    },
    props:{
        charactersList:{
            type: Array,
            required: true,
        }
    },
    methods:{
        parentInfoLog(){
            console.log("L'evento info-log e' arrivato al parent 👽");
        }
    },
    components:{
        MainCharactersListItem,
        // MainLoader
    },
   
}
</script>

<template>
    <section class="container">
        <div class="row">
            <MainCharactersListItem 
                v-for="characterItem in charactersList"   
                :key="characterItem.id"
                :characterObject="characterItem"
            />
            <!-- componente figlio, io da te mi aspetto un evento personalizzato -->
             <!-- questo evento si chiama info -->
              <!-- quando tu attiverai questo evento -->
               <!-- allora io eseguiro il mio console log -->
        </div>
    </section>

</template>

<style scoped>
</style>