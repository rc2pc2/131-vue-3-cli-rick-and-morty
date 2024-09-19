<script>
import { store } from "../store.js";

export default {
    data() {
      return {
        store,
      }
    }
}
</script>

<template>
    <header class="mb-3">
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Rick & Morty API</a>

                <li class="nav-item">
                    Numero di personaggi: {{ store.charactersList.length }} 
                </li>
            </div>
        </nav>

    </header>
</template>

<style scoped>
</style>