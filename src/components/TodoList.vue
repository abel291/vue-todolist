<script setup>
import { ref, computed } from "vue";
import Button from "./Button.vue";
import { useStore } from 'vuex'


const store = useStore()

const tasks = computed(() => store.state.tasks)
const completedTasks = computed(() => store.getters.completedTasks)
const pendingTasks = computed(() => store.getters.pendingTasks)

const newTask = ref("");
const handleSubmitAddTask = () => {
	if (newTask.value) {
		store.commit('addTask', newTask.value)
	}
	newTask.value = "";
};

const handleButtonCompleteTask = (index) => {
	store.commit('completeTask', index)
};

const handleButtonRemoveTask = (index) => {
	store.commit('removeTask', index)
};
const handleButtonRemoveAllTask = () => {
	store.commit('removeAllTask')

};
const handleButtonRemoveCompletedTask = () => {
	store.commit('removeCompletedTask')
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
                            <div class="flex items-center gap-2">
                                <button
                                    @click="handleButtonCompleteTask(index)"
                                    :class="[item.completed ? 'text-gray-300' : 'text-blue-500 hover:font-medium']"
                                    :disabled="item.completed"
                                >
                                    Completada
                                </button>
                                <button title="Borrar" @click="handleButtonRemoveTask(index)" class="text-red-500 hover:font-medium">
                                    Borrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8">
                <div class="flex justify-stretch gap-x-4">
                    <Button @click="handleButtonRemoveCompletedTask" :disabled="!completedTasks" class="w-full md:w-1/2">Limpiar completadas</Button>
                    <Button @click="handleButtonRemoveAllTask" :disabled="!tasks.length" class="w-full md:w-1/2">Limpiar todas</Button>
                </div>
            </div>
            <div class="mt-6">
                <div class="text-sm font-medium text-red-500">Tareas pendiente: {{ pendingTasks }}</div>
                <div class="text-sm font-medium text-green-500 mt-1">Tareas Completadas: {{ completedTasks }}</div>
            </div>
        </div>
    </div>
</template>

