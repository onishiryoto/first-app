import ResponseModel from "~/models/apis/responses/response";
import HttpFactory from "../factory";
import IUserModel from "~/models/apis/responses/user";

class UserModule extends HttpFactory {
    constructor(options: object) {
        super(options);
    }
    async getUsers() :Promise<ResponseModel<IUserModel[]>>{
        const res = await this.get<IUserModel[]>('/users');
        if(res.errorMessage){
            throw new Error(res.errorMessage);
        }
        return res;
    }
}

export default UserModule