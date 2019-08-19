<template>
    <div style="width:720px; margin-bottom:80px;">
        <v-layout>
            <v-flex xs1>
                <v-hover>
                    <v-card dark class="text-xs-center align-center d-flex justify-space-between"
                            height="60">
                        <span class="d-inline-block">A-2</span>
                    </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs3>
                <v-hover>
                    <v-card dark class="text-xs-center align-center d-flex justify-space-between"
                            height="60">
                        <span class="d-inline-block">B-1</span>
                    </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs1>
                <v-hover>
                    <v-card dark class="text-xs-center align-center d-flex justify-space-between"
                            height="60">
                        <span class="d-inline-block">B-2</span>
                    </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs3>
                <v-hover>
                    <v-card dark class="text-xs-center align-center d-flex justify-space-between"
                            height="60">
                        <span class="d-inline-block">C</span>
                    </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs1>
                <v-hover>
                    <v-card dark class="text-xs-center align-center d-flex justify-space-between"
                            height="60">
                        <span class="d-inline-block">D</span>
                    </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs1>
                <v-hover>
                    <v-card dark class="text-xs-center align-center d-flex justify-space-between"
                            height="60">
                        <span class="d-inline-block">A-3</span>
                    </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs1>
                <v-img :src="stairs" class="up-stairs" width="24" height="24"></v-img>
            </v-flex>
            <v-flex xs1>
                <v-hover>
                    <v-card dark class="text-xs-center align-center d-flex justify-space-between"
                            height="60">
                        <span class="d-inline-block">A-4</span>
                    </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex>
                <v-card class="text-center align-center d-flex justify-space-between"
                        height="60">
                    <div>
                        <v-img :src="stairs" width="24" height="24"
                               class="left-stairs"></v-img>
                    </div>
                    <span class="d-inline-block">복도</span>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs3 color="blue dark">
                <v-hover>
                    <v-card dark class="text-xs-center align-center d-flex justify-space-between"
                            height="60">
                        <span class="d-inline-block">231호</span>
                    </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs3>
                <v-hover>
                    <v-card dark class="text-xs-center align-center d-flex justify-space-between"
                            height="60">
                        <span class="d-inline-block">A-1</span>
                    </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs3>
                <v-hover>
                    <v-card dark class="text-xs-center align-center d-flex justify-space-between" height="60">
                        <span class="d-inline-block">232호</span>
                    </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs3>
                <v-hover>
                    <v-card dark class="text-xs-center align-center d-flex justify-space-between" height="60">
                        <span class="d-inline-block">화장실</span>
                    </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import stairs from "../static/stairs.svg"

    export default {
        name: "Whole",
        data() {
            return {
                stairs
            }
        }
    }
</script>

<style scoped>
    .up-stairs {
        margin: auto;
        margin-top: 6px;
        transform: rotate(-90deg);
    }

    .left-stairs {
        margin: auto;
        margin-left: 6px;
        transform: rotate(180deg);
    }
</style>
