import type {Ref} from 'vue'
export const useNavToLogin = () => {
    const isNavToLogin = useState("navToLogin",() => false)
    return {
        isNavToLogin,
        setNavToLogin:setNavToLogin(isNavToLogin),
        resetNavToLogin:resetNavToLogin(isNavToLogin),
    }
}

export const setNavToLogin = (isNavTologin:Ref<boolean>) => {
    isNavTologin.value = true;
}
export const resetNavToLogin = (isNavTologin:Ref<boolean>) => {
    isNavTologin.value = false;
}