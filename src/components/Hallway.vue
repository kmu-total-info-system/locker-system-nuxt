<template>
    <v-card :height="58*data.height" :width="58*data.width"
            style="background-color: transparent"
            class="card-layout elevation-0 text-xs-center align-center background
                                d-flex justify-space-between">
        <div class="d-inline-block text secondaryText--text">{{ data.value }}</div>
    </v-card>
</template>

<script>
    export default {
        name: "Hallway",
        props: [
            'data'
        ],
    }
</script>
<style type="text/css">
    @import url('../assets/style/public.css');
</style>
<style scoped>
</style>
