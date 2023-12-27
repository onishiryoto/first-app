interface ResponseModel<T>  {
    statusCode: number;
    body: T | null;
    errorMessage: string | null;
}

export default ResponseModel;