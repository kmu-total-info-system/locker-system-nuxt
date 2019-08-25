<template>
    <v-hover v-slot:default="{ hover }">
        <v-card @click="click"
                :height="60*data.height" :width="60*data.width"
                :class="{broken:(data.state == 0),
                already:(data.state == -1),
                overlay:hover&&(data.state == 1)}"
                class="card-layout pointer secondaryBackground border-collapse-lighten text-xs-center align-center
                                d-flex justify-space-between">
            <img v-if="(data.state == 0)" :src="x"/>
            <img v-if="(data.state == -1)" :src="already"/>
            <div :class="{'primaryText--text':(data.state != -1)}"
                 class=" d-inline-block text">{{ data.value }}
            </div>
        </v-card>
    </v-hover>
</template>

<script>
    import x from "../static/x.svg"
    import already from "../static/already.png"

    export default {
        name: "Locker",
        props: [
            'data'
        ],
        methods: {
            click: function () {
                this.$emit('click', this.data);
            }
        },
        data() {
            return {
                x,
                already
            }
        }
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
