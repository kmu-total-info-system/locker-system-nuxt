<template>
    <v-container text-xs-center fluid>
        <v-layout>
            <v-flex>
                <v-card class="elevation-0 lime">
                    <v-card-text>
                        복도
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs5 class="text-center">
                <v-layout fill-height align-center class="lime">
                    <v-flex>
                        <v-card height="100%" class="elevation-0 lime text-xs-center">
                            <v-card-text>
                                231호
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs5>
                <v-layout v-for="AList in ALeft">
                    <v-flex v-for="A in AList">
                        <v-card class="elevation-0 lime">
                            <v-card-text class="pa-1 lighten-5 text-xs-center">
                                {{A.num}}
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs5 class="text-center">
                <v-layout fill-height align-center class="lime">
                    <v-flex>
                        <v-card height="100%" class="elevation-0 lime text-xs-center">
                            <v-card-text>
                                복도
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs5>
                <v-layout v-for="AList in ARight">
                    <v-flex v-for="A in AList">
                        <v-card class="elevation-0 lime">
                            <v-card-text class="pa-1 lighten-5 text-xs-center">
                                {{A.num}}
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs5>
                <v-layout fill-height align-center class="lime">
                    <v-flex>
                        <v-card height="100%" class="elevation-0 lime text-xs-center">
                            <v-card-text text-center>
                                232호
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'a1',
        data() {
            return {
                ALeft: [
                    [
                        {num: 3, state: 1},
                        {num: 6, state: 1},
                        {num: 9, state: 1},
                    ],
                    [
                        {num: 2, state: 1},
                        {num: 'X', state: 1},
                        {num: 8, state: 1},
                    ],
                    [
                        {num: 1, state: 1},
                        {num: 4, state: 1},
                        {num: 7, state: 1},
                    ],
                    [
                        {num: 30, state: 1},
                        {num: 33, state: 1},
                        {num: 36, state: 1},
                    ],
                    [
                        {num: 29, state: 1},
                        {num: 32, state: 1},
                        {num: 35, state: 1},
                    ],
                    [
                        {num: 28, state: 1},
                        {num: 31, state: 1},
                        {num: 34, state: 1},
                    ],
                ],
                ARight: [
                    [
                        {num: 16, state: 1},
                        {num: 13, state: 1},
                        {num: 10, state: 1},
                    ],
                    [
                        {num: 17, state: 1},
                        {num: 14, state: 1},
                        {num: 11, state: 1},
                    ],
                    [
                        {num: 18, state: 1},
                        {num: 15, state: 1},
                        {num: 12, state: 1},
                    ],
                    [
                        {num: 21, state: 1},
                        {num: 24, state: 1},
                        {num: 27, state: 1},
                    ],
                    [
                        {num: 20, state: 1},
                        {num: 23, state: 1},
                        {num: 26, state: 1},
                    ],
                    [
                        {num: 19, state: 1},
                        {num: 22, state: 1},
                        {num: 1, state: 1},
                    ],
                ],
            }
        }
    }
</script>

<style scoped>
</style>
