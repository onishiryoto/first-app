<script lang="ts" setup>
import FoodItem from '~/components/food-item.vue';
import { useNotSharedCounter } from '~/composables/counter';
import IFood from '~/models/apis/responses/food';
import IIngredient from '~/models/apis/responses/ingredient';
definePageMeta({
  layout: 'custome',
});
 const ingredient1:IIngredient = {
  id:"0001",
  name:"合いびき肉",
  color:"rgba(255,0,0,1)",
  type:"dashed",
 }
 const ingredient2:IIngredient = {
  id:"0002",
  name:"玉ねぎ",
  color:"rgba(0,255,0,1)",
  type:"dashed",
 }
 const ingredient3:IIngredient = {
  id:"0003",
  name:"牛乳",
  color:"rgba(0,0,255,1)",
  type:"dashed",
 }

 const food1:IFood = {
  name:"和風ハンバーグ",
  color:"rgba(255,0,0,1)",
  type:"dashed",
  ingredients:[
    ingredient1,
    ingredient2,
    ingredient3,
  ]
 }
 
 const ingredient7:IIngredient = {
  id:"0007",
  name:"米",
  color:"rgba(255,0,0,1)",
  type:"dashed",
 }
 const ingredient8:IIngredient = {
  id:"0008",
  name:"鶏肉",
  color:"rgba(0,255,0,1)",
  type:"dashed",
 }
 const ingredient9:IIngredient = {
  id:"0009",
  name:"しめじ",
  color:"rgba(0,0,255,1)",
  type:"dashed",
 }

 const food3:IFood = {
  name:"炊き込みご飯",
  color:"rgba(255,0,255,1)",
  type:"dashed",
  ingredients:[
    ingredient7,
    ingredient8,
    ingredient9,
  ]
}
 const ingredient4:IIngredient = {
  id:"0004",
  name:"玉ねぎ",
  color:"rgba(255,0,0,1)",
  type:"dashed",
 }
 const ingredient5:IIngredient = {
  id:"0005",
  name:"わかめ",
  color:"rgba(0,255,0,1)",
  type:"dashed",
 }
 const ingredient6:IIngredient = {
  id:"0006",
  name:"味噌",
  color:"rgba(0,0,255,1)",
  type:"dashed",
 }

 const food2:IFood = {
  name:"味噌汁",
  color:"rgba(255,0,0,1)",
  type:"dashed",
  ingredients:[
    ingredient4,
    ingredient5,
    ingredient6,
  ]
}
 
 const swatches = [
        ['#FF0000', '#AA0000', '#550000'],
        ['#FFFF00', '#AAAA00', '#555500'],
        ['#00FF00', '#00AA00', '#005500'],
        ['#00FFFF', '#00AAAA', '#005555'],
        ['#0000FF', '#0000AA', '#000055'],
      ]


</script>

<template>
  <v-main>
    <v-navigation-drawer permanent location="right" :width="360">
      <v-container>
          <v-card-title class="pa-0 font-weight-bold">献立</v-card-title>
          <v-list lines="one">
            <food-group :food="food1"></food-group>
            <food-group :food="food2"></food-group>
            <food-group :food="food3"></food-group>
          </v-list>
        </v-container>
        <v-divider></v-divider>
        <v-container>
          <v-card-title class="pa-0 font-weight-bold">調理</v-card-title>
        </v-container>
        <v-divider></v-divider>
        <v-container>
          <v-card-title class="pa-0 font-weight-bold">編集</v-card-title>
          <v-list lines="one">
            <div class="py-2 d-flex justify-space-between">
              <div class="">
                <v-icon>mdi-format-color-fill</v-icon>
                線の色
              </div>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <div v-bind="props" class="item-border d-flex justify-space-between align-center px-2">
                    <div class="color-box"></div>
                    <div class="color-code px-2">赤色</div>
                    <v-icon size="12">mdi-chevron-down</v-icon>
                  </div>
                </template>
                <v-color-picker
                class="ma-2"
                :swatches="swatches"
                hide-canvas
                hide-sliders
                hide-inputs
                show-swatches
                ></v-color-picker>      
              </v-menu>
            </div>
            <div class="py-2 d-flex justify-space-between">
              <div class="">
                <v-icon>mdi-format-line-style</v-icon>
                線の種類
              </div>
              <v-menu>
              <template v-slot:activator="{ props }">
              <div v-bind="props" class="item-border d-flex justify-space-between align-center px-2">
                <hr class="select-line" >
                <div class="color-code px-2">実線</div>
                <v-icon size="12">mdi-chevron-down</v-icon>
              </div>
                  </template>
                  <v-list>
                    <div class="ma-2 d-flex justify-space-between align-center">
                      <hr class="select-line" >
                      <div class="color-code px-2">実線</div>
                    </div>
                    <div class="ma-2 d-flex justify-space-between align-center">
                      <hr class="select-dashed-line" >
                      <div class="color-code px-2">点線</div>
                    </div>
                    <div class="ma-2 d-flex justify-space-between align-center">
                      <hr class="select-arrow-line" >
                      <div class="color-code px-2">矢印線</div>
                    </div>
                  </v-list>   
                </v-menu>
            </div>
            <div class="py-2 d-flex justify-space-between">
              <div class="">
                <v-icon>mdi-format-line-weight</v-icon>
                線の太さ
              </div>
              <v-menu>
              <template v-slot:activator="{ props }">
              <div v-bind="props" class="item-border d-flex justify-space-between align-center px-2">
                <hr class="select-line" >
                <div class="color-code px-2">普通</div>
                <v-icon size="12">mdi-chevron-down</v-icon>
              </div>
                  </template>
                  <v-list>
                    <!-- <div class="ma-2 d-flex justify-space-between align-center">
                      <hr class="select-thin-line" >
                      <div class="color-code px-2">細い</div>
                    </div> -->
                    <div class="ma-2 d-flex justify-space-between align-center">
                      <hr class="select-line" >
                      <div class="color-code px-2">普通</div>
                    </div>
                    <div class="ma-2 d-flex justify-space-between align-center">
                      <hr class="select-thick-line" >
                      <div class="color-code px-2">太い</div>
                    </div>
                  </v-list>   
                </v-menu>
            </div>
          </v-list>
          
        </v-container>
        <v-divider></v-divider>
    </v-navigation-drawer>
    <v-container class="main-container"></v-container>
  </v-main>
</template>
<style>
@import 'vuetify/dist/vuetify.min.css';
.main-container{
  height: 100vh;
  width: 100vw;
  background-color: #D7D7EA ;
}
.item-border{
  width: 120px;
  max-height: 48px;
  height: 26px;
  border-radius: 4px;
  border-style:solid;
  border-width: 1px;
  border-color: #afb6c4;
}

.color-box{
  width: 18px;
  height: 18px;
  background-color: rgb(255, 0, 0);
}

.select-line{
  width: 25px;
  border-color: #000000;
  border-style:solid;
}

.select-dashed-line{
  width: 25px;
  border-color: #000000;
  border-style:dashed;
}
.select-arrow-line{
  width: 25px;
  border-color: #000000;
  border-style:solid;
}

.select-thin-line{
  width: 25px;
  border-color: #000000;
  border-width:1;
  border-style:solid;
}

.select-thick-line{
  width: 25px;
  border-color: #000000;
  border-width: 2px;
  border-style:solid;
}
</style>