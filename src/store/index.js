import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex)
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const store = () => {
    return new Vuex.Store({
        state: {
            clickNone: true,
            current: 'whole',
            lockerCurrent: '',
            user: {},
            lockerData: [],
            lockerId: [],
        },
        getters,
        mutations,
        actions,
    })
};

export default store;
