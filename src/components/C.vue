<template>
    <v-layout column>
        <v-layout style="width:1200px;" v-for="Alist in CData" align-start justify-start row fill-height
                  wrap>
            <v-flex v-for="A in Alist">
                <v-hover>
                    <v-card height="60" width="60"
                            class="lime text-xs-center align-center d-flex justify-space-between">
                        <div class="d-inline-block">B - {{ A.num }}</div>
                    </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
    </v-layout>
</template>

<script>
    export default {
        name: "C",
        data(){
            return{
                CData: [
                    [
                        {num: 1, state: 1, group: 'C'},
                        {num: 2, state: 1, group: 'C'},
                        {num: 11, state: 1, group: 'C'},
                        {num: 12, state: 1, group: 'C'},
                        {num: 21, state: 1, group: 'C'},
                        {num: 22, state: 1, group: 'C'},
                        {num: 31, state: 1, group: 'C'},
                        {num: 32, state: 1, group: 'C'},
                        {num: 41, state: 1, group: 'C'},
                        {num: 42, state: 1, group: 'C'},
                        {num: 51, state: 1, group: 'C'},
                        {num: 52, state: 1, group: 'C'},
                        {num: 61, state: 1, group: 'C'},
                        {num: 71, state: 1, group: 'C'},
                        {num: 72, state: 1, group: 'C'},
                        {num: 81, state: 1, group: 'C'},
                        {num: 91, state: 1, group: 'C'},
                        {num: 92, state: 1, group: 'C'},
                    ],
                    [
                        {num: 3, state: 1, group: 'C'},
                        {num: 4, state: 1, group: 'C'},
                        {num: 13, state: 1, group: 'C'},
                        {num: 14, state: 1, group: 'C'},
                        {num: 23, state: 1, group: 'C'},
                        {num: 24, state: 1, group: 'C'},
                        {num: 33, state: 1, group: 'C'},
                        {num: 34, state: 1, group: 'C'},
                        {num: 43, state: 1, group: 'C'},
                        {num: 44, state: 1, group: 'C'},
                        {num: 53, state: 1, group: 'C'},
                        {num: 54, state: 1, group: 'C'},
                        {num: 63, state: 1, group: 'C'},
                        {num: 64, state: 1, group: 'C'},
                        {num: 73, state: 1, group: 'C'},
                        {num: 74, state: 1, group: 'C'},
                        {num: 83, state: 1, group: 'C'},
                        {num: 84, state: 1, group: 'C'},
                        {num: 93, state: 1, group: 'C'},
                        {num: 94, state: 1, group: 'C'},
                    ],
                    [
                        {num: 5, state: 1, group: 'C'},
                        {num: 6, state: 1, group: 'C'},
                        {num: 15, state: 1, group: 'C'},
                        {num: 16, state: 1, group: 'C'},
                        {num: 25, state: 1, group: 'C'},
                        {num: 26, state: 1, group: 'C'},
                        {num: 35, state: 1, group: 'C'},
                        {num: 36, state: 1, group: 'C'},
                        {num: 45, state: 1, group: 'C'},
                        {num: 46, state: 1, group: 'C'},
                        {num: 55, state: 1, group: 'C'},
                        {num: 56, state: 1, group: 'C'},
                        {num: 65, state: 1, group: 'C'},
                        {num: 66, state: 1, group: 'C'},
                        {num: 75, state: 1, group: 'C'},
                        {num: 76, state: 1, group: 'C'},
                        {num: 85, state: 1, group: 'C'},
                        {num: 86, state: 1, group: 'C'},
                        {num: 95, state: 1, group: 'C'},
                        {num: 96, state: 1, group: 'C'},
                    ],
                    [
                        {num: 7, state: 1, group: 'C'},
                        {num: 8, state: 1, group: 'C'},
                        {num: 17, state: 1, group: 'C'},
                        {num: 18, state: 1, group: 'C'},
                        {num: 27, state: 1, group: 'C'},
                        {num: 28, state: 1, group: 'C'},
                        {num: 37, state: 1, group: 'C'},
                        {num: 38, state: 1, group: 'C'},
                        {num: 47, state: 1, group: 'C'},
                        {num: 48, state: 1, group: 'C'},
                        {num: 57, state: 1, group: 'C'},
                        {num: 58, state: 1, group: 'C'},
                        {num: 67, state: 1, group: 'C'},
                        {num: 68, state: 1, group: 'C'},
                        {num: 77, state: 1, group: 'C'},
                        {num: 78, state: 1, group: 'C'},
                        {num: 87, state: 1, group: 'C'},
                        {num: 88, state: 1, group: 'C'},
                        {num: 97, state: 1, group: 'C'},
                        {num: 98, state: 1, group: 'C'},
                    ],
                    [
                        {num: 9, state: 1, group: 'C'},
                        {num: 10, state: 1, group: 'C'},
                        {num: 19, state: 1, group: 'C'},
                        {num: 20, state: 1, group: 'C'},
                        {num: 29, state: 1, group: 'C'},
                        {num: 30, state: 1, group: 'C'},
                        {num: 39, state: 1, group: 'C'},
                        {num: 40, state: 1, group: 'C'},
                        {num: 49, state: 1, group: 'C'},
                        {num: 50, state: 1, group: 'C'},
                        {num: 59, state: 1, group: 'C'},
                        {num: 60, state: 1, group: 'C'},
                        {num: 69, state: 1, group: 'C'},
                        {num: 70, state: 1, group: 'C'},
                        {num: 79, state: 1, group: 'C'},
                        {num: 80, state: 1, group: 'C'},
                        {num: 89, state: 1, group: 'C'},
                        {num: 90, state: 1, group: 'C'},
                        {num: 99, state: 1, group: 'C'},
                        {num: 100, state: 1, group: 'C'},
                    ]
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
