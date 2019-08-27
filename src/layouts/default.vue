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
            if (this.$auth.user)
                this.$store.commit('User', this.$auth.user);
        }
    }
</script>
<style>
    body {
        margin: 0;
        -ms-overflow-style: none;
    }

    ::-webkit-scrollbar {
        display: none !important;
    }
</style>
<style scoped>
</style>
