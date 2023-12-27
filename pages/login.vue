<!-- <script>
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        login() {
            // Your login logic here
        },
    },
}
</script> -->
<script lang="ts" setup>
import googleIcon from "@/components/icons/google-icon.vue"
import IAuthRequestModel from "~/models/apis/requests/auth";
import IMolaAuthRequestModel from "~/models/apis/requests/mola-auth";
const { $api } = useNuxtApp();
definePageMeta({
  layout: false,
});
const auth = useAuth();

const router = useRouter();
const userId = ref<string>("");
const password = ref<string>("");
const login = async() => { 
    // await auth.signIn(userId.value,password.value);
    const model:IMolaAuthRequestModel = {
    shokubanId: userId.value,
    password: password.value
}
    await $api.auth.loginMola(model);
    // router.push("/");
    // const res = await $api.auth.getUsers();
// console.log(res.body);
 }
</script>
<template>
    <div class="d-flex align-center justify-center" style="height: 100vh">
        <v-card class="login-card justify-center" width="500" height="600">
            <v-card-title class="d-flex justify-center text-h6 text-md-h5">
                Web AppVue
              </v-card-title>
            <v-sheet width="400" class="mx-auto">
                <!-- <v-form fast-fail @submit.prevent="login"> -->
                <v-form fast-fail>
                    <!-- <v-text-field v-model="username" label="User Name"></v-text-field> -->
                    <v-text-field label="User Name" v-model="userId"></v-text-field>
    
                    <!-- <v-text-field v-model="password" label="password"></v-text-field> -->
                    <v-text-field label="password" v-model="password"></v-text-field>
                    <div class="d-flex justify-center">
                        <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>
                    </div>
                    <v-btn color="primary" block class="mt-2" @click="login" >Sign in</v-btn>
                    
                </v-form>
                <div class="d-flex mt-2 justify-center">
                    <p class="text-body-2">Don't have an account? <a href="#">Sign Up</a></p>
                </div>
                <div class="margin"></div>
                <v-btn 
                block class="mt-2 google-btn" @click="login">
                    <v-icon
                    size="x-large" 
                    :icon="googleIcon"></v-icon>
                    <div class="bold-font">Sign in with Google</div>
                </v-btn>

            </v-sheet>
        </v-card>
    </div>  
</template>
<style>
.login-card{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.login-card-title{
    margin: 0 auto;
    padding: 16px 0 16px 0;
}
.margin{
    margin: 64px;
}
.bold-font{
    font-weight: 600;
}
</style>