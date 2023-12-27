export const useErrorMessge = () => { 
    const initMessage = "";
    const message = useState("message",() => initMessage);

    return {
        message,
        setErrorMessage:setErrorMessage(message)
    }
 }

 export const setErrorMessage = (error:Ref<string>) => (value:string) => {
    error.value = value;
 }