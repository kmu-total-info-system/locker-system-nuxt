<template>
    <v-hover v-slot:default="{ hover }">
        <v-card @click="click"
                :height="60*data.height" :width="60*data.width"
                :style="{backgroundColor:color}"
                :class="{overlay:hover}"
                class="card-layout z-index-20 elevation-collapse text-xs-center align-center pointer
                                d-flex justify-space-between">
            <div class="d-inline-block text primaryText--text">{{ data.value }}
            </div>
        </v-card>
    </v-hover>
</template>

<script>

    export default {
        name: "Area",
        methods: {
            click: function () {
                this.$emit('click', this.data);
                this.$store.commit('CurrentChange', this.data);
                console.log(this.$store.state.current);
            }
        },
        computed: {
            color: function () {
                if (this.$store.state.current == 'whole' ||
                    this.$store.state.current == this.data.link) {
                    console.log(this.data)
                    return this.data.color;
                } else {
                    return '#e4e8ed';
                }
            }
        },
        props: [
            'data'
        ]
    }
</script>
<style type="text/css">
    @import url('../assets/style/public.css');
</style>
<style scoped>
    .overlay {
        background-image: url("../static/overlay-10.png");
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
