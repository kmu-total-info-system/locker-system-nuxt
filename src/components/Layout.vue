<template>
    <div style="margin-bottom:80px;">
        <v-layout class="d-inline-block mb-3"
                  style="min-width:720px;"
                  column>
            <v-layout v-for="data in items"
                      align-start
                      justify-start row fill-height>
                <template v-for="d in data">
                    <Area @areaClick="click" v-if="(d.type==2)" :data="d"></Area>
                    <Locker @click="click" v-else-if="(d.type==4)" :data="d"></Locker>
                    <Stairs v-else-if="(d.type==5)" :data="d"></Stairs>
                    <Room v-else-if="(d.type==3)" :data="d"></Room>
                    <Hallway v-else-if="(d.type==1)" :data="d"></Hallway>
                </template>
            </v-layout>
        </v-layout>
        <v-card class="ml-4 pa-2 elevation-0 font-size-0 legend d-inline-block">
            <div class="mb-2 mobile" v-for="data in legend">
                <div v-if="data.type == 4" class="locker-mobile-container">
                    <div class="mb-2 font-size-12 locker-mobile">
                        <div class="legend-box mr-2 d-inline-block">
                        </div>
                        <span>신청가능</span>
                    </div>
                    <div class="mb-2 font-size-12 locker-mobile">
                        <div class="legend-box mr-2 d-inline-block"
                             :style="{backgroundColor:data.color}">
                        </div>
                        <span>선택됨</span>
                    </div>
                    <div class="mb-2 font-size-12 locker-mobile">
                        <div class="legend-box mr-2 d-inline-block legend-background-image"
                             :style="{ backgroundImage: 'url(' + already + ')' }">
                        </div>
                        <span>신청됨</span>
                    </div>
                    <div class="mb-2 font-size-12 locker-mobile">
                        <div class="legend-box mr-2 d-inline-block legend-background-image"
                             :style="{ backgroundImage: 'url(' + x + ')' }">
                        </div>
                        <span>고장</span>
                    </div>
                </div>
                <template v-else-if="!data.color&&data.value">
                    <img :src="upstairs"
                         class="mr-2 d-inline-block stairs">
                    <div v-if="!data.color" class="d-inline-block font-size-12">{{data.value}}</div>
                </template>
                <template v-else-if="data.color">
                    <div class="mr-3 d-inline-block circle"
                         :style="{backgroundColor:data.color}"></div>
                    <div class="d-inline-block font-size-12">{{data.value.join()}}</div>
                </template>
            </div>
        </v-card>
    </div>
</template>


<script>
    import Area from "../components/Area";
    import Locker from "../components/Locker";
    import Stairs from "../components/Stairs";
    import Room from "../components/Room";
    import Hallway from "../components/Hallway";
    import x from "../static/x-small.svg";
    import already from "../static/already-small.jpg";
    import upstairs from "../static/stairs-small.png"

    export default {
        name: "Layout",
        transition: 'fade',
        props: ['datas'],
        components: {
            Area,
            Locker,
            Stairs,
            Room,
            Hallway,
        },
        data() {
            return {
                items: [[]],
                legend: [],
                x,
                already,
                upstairs,
                layoutData: [],
                testIdx: undefined
            }
        },
        methods: {
            click: function (data) {
                if (data.type == 2) {
                    if (data.link) {
                        this.$store.commit('LockerClick', data.link);
                    }
                } else if (data.type == 4) {
                    this.$emit('lockerClicked', data)
                }
            },
            getLocker: function () {
                this.items = [[]];
                this.$axios.$get('/locker/' + this.datas.id)
                    .then(res => {
                        let locker = res.blocks;
                        let isStair = false;
                        for (let arrIdx = 0; arrIdx < locker.length; arrIdx++) {
                            let same = false;
                            if (locker[arrIdx].type == 4) {
                                this.legend = [];
                                this.legend.push({
                                    type: locker[arrIdx].type,
                                    color: locker[arrIdx].color
                                })
                                break;
                            }
                            if (locker[arrIdx].type == 2) {
                                if (this.legend.length == 0) {
                                    this.legend.push({
                                        value: [locker[arrIdx].value],
                                        color: locker[arrIdx].color
                                    });
                                } else {
                                    for (let legendIdx = 0; legendIdx < this.legend.length; legendIdx++) {
                                        if (this.legend[legendIdx].color == locker[arrIdx].color) {
                                            this.legend[legendIdx].value.push(locker[arrIdx].value);
                                            same = true;
                                            break;
                                        }
                                    }
                                    if (!same) {
                                        this.legend.push({
                                            value: [locker[arrIdx].value],
                                            color: locker[arrIdx].color
                                        });
                                    }
                                }
                            } else if (locker[arrIdx].type == 5) {
                                if (!isStair) {
                                    this.legend.push({
                                        value: '계단',
                                    });
                                    isStair = true;
                                }
                            }
                        }
                        let itemsIdx = 0;
                        for (let lockerIdx = 0; lockerIdx < locker.length; lockerIdx++) {
                            if (locker[lockerIdx].type == 6) {
                                itemsIdx++;
                                this.items[itemsIdx] = [];
                                continue;
                            }
                            this.items[itemsIdx].push(locker[lockerIdx])
                        }
                        this.$store.commit('LockerData', {data: this.items, isWhole: true});
                        this.layoutData = this.lockerData;
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        },
        computed: {
            lockerData: function () {
                return this.$store.state.lockerData;
            }
        },
        created() {
            this.getLocker();
        },
        watch: {
            datas: function () {
                this.getLocker();
            }
        }
    }
</script>

<style scoped>
    .font-size-12 {
        font-size: 12px;
    }

    .font-size-0 {
        font-size: 0;
    }

    .legend-box {
        width: 10px;
        height: 10px;
        border: solid 1px #525c66
    }

    .legend-background-image {
        background-repeat: no-repeat;
        background-size: cover;
    }

    .circle {
        width: 10px;
        height: 10px;
        border-radius: 50px;
    }

    .stairs {
        width: 16px;
        height: 16px;
        vertical-align: top;
    }

    .legend {
        vertical-align: top
    }

    @media screen and (max-width: 920px) {
        .legend {
            justify-content: space-evenly;
            width: 720px;
            display: flex !important;
            margin-left: 0;
        }

        .mobile {
            display: inline-block;
        }

        .locker-mobile-container {
            justify-content: space-evenly;
            width: 360px;
            display: flex !important;
        }

        .locker-mobile {
            display: inline-block;
        }
    }
</style>
