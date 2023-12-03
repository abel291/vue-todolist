<template lang="">
    <div class="flex justify-stretch gap-x-4">
        <Button @click="removeCompletedTask" :disabled="!completedTasks" class="w-full md:w-1/2">Limpiar completadas</Button>
        <Button @click="removeAllTask" :disabled="!tasks.length" class="w-full md:w-1/2">Limpiar todas</Button>
    </div>
</template>
<script>
import {mapMutations, mapState, mapGetters} from "vuex";
import Button from "./Button.vue";
export default {
    components: {
        Button,
    },
    computed: {
        ...mapState(["tasks"]),
        ...mapGetters(["completedTasks"]),
    },
    methods: {
        ...mapMutations(["removeAllTask", "removeCompletedTask"]),
    },
};
</script>
<style lang=""></style>
