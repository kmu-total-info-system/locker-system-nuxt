<template>
    <v-hover v-slot:default="{ hover }">
        <v-card @click="click"
                :height="58*data.height" :width="58*data.width"
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
                this.$emit('areaClick', this.data);
                this.$store.commit('ClickNoneChange', true);
                this.$store.commit('CurrentChange', this.data);
            }
        },
        computed: {
            color: function () {
                if (this.$store.state.current == 'whole' ||
                    this.$store.state.current == this.data.link) {
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
