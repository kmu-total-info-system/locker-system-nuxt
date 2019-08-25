<template>
    <v-card justify="center" style="border-radius:6px;">
        <v-form class="elevation-6 pa-4 z-index-max form"
                ref="form"
                lazy-validation
        >
            <v-card-title class="headline pa-0 mb-3">
                로그인
            </v-card-title>
            <v-text-field
                    v-model="studentNumber"
                    :counter="8"
                    label="학번"
                    @change="check"
                    :rules="numRules"
                    name="id"
                    required
            ></v-text-field>
            <v-text-field
                    class="mb-3"
                    type="password"
                    v-model="password"
                    label="비밀번호"
                    :rules="passwdRules"
                    name="password"
                    @change="check"
                    required
            ></v-text-field>
            <v-btn :loading="loading"
                   :disabled="disabled"
                   class="ma-0"
                   block
                   type="submit"
                   color="primary"
                   @click.prevent="validate"
            >
                로그인
            </v-btn>
        </v-form>
        <v-alert
                height="40"
                class="ma-0 px-2 py-1 z-index-max"
                v-model="inValid"
                outlined
                type="error"
                :dismissible="true"
        >
            로그인에 실패했습니다
        </v-alert>
    </v-card>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                complete: false,
                inValid: undefined,
                loading: false,
                studentNumber: '',
                password: '',
                disabled: true,
                numRules: [
                    v => !!v || '학번을 입력해주세요',
                ],
                passwdRules: [
                    v => !!v || '비밀번호를 입력해주세요',
                ],
            }
        },
        methods: {
            check() {
                this.disabled = !this.$refs.form.validate();
            },
            async validate() {
                this.loading = true;
                try {
                    var logindata = new FormData(this.$refs.form.$el);
                    var response = await this.$auth.loginWith('local', {
                        data: logindata
                    });
                    this.$store.commit('User', this.$auth.user);
                    this.inValid = false;
                    this.loading = false;

                } catch (err) {
                    this.inValid = true;
                    this.loading = false;
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
        background-color: white;
    }
</style>
