<template>
    <v-footer class="py-3 mt-5 text-xs-center"
              color="background"
              padless
              height="auto"
    >
        <v-card
                color="background"
                class="flex justify-space-between"
                flat
                tile
        >
            <v-img class="ma-auto mt-1" width="144" :src="among"/>
            <v-img class="ma-auto mb-2" width="321" :src="footerText"/>
            <v-card-actions class="font-size-12 pa-0 justify-center">
                ⓒ 2019 among. All Rights Reserved.
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
    import among from "../static/among.svg"
    import footerText from "../static/footer-text.png"

    export default {
        name: "Footer",
        data() {
            return {
                among,
                footerText
            }
        }
    }
</script>

<style scoped>
    .font-size-12 {
        font-size: 12px;
    }
</style>
