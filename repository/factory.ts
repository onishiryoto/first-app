import { SearchParameters } from 'ofetch';
import ResponseModel from '~/models/apis/responses/response';
type MethodType = "GET" | "POST" | "DELETE" | "PATCH" | "PUT" | "get" | "post" | "delete" | "patch" | "put";
class HttpFactory{
    private options: object;
    constructor(options: object) {
        this.options = options;
    }
    //GET
    protected async get<T>(url: string, queryParams?: SearchParameters) {
        const type: MethodType = "GET"; 
        let getOption = Object.assign(this.options, { method: type });
        if (queryParams) getOption = Object.assign(getOption, { params: queryParams });
        const { data, error } = await useFetch(url, getOption);
        
        const statusCode = error.value?.statusCode ?? 200;

        let response: ResponseModel<T>;
        if(error.value){
            let errorMessage = this.createErrorMessage(statusCode);
            response = {
                statusCode: statusCode, 
                body: null,
                errorMessage: errorMessage
            }
        }else{
            response = {
                statusCode: statusCode, 
                body: data.value as T,
                errorMessage: null
            }
        }
        return response;
    }

    //POST
    protected async post<T>(url: string, body?: object) {
        const type: MethodType = "POST";
        let postOption = Object.assign(this.options, { method: type });
        postOption = Object.assign(postOption, { body: body });
        const { data, error } = await useFetch(url, postOption);
        const statusCode = error.value?.statusCode ?? 200;
        
        let response: ResponseModel<T>;
        if(error !== null){
            let errorMessage = this.createErrorMessage(statusCode);
            response = {
                statusCode: 401, 
                body: null,
                errorMessage: errorMessage
            }
        }else{
            response = {
                statusCode: statusCode, 
                body: data.value as T,
                errorMessage: null
            }
        }
        return response;
    }

    // protected createResponse<T>(data:Ref<object>,error:Ref<Error | null>):ResponseModel<T>{
    //     const statusCode = error.value?. ?? 200;

    //     let response: ResponseModel<T>;
    //     if(error !== null){
    //         response = {
    //             statusCode: 401, 
    //             body: null,
    //             errorMessage: "認証エラーです。"
    //         }
    //     }else{
    //         response = {
    //             statusCode: statusCode, 
    //             body: data.value as T,
    //             errorMessage: null
    //         }
    //     }

    // }

    //ステータスコード毎のメッセージ
    protected createErrorMessage(errorCode:number): string{
        switch(errorCode){
            case 400: 
                return "処理が失敗しました、時間を・・・";
                break;
            case 401:
                return "ログイン時間を超過しました。再度、ログインしなおしてください。";
                break;
            case 403:
                return "認証エラーです。再度、ログインしなおしてください。";
                break;
            default:
                return "";
                break;
        }
    }
}

export default HttpFactory;