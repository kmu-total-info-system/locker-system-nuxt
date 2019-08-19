<template>
    <v-layout column>
        <v-layout style="width:240px;" v-for="Alist in Ddata" align-start justify-start row fill-height
                  wrap>
            <v-flex v-for="A in Alist">
                <v-hover>
                    <v-card height="60" width="60"
                            class="lime text-xs-center align-center d-flex justify-space-between">
                        <div class="d-inline-block">D - {{ A.num }}</div>
                    </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
    </v-layout>
</template>

<script>
    export default {
        name: "D",
        data() {
            return {
                Ddata: [
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
<style type="text/css">
    @import url('../assets/style/public.css');
</style>
<style scoped>

</style>
