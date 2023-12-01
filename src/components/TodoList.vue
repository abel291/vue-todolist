<script setup>
import { ref, computed } from "vue";
import Button from "./Button.vue";

const tasks = ref([
	{ completed: true, name: "Preparar la reunión" },
	{ completed: false, name: "Organizar la presentación" },
	{ completed: true, name: "Cancelar el viaje" },
	{ completed: false, name: "Pagar las facturas" },
	{ completed: false, name: "Archivar las facturas" },
	{ completed: false, name: "Encargar material de oficina" },
]);

const newTask = ref("");
const addTask = () => {
	if (newTask.value) {
		tasks.value.unshift({
			completed: false,
			name: newTask.value,
		});
		newTask.value = "";
	}
	newTask.value = "";
};

const handleButtonCompleteTaks = (index) => {
	// tasks.value = tasks.value.map((item) => {
	// 	if (item.id == id) {
	// 		item.completed = true
	// 	}
	// 	return item
	// })
	tasks.value[index].completed = true;
};

const handleButtonRemoveTaks = (index) => {
	tasks.value.splice(index, 1);
};
const handleButtonRemoveAllTaks = () => {
	tasks.value = [];
};
const handleButtonRemoveCompletedTaks = () => {
	tasks.value = tasks.value.filter((item) => !item.completed);
};

const completedTasks = computed({
	// getter
	get() {
		return tasks.value.filter((item) => item.completed).length;
	},
});
const pendingTasks = computed({
	// getter
	get() {
		return tasks.value.filter((item) => !item.completed).length;
	},
});
</script>
<template lang="">
    <div class="bg-white overflow-hidden rounded-lg shadow w-full max-w-lg">
        <div class="p-6 text-neutral-800">
            <h1 class="font-medium text-lg text-center">Todo List</h1>
            <form class="my-8 flex items-center" @submit.prevent="addTask">
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
                                    @click="handleButtonCompleteTaks(index)"
                                    :class="[item.completed ? 'text-gray-300' : 'text-blue-500 hover:font-medium']"
                                    :disabled="item.completed"
                                >
                                    Completada
                                </button>
                                <button title="Borrar" @click="handleButtonRemoveTaks(index)" class="text-red-500 hover:font-medium">
                                    Borrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8">
                <div class="flex justify-stretch gap-x-4">
                    <Button @click="handleButtonRemoveCompletedTaks" :disabled="!completedTasks" class="w-full md:w-1/2">Limpiar completadas</Button>
                    <Button @click="handleButtonRemoveAllTaks" :disabled="!tasks.length" class="w-full md:w-1/2">Limpiar todas</Button>
                </div>
            </div>
            <div class="mt-6">
                <div class="text-sm font-medium text-red-500">Tareas pendiente: {{ pendingTasks }}</div>
                <div class="text-sm font-medium text-green-500 mt-1">Tareas Completadas: {{ completedTasks }}</div>
            </div>
        </div>
    </div>
</template>

<style lang=""></style>
