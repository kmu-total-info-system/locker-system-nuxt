<template>
    <div>
        <v-dialog max-width="300" v-if="!userInfo.is_active" v-model="isForm">
            <Login></Login>
        </v-dialog>
        <v-snackbar
                v-model="snackbar"
                :timeout="5000"
        >
            {{snackbarText}}
            <v-btn
                    text
                    color="primary--text"
                    style="background-color: transparent"
                    @click="snackbar = false"
            >
                닫기
            </v-btn>
        </v-snackbar>
        <TopNav style="margin-bottom:150px;" @click.stop="isForm = true" @click="login"></TopNav>
        <v-container style="max-width:1200px !important">
            <Layout @lockerClicked="ready" :datas="datas" v-for="datas in lockerId"></Layout>
            <div style="margin-bottom:75px;" v-if="lockerData.length == 1" class="blur"></div>
            <v-hover v-slot:default="{ hover }">
                <Button :disabled="!isActivate" @click="apply" :loading="loading" v-model="loading"
                        :class="{overlay:isActivate&&hover,primaryBackground:!isActivate,primary:isActivate}"
                        class="apply">
                    <span style="color:white" :class="{'secondaryText--text':!isActivate}">신청하기</span>
                </Button>
            </v-hover>
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
                snackbar: false,
                snackbarText: '',
                isActivate: false,
                isForm: false,
                tableBlur,
                blockId: undefined,
                loading: false
            }
        },
        methods: {
            formExit: function () {
                this.isForm = false;
            },
            login: function () {
                this.isForm = true;
            },
            ready: function (data) {
                if (this.$store.state.lockerCurrent == data.id)
                    this.isActivate = true;
                else {
                    this.isActivate = false;
                }
                this.blockId = data.id;
            },
            apply: function () {
                this.loading = true;
                if (this.userInfo) {
                    this.$axios.$post('/locker/transaction', {
                        block: this.blockId
                    })
                        .then(res => {
                            this.loading = false;
                            this.snackbar = true;
                            this.snackbarText = '신청이 완료되었습니다'
                        })
                        .catch(err => {
                            this.snackbarText = err.response.data.message;
                            this.loading = false;
                            this.snackbar = true;
                        })
                } else {
                    this.snackbar = true;
                    this.snackbarText = '로그인 후 이용부탁드립니다'
                }
            }
        },
        computed: {
            lockerId: function () {
                console.log(this.$store.state.lockerId,'lockertesttest')
                return this.$store.state.lockerId;
            },
            lockerData: function () {
                return this.$store.state.lockerData;
            },
            userInfo: function () {
                return this.$store.state.user;
            },
            lockerCurrent: function () {
                return this.$store.state.lockerCurrent;
            }
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

    .overlay {
        background-image: url("../static/overlay-10.png");
        background-size: cover;
        background-repeat: no-repeat;
    }

    @media screen and (max-width: 920px) {
        .legend-container {
            margin: 0 !important;
        }
    }
</style>
