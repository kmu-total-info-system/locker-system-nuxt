<template>
    <div>
        <Login v-show="isForm" @formExit="formExit"></Login>
        <TopNav style="margin-bottom:150px;" @click="login"></TopNav>
        <v-container>
            <v-layout v-for="datas in locker" style="margin-bottom:75px;" column>
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
            <div v-if="locker.length == 1" class="blur">
            </div>
        </v-container>
    </div>
</template>

<script>
    import tableBlur from "../static/table-blur.png"
    import Login from "../components/Login"
    import Area from "../components/Area";
    import Locker from "../components/Locker";
    import Stairs from "../components/Stairs";
    import Room from "../components/Room";
    import Hallway from "../components/Hallway";
    import TopNav from "../components/TopNav";

    export default {
        name: 'index',
        components: {
            TopNav,
            Login,
            Area,
            Locker,
            Stairs,
            Room,
            Hallway,
        },
        methods: {
            click: function (data) {
                console.log(data)
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
        },
        data() {
            return {
                isForm: false,
                tableBlur,
            }
        },
        async asyncData ({ $axios, params }) {
            console.log('test')
            try {
                let pk = await $axios.$post('/auth/account/')
                console.log(pk)
                return { pk }
            } catch (e) {
                return { pk: [] }
            }
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
</style>
