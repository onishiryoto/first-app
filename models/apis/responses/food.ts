import IIngredient from "./ingredient";

interface IFood{
    name:string;
    color:string;
    type:string;
    ingredients:IIngredient[]
}

export default IFood