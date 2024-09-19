<script>
export default {
    data() {
        return {
            searchedString: "",
        }
    },
    methods:{
        searchCharacter(message){
            // console.log(message);
            this.$emit("searchInput", message, "ciao");
        }
    }
}
</script>

<template>
    <div class="mb-3 d-flex justify-content-center">
        <input class="me-2 form-input" type="text" v-model.trim="searchedString" @keyup.enter="searchCharacter(searchedString)">
        <button class="btn btn-success" @click="searchCharacter(searchedString)">Search</button>
    </div>
</template>

<style scoped>
</style>