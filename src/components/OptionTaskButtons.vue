<template lang="">
    <div class="flex items-center gap-2">
        <button @click="completeTask(taskKey)" :class="[task.completed ? 'text-gray-300' : 'text-blue-500 hover:font-medium']" :disabled="task.completed">
            Completada
        </button>
        <button title="Borrar" @click="removeTask(taksKey)" class="text-red-500 hover:font-medium">Borrar</button>
    </div>
</template>
<script>
import {mapMutations} from "vuex";
export default {
    props: ["task", "taskKey"],
    methods: {
        ...mapMutations(["removeTask", "completeTask"]),
    },
};
</script>
