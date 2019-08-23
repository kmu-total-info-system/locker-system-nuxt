import Vue from 'vue'
import Vuetify, {
    VApp, // required
    VNavigationDrawer,
    VFooter,
    VToolbar
} from 'vuetify/lib'
import {Ripple} from 'vuetify/lib/directives'

Vue.use(Vuetify, {
    theme: {
        primaryBackground: '#e4e8ed',
        primaryText: '#292e33',
        secondaryBackground: '#edf1f5',
        secondaryText: '#a1aab3',
        background: '#f7f9fa',
    },
    components: {
        VApp,
        VNavigationDrawer,
        VFooter,
        VToolbar
    },
    directives: {
        Ripple
    }
})
