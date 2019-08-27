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
        <TopNav @click.stop="isForm = true" @click="login"></TopNav>
        <v-container style="max-width:1200px !important">
            <div style="margin-top:20px;margin-bottom:100px; width:300px;" class="pa-1">
                <span class="mr-5" style="margin-top:2px;">
                    서버시간: {{mutateTime(currentTime)}}
                </span>
                <span v-if="completeLocker">내가 신청한 사물함: {{completeLocker.value}}</span>
            </div>
        </v-container>

        <v-container style="max-width:1200px !important">
            <Layout @lockerClicked="ready" :datas="datas" v-for="datas in lockerId"></Layout>
            <div style="margin-bottom:75px;" v-if="lockerData.length == 1" class="blur"></div>
            <Button :disabled="clickNone||!isActivate" @click="apply" :loading="loading" v-model="loading"
                    :class="{
                    overlay:isActivate,
                        primaryBackground:clickNone||!isActivate
                        ,primary:isActivate}"
                    class="apply">
                    <span style="color:white"
                          :class="{'secondaryText--text':clickNone||!isActivate}">신청하기</span>
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
    import Locker from "../components/Locker";

    export default {
        name: 'index',
        components: {
            Layout,
            TopNav,
            Login,
            Footer,
            Button,
            Locker
        },
        data() {
            return {
                snackbar: false,
                snackbarText: '',
                isActivate: false,
                isForm: false,
                tableBlur,
                blockId: undefined,
                loading: false,
                localTime: 0,
                completeLocker: []
            }
        },
        methods: {
            mutateTime: function (data) {
                let d = new Date(data);
                data = d.getFullYear() + '년'
                    + (d.getMonth() + 1) + '월'
                    + d.getDate() + '일'
                    + d.getHours() + '시'
                    + d.getMinutes() + '분'
                    + d.getSeconds() + '초';
                return data;
            },
            setTime: function () {
                this.$axios.$get('/locker/time')
                    .then(res => {
                        this.currentTime = new Date(res.time);
                        this.localTime = new Date();
                        setInterval(() => {
                            let nowLocalTime = new Date();
                            this.currentTime = new Date(this.currentTime.getTime() + (nowLocalTime - this.localTime));
                            this.localTime = new Date(nowLocalTime.getTime());
                        }, 100);
                        setInterval(() => {
                            this.setTime();
                        }, 60000)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
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
            clickNone: function () {
                return this.$store.state.clickNone;
            },
            lockerId: function () {
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
        async asyncData({$axios}) {
            let data = await $axios.$get('/locker/time');
            console.log(data)
            return {currentTime: new Date(data.time)}

        },
        created() {
            this.setTime();
            this.$axios.$get('/locker/transaction')
                .then(res => {
                    this.completeLocker = res.block;
                })
                .catch(err => {
                    console.log(err)
                })
        }
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

    .overlay:hover {
        background-image: url("../static/overlay-10.png");
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 100;
    }

    @media screen and (max-width: 920px) {
        .legend-container {
            margin: 0 !important;
        }
    }
</style>
