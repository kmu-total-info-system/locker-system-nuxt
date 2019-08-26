<template>
    <v-app>
        <nuxt/>
    </v-app>
</template>

<script>
    export default {
        name: "default",
        created() {
            this.$store.dispatch('LockerGet')
        }
    }
</script>
<style>
    body {
        margin: 0
    }
</style>
<style scoped>
</style>
