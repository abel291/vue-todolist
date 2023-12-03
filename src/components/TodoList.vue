<script>
import {ref, computed} from "vue";
import Button from "./Button.vue";
import OptionTaskButtons from "./OptionTaskButtons.vue";
import ClearButtons from "./ClearButtons.vue";
import TaskStatistics from "./TaskStatistics.vue";
import {mapState} from "vuex";

export default {
    components: {
        Button,
        OptionTaskButtons,
        ClearButtons,
        TaskStatistics,
    },
    data() {
        return {
            newTask: "",
        };
    },
    computed: mapState(["tasks"]),
    methods: {
        // ...mapMutations([
        // 	'completeTask',
        // 	'removeTask',
        // 	'removeAllTask',
        // 	'removeCompletedTask',
        // ]),
        handleSubmitAddTask() {
            if (this.newTask) {
                this.$store.commit("addTask", this.newTask);
            }
            this.newTask = "";
        },
    },
};
</script>
<template lang="">
    <div class="bg-white overflow-hidden rounded-lg shadow w-full max-w-lg">
        <div class="p-6 text-neutral-800">
            <h1 class="font-medium text-lg text-center">Todo List</h1>
            <form class="my-8 flex items-center" @submit.prevent="handleSubmitAddTask">
                <input
                    v-model="newTask"
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-0 px-2 py-1.5 text-neutral-900 ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
                <Button type="submit" :disabled="!newTask" class="ml-2">Agregar</Button>
            </form>
            <div>
                <div class="space-y-2.5 text-sm">
                    <div v-for="(item, index) in tasks" :key="index">
                        <div class="flex justify-between max-w-fdivl">
                            <span v-bind:class="{'line-through': item.completed}">{{ item.name }}</span>
                            <OptionTaskButtons :task="item" :task-key="index" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8">
                <ClearButtons />
            </div>
            <div class="mt-6">
                <TaskStatistics />
            </div>
        </div>
    </div>
</template>
