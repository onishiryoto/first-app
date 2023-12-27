import type {Ref} from 'vue'
export const openDialog = (isFilterDialog:Ref<boolean>) => () => {
    isFilterDialog.value = true
}
export const closeDialog = (isFilterDialog:Ref<boolean>) => () => isFilterDialog.value = false

export const useFilterDialog = () => {
    const isOpenFilterDialog = useState<boolean>("isFilterDialog",() => false)
    const test = useRequestHeaders()
    
    return {
        isOpenFilterDialog,
        openDialog:openDialog(isOpenFilterDialog),
        closeDialog:closeDialog(isOpenFilterDialog),
    }
}