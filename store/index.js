import Vuex from 'vuex';
import data from "./modules/data";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      data: {
        namespaced: true,
        ...data
      }
    }
  });
};

export default createStore;
