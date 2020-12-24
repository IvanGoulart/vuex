import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    tasks: [
      { name: 'Lavar Carro', completed: false },
      { name: 'Lavar Carro', completed: false },
      { name: 'Lavar Carro', completed: false },
      { name: 'Lavar Carro', completed: false },
      { name: 'Lavar Carro', completed: false },
    ],
  },
  mutations: {
    ADD_TASK (state, task) {
      state.tasks.push(task)

    }
  }

})


