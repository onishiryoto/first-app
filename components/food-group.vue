<script lang="ts" setup>
import IFood from '~/models/apis/responses/food';
const props = defineProps({
  food:{
    type:Object as () => IFood,
    required: true
  }
})
const isActive = ref(false)
const isOpen = () => { 
  isActive.value = !isActive.value
 }

</script>

<template>
  <div class="">
    <food-item :name="food.name" :color="food.color" :style="food.type" :is-active="isActive" :is-open="isOpen"></food-item>
    <div v-if="isActive" class="py-2 pl-10">
          <ingredient-item v-for="n in food.ingredients" :id="n.id" :name="n.name" :color="n.color" :type="n.type"></ingredient-item>
    </div>
  </div>
</template>

<style scoped></style>
