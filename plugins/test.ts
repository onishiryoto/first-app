import { defineNuxtPlugin } from '#app';
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook(
        "app:created",
        () => {
            console.log("アプリ初回実行時")
        }
    )
    nuxtApp.hook(
        "app:beforeMount",
        () => {
            console.log("アプリマウントの前")
        }
    )
    nuxtApp.hook(
        "app:mounted",
        () => {
            console.log("アプリマウント後")
        }
    )
})