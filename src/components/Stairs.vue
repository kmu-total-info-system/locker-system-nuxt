<template>
    <v-card :height="60*data.height" :width="60*data.width"
            class="elevation-0 text-xs-center align-center background
                                d-flex justify-space-between">
        <div class="font-size-0">
            <img class="stairs"
                 :style="{transform:'rotate('+data.direction+'deg)'}"
                 :src="upstairs"/>
        </div>
    </v-card>
</template>

<script>
    import upstairs from "../static/upstairs.png"

    export default {
        name: "Stairs",
        props: [
            'data'
        ],
        data() {
            return {
                upstairs
            }
        }
    }
</script>
<style type="text/css">
    @import url('../assets/style/public.css');
</style>
<style scoped>
    .stairs {
        width: 100%;
        height: 100%;
    }

    .font-size-0 {
        font-size: 0 !important;
    }
</style>
