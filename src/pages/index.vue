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
    export default {
        name: 'index'
    }
</script>

<style scoped>

</style>
