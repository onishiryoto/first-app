import type {Ref} from 'vue'
export const useNavToHome = () => {
    const isNavToHome = useState("navToHome",() => false)
    return {
        isNavToHome,
        setNavToHome:setNavToHome(isNavToHome),
        resetNavToHome:resetNavToHome(isNavToHome),
    }
}

export const setNavToHome = (isNavToHome:Ref<boolean>) => {
    isNavToHome.value = true;
}
export const resetNavToHome = (isNavToHome:Ref<boolean>) => {
    isNavToHome.value = false;
}