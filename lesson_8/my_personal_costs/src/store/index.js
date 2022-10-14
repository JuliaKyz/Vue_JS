import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // хранилище данных
  state: {
    costsData: [],
    error: false,
  },

  // для вычисления производного состояния на основе состояния хранилища
  // для получения данных из хранилища
  getters: {
    getCostsList: state => {
      return state.costsData;
    },
    getMaxId: state =>
      state.costsData.map(({ id }) => id).sort((a, b) => a - b)[
        state.costsData.length - 1
      ],
  },

  //для изменения данных в state
  mutations: {
    setCostsList: (state, payload) => (state.costsData = payload),
    addCostsList: (state, payload) => state.costsData.push(payload),
    deleteCostsList: (state, payload) => state.costsData.splice(
        state.costsData.indexOf(payload),
        1
    ),
    editCostsList: (state, payload) => (state.costsData = state.costsData.map((cost) => {
      if(cost.id === payload.id){
        return payload;
      } else{
        return cost
      }
    }))
  },

  // для обмена данными между клиентом-сервером (асинхронных операций)
  actions: {
    async loadCosts({ commit }) {
      const list = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            { id: 1, date: "01.10.2022", category: "food", value: 1000 },
            { id: 2, date: "02.10.2022", category: "transport", value: 300 },
            { id: 3, date: "02.10.2022", category: "healthcare", value: 550 }
          ]);
        }, 1000);
      });
      return commit("setCostsList", list);
    },
  },
});
