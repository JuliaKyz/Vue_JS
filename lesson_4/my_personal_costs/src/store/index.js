import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    costsList: [],
    list: [],
    searchString: '',
    categoryList: [],
  },


  getters: {
    getCostsList: state => state.costsList,
    // getCategoryList: state => state.categoryList,
    getSearchString: ({ searchString }) => searchString,
    getFullCostValue: state => {
      return state.costsList.reduce((res, cur) => res + cur.value, 0)
    }
  },


  mutations: {
    setCostsList: (state, payload) => state.costsList = payload,
    addToList: (state, payload) => state.list.push(payload),
    removeFromList: (state, id) => {
      const idx = state.list.findIndex((item) => item.id == id)
      state.list.splice(idx, 1)
    },
    setSearchString: (state, payload) => state.searchString = payload
  },

  actions: {
    loadCostsList({ commit }) {
      return new Promise((resolve) => {
        //имитируем работу с сетью
        setTimeout(() => {
          resolve([
            { id: 1, title: 'food', price: 1500 },
            { id: 2, title: 'transport', price: 250 },
            { id: 3, title: 'healthcare', price: 800 },
          ])
        }, 1000)
      })
        .then((list) => commit('setCostsList', list))
    }
  }
})


