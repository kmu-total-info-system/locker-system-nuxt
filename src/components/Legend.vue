<template>
    <v-card class="pa-2 elevation-0 font-size-0">
        <div class="mb-2" v-for="data in legend">
            <template v-if="!data.color">
                <img :src="upstairs" style="width:16px;height: 16px; vertical-align: top;" class="mr-2 d-inline-block">
                <div v-if="!data.color" class="d-inline-block font-size-12">{{data.value}}</div>
            </template>
            <template v-else>
                <div class="mr-3 d-inline-block" :style="{backgroundColor:data.color}"
                     style="width:10px;height: 10px; border-radius:50px;"></div>
                <div class="d-inline-block font-size-12">{{data.value.join()}}</div>
            </template>
        </div>
    </v-card>
</template>

<script>
    import upstairs from "../static/stairs-small.png"

    export default {
        name: "Legend",
        props: [
            'datas'
        ],
        data() {
            return {
                upstairs,
                legend: []
            }
        },
        created() {
            let locker = this.datas.data;
            let isStair = false;
            for (let arrIdx = 0; arrIdx < locker.length; arrIdx++) {
                for (let dataIdx = 0; dataIdx < locker[arrIdx].length; dataIdx++) {
                    let same = false;
                    if (locker[arrIdx][dataIdx].type == 'area') {
                        if (this.legend.length == 0) {
                            this.legend.push({
                                value: [locker[arrIdx][dataIdx].value],
                                color: locker[arrIdx][dataIdx].color
                            });
                        } else {
                            for (let legendIdx = 0; legendIdx < this.legend.length; legendIdx++) {
                                if (this.legend[legendIdx].color == locker[arrIdx][dataIdx].color) {
                                    this.legend[legendIdx].value.push(locker[arrIdx][dataIdx].value);
                                    same = true;
                                    break;
                                }
                            }
                            if (!same) {
                                this.legend.push({
                                    value: [locker[arrIdx][dataIdx].value],
                                    color: locker[arrIdx][dataIdx].color
                                });
                            }
                        }
                    } else if (locker[arrIdx][dataIdx].type == 'stairs') {
                        if (!isStair) {
                            this.legend.push({
                                value: '계단',
                            });
                            isStair = true;
                        }
                    }
                }
            }
        },
    }
</script>

<style scoped>
    .font-size-12 {
        font-size: 12px;
    }

    .font-size-0 {
        font-size: 0;
    }
</style>
