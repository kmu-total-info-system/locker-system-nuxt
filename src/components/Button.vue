<template>
        <v-btn :loading="loading"
               class="elevation-0 base-style" @click="onClicked">
            <slot></slot>
        </v-btn>
</template>

<script>
    export default {
        name: "Button",
        props: ['loading'],
        methods: {
            onClicked: function (e) {
                this.$emit('click', e)
            }
        }
    }
</script>

<style scoped>
    .base-style {
        outline: none;
        border: none;
        line-height: .9;
        vertical-align: middle;
        text-align: center;
        /* 버튼 드래그 방지 */
        -ms-user-select: none;
        -moz-user-select: -moz-none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        user-select: none;
        height: 58px;
        padding: 0 32px;
        font-size: 18px;
    }

</style>
