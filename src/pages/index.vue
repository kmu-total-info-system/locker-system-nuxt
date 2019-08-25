<template>
    <div>
        <v-dialog max-width="300" v-if="!userInfo.is_active" v-model="isForm">
            <Login></Login>
        </v-dialog>
        <TopNav style="margin-bottom:150px;" @click.stop="isForm = true" @click="login"></TopNav>
        <v-container>
            <v-layout class="d-inline-block" v-for="datas in locker"
                      style="min-width:720px; margin-bottom:75px;"
                      column>
                <v-layout v-for="data in datas.data"
                          v-if="datas.name == 'whole'"
                          align-start
                          justify-start row fill-height>
                    <template v-for="d in data">
                        <Area @click="click" v-if="(d.type=='area')" :data="d"></Area>
                        <Locker @click="click" v-else-if="(d.type=='locker')" :data="d"></Locker>
                        <Stairs v-else-if="(d.type=='stairs')" :data="d"></Stairs>
                        <Room v-else-if="(d.type=='room')" :data="d"></Room>
                        <Hallway v-else-if="(d.type=='hallway')" :data="d"></Hallway>
                    </template>
                </v-layout>
            </v-layout>
            <Legend style="vertical-align: text-bottom" class="ml-4 d-inline-block" :datas="datas"
                    v-for="datas in locker"></Legend>
            <div style="margin-bottom:75px;" v-if="locker.length == 1" class="blur">
            </div>
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
    import Area from "../components/Area";
    import Locker from "../components/Locker";
    import Stairs from "../components/Stairs";
    import Room from "../components/Room";
    import Hallway from "../components/Hallway";
    import TopNav from "../components/TopNav";
    import Button from "../components/Button";
    import Legend from "../components/Legend";

    export default {
        name: 'index',
        components: {
            Legend,
            TopNav,
            Login,
            Area,
            Locker,
            Stairs,
            Room,
            Hallway,
            Footer,
            Button
        },
        methods: {
            click: function (data) {
                if (data.type == 'area') {

                } else if (data.type == 'locker') {

                }
            },
            formExit: function () {
                this.isForm = false;
            },
            login: function () {
                this.isForm = true;
            }
        },
        computed: {
            locker: function () {
                return this.$store.state.locker;
            },
            userInfo: function () {
                return this.$store.state.user;
            }
        },
        data() {
            return {
                isActivate: false,
                isForm: false,
                tableBlur,
            }
        },
        mounted() {
            this.$store.dispatch('LockerGet')
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

    .disabled {

    }
</style>
