<script lang="ts" setup>
import {useSelectIngredient} from "~/composables/useSelectIngredient"
import IIngredient from "~/models/apis/responses/ingredient";
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  color:{
    type: String,
    required: true
  },
  type:{
    type: String,
    required: true
  },
})

const _useSelectIngredient = useSelectIngredient() 

const initIngredient:IIngredient = {
        id:props.id,
        name:props.name,
        color:props.color,
        type:props.type
    }
const isSelected = ref(props.id === _useSelectIngredient.selectIngredient.value.id);
const clickitem = () => { 
  _useSelectIngredient.setIngredient(initIngredient)
 }

 watch(_useSelectIngredient.selectIngredient, (cullent, prev) => { 
  isSelected.value = props.id === _useSelectIngredient.selectIngredient.value.id
  })
  
</script>

<template>
  <div :class="isSelected ? 'item-container py-2' : 'py-2'" @click="clickitem">
    <div class="d-flex justify-space-between">
      <div class="">
        <v-icon>mdi-food-variant</v-icon>
        {{name}}
      </div>
      <div class="d-flex align-center">
        <hr class="select-line">
      </div>
    </div>
  </div>
</template>

<style scoped>
.select-line{
  width: 40px;
  border-color: v-bind(color);
  border-style: v-bind(type);
}
.item-container{

  border-radius: 4px;
  border-style:solid;
  border-width: 1;
  border-color: #2F97C1;
}
</style>
