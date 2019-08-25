<template>
    <v-footer class="text-xs-center"
              padless
              height="auto"
    >
        <v-card
                color="secondaryText lighten-2"
                class="flex justify-space-between"
                flat
                tile
        >
            <v-card-text>
                <v-btn
                        v-for="img in imgs"
                        :key="img"
                        class="mx-5"
                        dark
                        icon
                >
                    <v-img style="border-radius:50px;" size="24px" :src="img"></v-img>
                </v-btn>
            </v-card-text>
            <v-card-text>
                사물함 신청 서비스는 '아몽'과 함께합니다
            </v-card-text>
            <v-card-actions class="grey darken-3 justify-center">
                {{ new Date().getFullYear() }} — <strong>Among</strong>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
    import among from "../static/among.svg"
    import returnLogo from "../static/return-logo.jpg"

    export default {
        name: "Footer",
        data() {
            return {
                imgs: [among, returnLogo]
            }
        }
    }
</script>

<style scoped>
</style>
