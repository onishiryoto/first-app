export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error,instance,info) => {
        //エラー処理記載
        console.log("エラー");
    }

    nuxtApp.hook('vue:error',(error,instance,info) => {
        //エラー処理記載
        
    })
})