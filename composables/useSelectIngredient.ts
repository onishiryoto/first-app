import IIngredient from "~/models/apis/responses/ingredient"

export const useSelectIngredient = () => {
    const initIngredient:IIngredient = {
        id:"",
        name:"",
        color:"",
        type:""
    }
    // const selectIngredient = useState('ingredient',() => initIngredient)
    const selectIngredient = useState('ingredient',() => initIngredient)

    return {
        selectIngredient,
        setIngredient:setIngredient(selectIngredient)
    }
}

export const setIngredient = (cullentIngredient:Ref<IIngredient>) => (newIngredient:IIngredient) => {
    cullentIngredient.value = newIngredient
    console.log(cullentIngredient.value);
    
}