

import { createStore } from 'vuex'

export default createStore({
	state() {
		return {
			tasks: [
				{ completed: true, name: "Preparar la reunión" },
				{ completed: false, name: "Organizar la presentación" },
				{ completed: true, name: "Cancelar el viaje" },
				{ completed: false, name: "Pagar las facturas" },
				{ completed: false, name: "Archivar las facturas" },
				{ completed: false, name: "Encargar material de oficina" },
			]
		}
	},
	mutations: {
		addTask(state, newTask) {
			state.tasks.unshift({
				completed: false,
				name: newTask,
			});
		},
		completeTask(state, indexTask) {
			state.tasks[indexTask].completed = true;
		},
		removeTask(state, index) {
			state.tasks.splice(index, 1);
		},
		removeAllTask(state) {
			state.tasks = []
		},
		removeCompletedTask(state) {
			state.tasks = state.tasks.filter((item) => !item.completed);
		},
	},
	getters: {
		completedTasks(state) {
			return state.tasks.filter((item) => item.completed).length
		},
		pendingTasks(state) {
			return state.tasks.filter((item) => !item.completed).length
		}
	}
})