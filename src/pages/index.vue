<template>
    <v-container>
        <v-layout>
            <v-flex xs1 offset-xs1>
                <v-card dark color="purple">
                    <v-card-text></v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs3>
                <v-card dark color="secondary">
                    <v-card-text></v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs1>
                <v-card dark color="primary">
                    <v-card-text></v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs3>
                <v-card dark color="green">
                    <v-card-text></v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs1>
                <v-card dark color="primary">
                    <v-card-text></v-card-text>
                </v-card>
            </v-flex>

            <v-flex xs1>
                <v-card dark color="primary">
                    <v-card-text></v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs1>
                ㄱㅖ단
            </v-flex>
            <v-flex xs1>
                <v-card dark color="primary">
                    <v-card-text></v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout>
            <v-flex xs1>
                계단
            </v-flex>
            <v-flex xs10>
                복도
            </v-flex>

        </v-layout>
        <v-layout>
            <v-flex xs3 offset-xs1 color="blue" dark>

                <v-card dark :flat="!hover" color="secondary">
                    <v-card-text>231호</v-card-text>
                </v-card>

            </v-flex>
            <v-flex xs3>
                <v-hover
                        v-slot:default="{ hover }"
                >
                    <v-card dark :flat="!hover" color="secondary">
                        <v-card-text>D</v-card-text>
                    </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs3>
                <v-card dark :flat="!hover" color="secondary">
                    <v-card-text>232호</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs3>
                <v-card dark :flat="!hover" color="secondary">
                    <v-card-text>화장실</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import A1 from "../components/A1"
    import A2 from "../components/A2"
    import A3 from "../components/A3"
    import A4 from "../components/A4"
    import B1 from "../components/B1"
    import B2 from "../components/B2"
    import C from "../components/C"
    import D from "../components/D"
    import Whole from "../components/Whole";

    export default {
        name: 'index',
        components: {
            Whole,
            A1,
            A2,
            A3,
            A4,
            B1,
            B2,
            C,
            D
        },
    }
</script>

<style scoped>

</style>
