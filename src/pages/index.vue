<template>
    <div>
        <v-dialog max-width="300" v-if="!userInfo.is_active" v-model="isForm">
            <Login></Login>
        </v-dialog>
        <TopNav style="margin-bottom:150px;" @click.stop="isForm = true" @click="login"></TopNav>
        <v-container style="max-width:1200px !important">
            <Layout :datas="datas" v-for="datas in lockerId"></Layout>
            <div style="margin-bottom:75px;" v-if="locker.length == 1" class="blur"></div>
            <Button :disabled="!isActivate"
                    :class="{primaryBackground:!isActivate}" class="apply">
                <span :class="{'secondaryText--text':!isActivate}">신청하기</span>
            </Button>
        </v-container>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "../components/Footer"
    import tableBlur from "../static/table-blur.png"
    import Login from "../components/Login"
    import TopNav from "../components/TopNav";
    import Button from "../components/Button";
    import Layout from "../components/Layout";

    export default {
        name: 'index',
        components: {
            Layout,
            TopNav,
            Login,
            Footer,
            Button
        },
        data() {
            return {
                isActivate: false,
                isForm: false,
                tableBlur,
                lockerData: []
            }
        },
        methods: {
            formExit: function () {
                this.isForm = false;
            },
            login: function () {
                this.isForm = true;
            }
        },
        computed: {
            lockerId: function () {
                return this.$store.state.lockerId;
            },
            locker: function () {
                console.log(this.$store.state.locker);
                return this.$store.state.locker;
            },
            userInfo: function () {
                return this.$store.state.user;
            },
        },
    }
</script>

<style scoped>
    .container {
        -ms-overflow-style: none;
        overflow: scroll;
    }

    ::-webkit-scrollbar {
        display: none !important;
    }

    .blur {
        width: 740px;
        margin-left: -10px;
        height: 200px;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url("../static/table-blur.png");
    }

    .apply {
        width: 240px;
        font-weight: bold;
    }

    .legend-container {
        vertical-align: text-bottom;
    }

    .disabled {

    }

    @media screen and (max-width: 920px) {
        .legend-container {
            margin: 0 !important;
        }
    }
</style>
