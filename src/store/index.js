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
            user: process.browser ? vuexLocalStorage.storage.user : {},
            locker:
                [
                    {
                        name: 'whole',
                        data: [
                            [
                                {
                                    type: 'area',
                                    value: 'A2',
                                    width: 1,
                                    height: 1,
                                    color: '#45e6a3',
                                    link: 'A2'
                                },
                                {
                                    type: 'area',
                                    value: 'B1',
                                    width: 3,
                                    height: 1,
                                    color: '#ffbf40',
                                    link: 'B1'
                                },
                                {
                                    type: 'area',
                                    value: 'B2',
                                    width: 1,
                                    height: 1,
                                    color: '#ffbf40',
                                    link: 'B2'
                                },
                                {
                                    type: 'area',
                                    value: 'C',
                                    width: 3,
                                    height: 1,
                                    color: '#4dd2ff',
                                    link: 'C'
                                },
                                {
                                    type: 'area',
                                    value: 'D',
                                    width: 1,
                                    height: 1,
                                    color: '#fff266',
                                    link: 'D'
                                },
                                {
                                    type: 'area',
                                    value: 'A3',
                                    width: 1,
                                    height: 1,
                                    color: '#45e6a3',
                                    link: 'A3'
                                },
                                {
                                    type: 'stairs',
                                    direction: 0,
                                    width: 1,
                                    height: 1,
                                },
                                {
                                    type: 'area',
                                    value: 'A4',
                                    width: 1,
                                    height: 1,
                                    link: 'A4',
                                    color: '#45e6a3',
                                },
                            ],
                            [
                                {
                                    type: 'stairs',
                                    direction: -90,
                                    width: 1,
                                    height: 1
                                },
                                {
                                    type: 'hallway',
                                    value: '복도',
                                    width: 11,
                                    height: 1
                                },
                            ],
                            [
                                {
                                    type: 'room',
                                    value: '231호',
                                    width: 3,
                                    height: 1
                                },
                                {
                                    type: 'area',
                                    value: 'A1',
                                    width: 3,
                                    height: 1,
                                    color: '#45e6a3',
                                    link: 'A1'
                                },
                                {
                                    type: 'room',
                                    value: '232호',
                                    width: 3,
                                    height: 1
                                },
                                {
                                    type: 'room',
                                    value: '화장실',
                                    width: 3,
                                    height: 1
                                }
                            ]
                        ]
                    },
                ],
        },
        getters,
        mutations,
        actions,
        plugins: process.browser ? [vuexLocalStorage.plugin] : []
    })
};

export default store;
