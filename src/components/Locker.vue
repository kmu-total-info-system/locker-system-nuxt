<template>
    <v-hover v-slot:default="{ hover }">
        <v-card @click="click" ref="locker"
                :style="{backgroundColor:backgroundColor}"
                :height="58*data.height" :width="58*data.width"
                :class="{broken:(data.state == 2),
                already:(data.state == 3),
                overlay:hover&&(data.state == 1),
                complete:(data.state==4)}"
                class="card-layout pointer z-index-20
                border-collapse-lighten text-xs-center align-center
                                d-flex justify-space-between">
            <img v-if="(data.state == 2)" :src="x"/>
            <img v-if="(data.state == 3)" :src="already"/>
            <div :class="{'primaryText--text':(data.state == 1)}"
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
                this.isClicked = !this.isClicked;
                if (this.isClicked) {
                    this.$store.commit('ClickNoneChange', false);
                    this.$store.commit('LockerCurrentChange', this.data);
                } else {
                    this.$store.commit('LockerCurrentChange', '');
                    this.$store.commit('ClickNoneChange', true);
                }
                this.$emit('click', this.data, this.isClicked);
            }
        },
        data() {
            return {
                x,
                already,
                isClicked: false
            }
        },
        computed: {
            backgroundColor: function () {
                if (this.$store.state.lockerCurrent == this.data.id && !this.$store.state.clickNone) {
                    this.isClicked = true;
                    return this.data.color;
                } else {
                    this.isClicked = false;
                    return '#edf1f5';
                }
            }
        },
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
