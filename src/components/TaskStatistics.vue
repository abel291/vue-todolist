<template lang="">
    <div class="">
        <div class="text-sm font-medium text-red-500">Tareas pendiente: {{ pendingTasks }}</div>
        <div class="text-sm font-medium text-green-500 mt-1">Tareas Completadas: {{ completedTasks }}</div>
    </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
    computed: {
        ...mapGetters(["completedTasks", "pendingTasks"]),
    },
};
</script>
<style lang=""></style>
