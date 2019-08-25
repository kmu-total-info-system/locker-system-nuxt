<template>
    <v-snackbar
            v-model="snackbar"
            :vertical="vertical"
    >
        {{ text }}
        <v-btn
                color="indigo"
                text
                @click="snackbar = false"
        >
            Close
        </v-btn>
    </v-snackbar>
</template>

<script>
    export default {
        name: "Snackbar"
    }
</script>

<style scoped>

</style>
