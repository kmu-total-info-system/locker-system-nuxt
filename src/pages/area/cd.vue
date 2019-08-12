<template>
    <v-container text-xs-center fluid>
        <v-layout>
            <v-flex d-inline-flex>
                <v-layout column>
                    <v-layout v-for="Clist in CtotalList" align-start justify-start row fill-height wrap>
                        <v-flex v-for="C in Clist">
                            <v-hover v-slot:default="{ hover }">
                                <v-card class="elevation-0 lime" :elevation="hover ? 6 : 0">
                                    <v-card-text class="pa-1 lighten-5 text-xs-center">
                                        C - <p class="width-50 d-inline-block">{{ C.num }}</p>
                                    </v-card-text>
                                </v-card>
                            </v-hover>
                        </v-flex>
                    </v-layout>
                </v-layout>
            </v-flex>
            <v-flex d-inline-flex>
                <v-layout column>
                    <v-layout v-for="Dlist in DtotalList">
                        <v-flex v-for="D in Dlist">
                            <v-hover v-slot:default="{ hover }">
                                <v-card class="elevation-0 lime" :elevation="hover ? 6 : 0">
                                    <v-card-text class="pa-1 lighten-5 text-xs-center">
                                        D - <p class="width-50 d-inline-block">{{ D.num }}</p>
                                    </v-card-text>
                                </v-card>
                            </v-hover>
                        </v-flex>
                    </v-layout>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex>
                <v-card-text class="pa-0">
                    복도
                </v-card-text>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs1>
                <v-card dark color="purple">
                    <v-card-text class="pa-0">
                        a-1
                        구역
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12>
                <v-card dark color="green">
                    <v-card-text class="pa-0">
                        232호실
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'area_CD',
        data() {
            return {
                CtotalList: [
                    [
                        {num: 1, state: 1},
                        {num: 2, state: 1},
                        {num: 11, state: 1},
                        {num: 12, state: 1},
                        {num: 21, state: 1},
                        {num: 22, state: 1},
                        {num: 31, state: 1},
                        {num: 32, state: 1},
                        {num: 41, state: 1},
                        {num: 42, state: 1},
                        {num: 51, state: 1},
                        {num: 52, state: 1},
                        {num: 61, state: 1},
                        {num: 71, state: 1},
                        {num: 72, state: 1},
                        {num: 81, state: 1},
                        {num: 91, state: 1},
                        {num: 92, state: 1},
                    ],
                    [
                        {num: 3, state: 1},
                        {num: 4, state: 1},
                        {num: 13, state: 1},
                        {num: 14, state: 1},
                        {num: 23, state: 1},
                        {num: 24, state: 1},
                        {num: 33, state: 1},
                        {num: 34, state: 1},
                        {num: 43, state: 1},
                        {num: 44, state: 1},
                        {num: 53, state: 1},
                        {num: 54, state: 1},
                        {num: 63, state: 1},
                        {num: 64, state: 1},
                        {num: 73, state: 1},
                        {num: 74, state: 1},
                        {num: 83, state: 1},
                        {num: 84, state: 1},
                        {num: 93, state: 1},
                        {num: 94, state: 1},
                    ],
                    [
                        {num: 5, state: 1},
                        {num: 6, state: 1},
                        {num: 15, state: 1},
                        {num: 16, state: 1},
                        {num: 25, state: 1},
                        {num: 26, state: 1},
                        {num: 35, state: 1},
                        {num: 36, state: 1},
                        {num: 45, state: 1},
                        {num: 46, state: 1},
                        {num: 55, state: 1},
                        {num: 56, state: 1},
                        {num: 65, state: 1},
                        {num: 66, state: 1},
                        {num: 75, state: 1},
                        {num: 76, state: 1},
                        {num: 85, state: 1},
                        {num: 86, state: 1},
                        {num: 95, state: 1},
                        {num: 96, state: 1},
                    ],
                    [
                        {num: 7, state: 1},
                        {num: 8, state: 1},
                        {num: 17, state: 1},
                        {num: 18, state: 1},
                        {num: 27, state: 1},
                        {num: 28, state: 1},
                        {num: 37, state: 1},
                        {num: 38, state: 1},
                        {num: 47, state: 1},
                        {num: 48, state: 1},
                        {num: 57, state: 1},
                        {num: 58, state: 1},
                        {num: 67, state: 1},
                        {num: 68, state: 1},
                        {num: 77, state: 1},
                        {num: 78, state: 1},
                        {num: 87, state: 1},
                        {num: 88, state: 1},
                        {num: 97, state: 1},
                        {num: 98, state: 1},
                    ],
                    [
                        {num: 9, state: 1},
                        {num: 10, state: 1},
                        {num: 19, state: 1},
                        {num: 20, state: 1},
                        {num: 29, state: 1},
                        {num: 30, state: 1},
                        {num: 39, state: 1},
                        {num: 40, state: 1},
                        {num: 49, state: 1},
                        {num: 50, state: 1},
                        {num: 59, state: 1},
                        {num: 60, state: 1},
                        {num: 69, state: 1},
                        {num: 70, state: 1},
                        {num: 79, state: 1},
                        {num: 80, state: 1},
                        {num: 89, state: 1},
                        {num: 90, state: 1},
                        {num: 99, state: 1},
                        {num: 100, state: 1},
                    ]
                ],
                DtotalList: [
                    [
                        {num: 1, state: 1},
                        {num: 2, state: 1},
                        {num: 11, state: 1},
                        {num: 12, state: 1},
                    ],
                    [
                        {num: 3, state: 1},
                        {num: 4, state: 1},
                        {num: 13, state: 1},
                        {num: 14, state: 1},
                    ],
                    [
                        {num: 5, state: 1},
                        {num: 6, state: 1},
                        {num: 15, state: 1},
                        {num: 16, state: 1},
                    ],
                    [
                        {num: 7, state: 1},
                        {num: 8, state: 1},
                        {num: 17, state: 1},
                        {num: 18, state: 1},
                    ],
                    [
                        {num: 9, state: 1},
                        {num: 10, state: 1},
                        {num: 19, state: 1},
                        {num: 20, state: 1},
                    ]
                ]
            }
        }
    }
</script>

<style scoped>
    .width-50 {
        width: 25px;
    }

    p {
        margin: 0;
    }
</style>
