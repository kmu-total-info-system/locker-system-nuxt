<template>
    <div>
        <div @click="formExit" class="dim-background"></div>
        <v-form class="elevation-6 pa-3 z-index-max form"
                ref="form"
                lazy-validation
        >
            <v-text-field
                    v-model="studentNumber"
                    :counter="8"
                    label="학번"
                    @change="check"
                    name="id"
                    required
            ></v-text-field>

            <v-text-field
                    type="password"
                    v-model="password"
                    label="비밀번호"
                    name="passwd"
                    @change="check"
                    required
            ></v-text-field>
            <v-flex class="text-xs-right">
                <v-btn :loading="loading"
                       :disabled="!valid||loading"
                       color="primary"
                       @click="validate"
                >
                    로그인
                </v-btn>
            </v-flex>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                valid: false,
                loading: false,
                studentNumber: '',
                nameRules: [
                    v => !!v || '학번을 입력해주세요',
                    v => (v && v.length <= 8) || '학번은 최대 8글자 입니다',
                ],
                password: '',
            }
        },
        methods: {
            check() {
                if (this.$refs.form.validate()) {
                    this.valid = true;
                }
            },
            async validate() {
                this.loading = true;
                try {
                    var logindata = new FormData(this.$refs.form.$el);
                    var response = await this.$axios.$post('/auth/account/', logindata)
                    this.loading = false;
                    console.log(response)
                } catch (err) {
                    console.log(err)
                }

            },
            formExit() {
                this.$emit('formExit')
            }
        }
    }
</script>

<style scoped>
    .form {
        border-radius: 6px;
        position: fixed;
        width: 300px;
        margin: auto;
        background-color: white;
        left: 40%;
        top: 30%;
    }

    .dim-background {
        height: 100%;
        width: 100%;
        background-color: white;
        opacity: .7;
        z-index: 50;
        position: fixed;
    }
</style>
