<template>
    <v-toolbar style="background-color: white">
        <img width="28" height="24" :src="safebox"/>
        <v-toolbar-title style="margin-top:2px; font-size:18px;">사물함 신청하기</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="click" class="primary" v-if="!userInfo.isLogin">
            로그인
        </v-btn>
        <v-toolbar-items v-else-if="userInfo.isLogin">
            {{userInfo.user.name}}님 안녕하세요, <span>로그아웃</span>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    import safebox from "../static/safebox.svg";

    export default {
        name: "TopNav",
        methods: {
            click: function () {
                this.$emit('click')
            }
        },
        data() {
            return {
                loading: false,
                safebox
            }
        },
        computed: {
            userInfo: function () {
                return this.$store.state.user;
            }
        }
    }
</script>

<style scoped>
    .v-toolbar__items {
        height: auto;
    }
</style>
