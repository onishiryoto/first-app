import IAuthRequestModel from "~/models/apis/requests/auth";
import IMolaAuthRequestModel from "~/models/apis/requests/mola-auth";

// const { $api } = useNuxtApp();
export const useAuth = () => { 

    const signIn = async(userId: string, password: string) => { 
     }
    const signOut = async(userId: string, password: string) => {  }
    const signInFirebase = async(userId: string, password: string) => {  }
    const signupFirebase = async(userId: string, password: string) => {  }

    return {
        signIn,
        signOut
    }
 }