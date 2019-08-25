<template>
    <v-card :height="60*data.height" :width="60*data.width"
            class="card-layout z-index-10 secondaryBackground border-collapse-lighten text-xs-center align-center
                                d-flex justify-space-between">
        <div class="d-inline-block text secondaryText--text">{{ data.value }}</div>
    </v-card>
</template>

<script>
    export default {
        name: "Room",
        props:[
            'data'
        ]
    }
</script>
<style type="text/css">
    @import url('../assets/style/public.css');
</style>
<style scoped>

</style>
