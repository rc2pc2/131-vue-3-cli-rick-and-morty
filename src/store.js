import { reactive } from "vue";

export const store = reactive({
    // ! come i data
    loaded : false,
    charactersList : [],
    message: ""
});