import Vuex from 'vuex';
import Vue from 'vue'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)
let vuexLocalStorage = null;
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

if (process.browser) {
    vuexLocalStorage = new VuexPersist({
        key: 'vuex', // The key to store the state on in the storage provider.
        storage: window.localStorage, // or window.sessionStorage or localForage
    })
}
const store = () => {
    return new Vuex.Store({
        state: {
            current: 'whole',
            lockerCurrent: '',
            clickNone: true,
            user: process.browser ? vuexLocalStorage.storage.user : {},
            lockerData: [],
            lockerId: [],
        },
        getters,
        mutations,
        actions,
        plugins: process.browser ? [vuexLocalStorage.plugin] : []
    })
};

export default store;
