<template>
    <v-hover v-slot:default="{ hover }">
        <v-card @click="click" ref="locker"
                :style="{backgroundColor:backgroundColor}"
                :height="60*data.height" :width="60*data.width"
                :class="{broken:(data.state == 2),
                already:(data.state == 3),
                overlay:hover&&(data.state == 1)}"
                class="card-layout pointer
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
                    this.$store.commit('LockerCurrentChange', this.data);
                } else {
                    this.$store.commit('LockerCurrentChange', '');
                }
                console.log(this.data)
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
                if (this.$store.state.lockerCurrent == this.data.id) {
                    this.isClicked = true;
                    return this.data.color;
                } else {
                    this.isClicked = false;
                    return '#edf1f5';
                }
            }
        },
        created() {
            window.addEventListener('click', this.clickEvent);
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
