import Vue from 'vue';
import Vuex from 'vuex';
import state from "./state";
import getters from "./getters";
import mutations from "./mutation";

const store = () => {
    return new Vuex.Store({
        state,
        getters,
        mutations,
    })
};

export default store;