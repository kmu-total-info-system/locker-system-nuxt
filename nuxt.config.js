const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
    srcDir: 'src/',
    /*
    ** Headers of the page
    */
    head: {
        title: 'locker-system-nuxt',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
        ]
    },
    plugins: ['~/plugins/vuetify.js'],
    css: ['~/assets/style/app.styl'],
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    build: {
        build: {
            vendor: ['vuetify'],
        },
        transpile: [/^vuetify/],
        plugins: [
            new VuetifyLoaderPlugin()
        ],
        extractCSS: true,
        extend(config, ctx) {
            // Run ESLint on save , clinet strictly
            // if (ctx.isDev && ctx.isClient) {
            //   config.module.rules.push({
            //     enforce: 'pre',
            //     test: /\.(js|vue)$/,
            //     loader: 'eslint-loader',
            //     exclude: /(node_modules)/
            //   })
            // }
            if (process.server) {
                config.externals = [
                    nodeExternals({
                        whitelist: [/^vuetify/]
                    })
                ]
            }
        },
        router: {
            base: '/',
            scrollBehavior: function (to, from, savedPosition) {
                return {x: 0, y: 0}
            }
        }
    }
}
