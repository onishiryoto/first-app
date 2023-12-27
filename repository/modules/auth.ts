import ResponseModel from "~/models/apis/responses/response";
import HttpFactory from "../factory";
import IAuthRequestModel from "~/models/apis/requests/auth";
import IAuthResponse from "~/models/apis/responses/auth";
import IUserModel from "~/models/apis/responses/user";
import IMolaAuthRequestModel from "~/models/apis/requests/mola-auth";

class AuthModule extends HttpFactory{
    constructor(options: object) {
        super(options);
    }
    private RESOURCE = '/users';

    async login(data:IAuthRequestModel) :Promise<ResponseModel<IAuthResponse>> {
        const res = await this.post<IAuthResponse>(`/login`,data);
        // if(res.statusCode == 200)
        return res;
    }
    async loginMola(data:IMolaAuthRequestModel) :Promise<ResponseModel<IAuthResponse>> {
        const res = await this.post<IAuthResponse>(`/login`,data);
        
        // if(res.statusCode == 200)
        return res;
    }
}

export default AuthModule;