<script>
export default {
    data() {
        return {
            
        }
    },

    methods:{
        // logInfo(){
        //     console.log("Evento infoLog e' stato attivato! 👾");
        //     this.$emit("infoLog");
        // }
    },
    props:{
        characterObject: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="col-4 col-lg-2 mb-3">
        <article class="card w-100" >
            <img :src="characterObject.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> {{ characterObject.name }}</h5>
                <p class="mb-1">Species: {{ characterObject.species }} </p>
                <p class="mb-1">Status:  {{ characterObject.status  }}</p>
                <p class="mb-1">Gender: {{ characterObject.gender }} </p>
            </div>
            <!-- quando avviene qualcosa qui dentro -->
             <!-- avverti il tuo parent che e' partito -->
              <!-- questo evento custom a cui darai un nome -->
            <!-- <div class="card-body">
                <button class="btn btn-primary"
                    @click="logInfo">
                    Info sulla card
                </button> -->
                <!-- quando avviene il click qui dentro -->
                 <!-- emetti un nuovo evento chiamato info -->
            <!-- </div> -->
        </article>
    </div>
</template>

<style scoped>
</style>