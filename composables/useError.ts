// import { CommonError } from "~/models/commons/CommonError";

// export const useError = () => {
//     // const initError = new CommonError(200,"")
    
//     const initError:CommonError = {
//         errorCode: 0,
//         name: "",
//         message: ""
//     }
//     const error = useState('error',() => initError);
//     console.log("エラー初期化");
    
//     return {
//         error,
//         setError:setError(error)
//     }
// }

// export const setError = (error:Ref<CommonError>) => (errorValue:CommonError) => {
//     error.value = errorValue;
// }