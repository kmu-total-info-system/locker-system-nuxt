<template>
    <v-toolbar style="background-color: white">
        <img width="28" height="24" :src="safebox"/>
        <v-toolbar-title style="margin-top:2px; font-size:18px;">사물함 신청하기</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="click" class="primary" v-if="!userInfo.is_active">
            로그인
        </v-btn>
        <v-toolbar-items v-else-if="userInfo.is_active">
            {{userInfo.name}}님 안녕하세요,&nbsp;
            <span @click.stop="logout" class="logout">로그아웃</span>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    import safebox from "../static/safebox.svg";

    export default {
        name: "TopNav",
        methods: {
            click: function (e) {
                console.log('test')
                this.$emit('click', e)
            },
            async logout(e) {
                await this.$auth.logout();
                this.$store.commit('Logout');
                this.$emit('logout', e)
            },

        },
        data() {
            return {
                loading: false,
                safebox,
            }
        },
        computed: {
            userInfo: function () {
                return this.$store.state.user;
            }
        },
    }
</script>

<style scoped>
    .v-toolbar__items {
        height: auto;
    }

    .logout {
        text-decoration: underline;
        cursor: pointer;
    }
</style>
