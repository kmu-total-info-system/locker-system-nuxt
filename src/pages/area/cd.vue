<template>
    <v-container text-xs-center fluid>
        <v-layout>
            <v-flex d-inline-flex xs12>
                <v-layout column>
                    <v-layout v-for="Clist in CtotalList" align-start justify-start row fill-height wrap>
                        <v-flex v-for="C in Clist">
                            <v-card-text class="pa-1 lime lighten-5 text-xs-center">{{C}}</v-card-text>
                        </v-flex>
                    </v-layout>
                </v-layout>
            </v-flex>
            <v-flex d-inline-flex xs3>
                <v-layout column>
                    <v-layout v-for="Dlist in DtotalList">
                        <v-flex v-for="D in Dlist">
                            <v-card-text class="pa-1 lime lighten-5 text-xs-center">{{D}}</v-card-text>
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
        data () {
            return {
                CtotalList: [
                    [
                        'C-1', 'C-2', 'C-11', 'C-12', 'C-21',
                        'C-22', 'C-31', 'C-32', 'C-41', 'C-42',
                        'C-51', 'C-52', 'C-61', 'C-62', 'C-71',
                        'C-72', 'C-81', 'C-82', 'C-91', 'C-92'
                    ],
                    [
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1',
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1',
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1',
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1'
                    ],
                    [
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1',
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1',
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1',
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1'
                    ],
                    [
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1',
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1',
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1',
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1'
                    ],
                    [
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1',
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1',
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1',
                        'C-1', 'C-1', 'C-1', 'C-1', 'C-1'
                    ]
                ],
                DtotalList: [
                    [
                        'D-1', 'D-2', 'D-11', 'D-12'
                    ],
                    [
                        'D-1', 'D-2', 'D-11', 'D-12'
                    ],
                    [
                        'D-1', 'D-2', 'D-11', 'D-12'
                    ],
                    [
                        'D-1', 'D-2', 'D-11', 'D-12'
                    ],
                    [
                        'D-1', 'D-2', 'D-11', 'D-12'
                    ]
                ]
            }
        }
    }
</script>

<style scoped>
</style>
