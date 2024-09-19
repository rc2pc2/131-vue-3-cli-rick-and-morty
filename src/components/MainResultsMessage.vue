<script>
import { store } from "../store.js";

export default {
    data() {
      return {
        store
      }
    }
}
</script>

<template>
    <section class="container">
        <div class="row">
            <div class="col-12">
                <p class="fs-3">
                    I personaggi trovati sono: {{ store.charactersList.length }}
                </p>

            </div>
        </div>
    </section>
</template>

<style scoped>
</style>