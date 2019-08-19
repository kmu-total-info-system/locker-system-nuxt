<template>
    <v-layout>
        <div style="width:180px">
            <v-flex d-inline-flex>
                <v-layout column>
                    <v-layout style="width:180px;" v-for="Alist in ALeft" align-start justify-start row fill-height
                              wrap>
                        <v-flex v-for="A in Alist">
                            <v-hover>
                                <v-card height="60" width="60"
                                        class="lime text-xs-center align-center d-flex justify-space-between">
                                    <div class="d-inline-block">A - {{ A.num }}</div>
                                </v-card>
                            </v-hover>
                        </v-flex>
                    </v-layout>
                </v-layout>
            </v-flex>
        </div>
        <div style="width:180px;">
            <v-flex d-inline-flex>
                <v-layout column>
                    <v-layout style="width:180px;" v-for="Alist in ALeft" align-start justify-start row fill-height
                              wrap>
                        <v-flex v-for="A in Alist">
                            <v-hover>
                                <v-card height="60" width="60"
                                        class="lime text-xs-center align-center d-flex justify-space-between">
                                    <div class="d-inline-block">A - {{ A.num }}</div>
                                </v-card>
                            </v-hover>
                        </v-flex>
                    </v-layout>
                </v-layout>
            </v-flex>
        </div>
    </v-layout>
</template>

<script>
    export default {
        name: 'A1',
        data() {
            return {
                ALeft: [
                    [
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                    ],
                    [
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                    ],
                    [
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                    ],
                    [
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                    ],
                    [
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                    ],
                    [
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                    ],
                ],
                ARight: [
                    [
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                    ],
                    [
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                    ],
                    [
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                    ],
                    [
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                    ],
                    [
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                    ],
                    [
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                        {num: 1, state: 1},
                    ],
                ],
            }
        }
    }
</script>
<style type="text/css">
    @import url('../assets/style/public.css');
</style>
<style scoped>
</style>
