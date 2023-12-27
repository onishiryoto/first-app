import { defineNuxtPlugin } from '#app';
import AuthModule from '~/repository/modules/auth';
import UserModule from '~/repository/modules/user';
import { FetchOptions } from 'ofetch';


/** ApiInstance interface provides us with good typing */
export type ApiInstance = {
    auth: AuthModule,
    user:UserModule
}

export default defineNuxtPlugin((nuxtApp) => {
    const interceptor: FetchOptions = {
        timeout:5000,
        onRequest({request, options, error}){
            //リクエスト時のインターセプター処理
        },
        onRequestError({request, options, error}){
            //リクエストエラー時のインターセプター処理
            const test = error
        },
        onResponse({request,response,options}){
            //レスポンス時のインターセプター処理
        },
        onResponseError({ request, response, error }) {
            //レスポンスエラー時のインターセプター処理
        },
    };
    let firstMOlaApiOptions: FetchOptions =
    {
        baseURL: "https://func-azukarisho-jbs-001.azurewebsites.net/api",
    };
    let firstAppApiOptions: FetchOptions =
    {
        baseURL: "https://jsonplaceholder.typicode.com",
    };

    firstMOlaApiOptions = Object.assign(firstAppApiOptions,interceptor);
    firstAppApiOptions = Object.assign(firstAppApiOptions,interceptor);
    const module:ApiInstance = {
        auth:new AuthModule(firstAppApiOptions),
        user:new UserModule(firstAppApiOptions)
    }
    return {
        provide:{
            api: module,
        }
    };
})