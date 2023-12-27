<script lang="ts" setup>
definePageMeta({
  layout: 'cutome',
});
const isOpen = ref(false)
const selecteditem = ref("")
const selectitem = (itemName:string) => { 
  selecteditem.value = itemName;
  console.log(selecteditem.value);
 }
 
</script>

<template>
  <v-main>
    <v-navigation-drawer permanent location="right" :width="400">
      <v-container>
          <v-card-title class="pa-0 font-weight-bold">献立</v-card-title>
          <v-expansion-panels>
            <v-expansion-panel  elevation="0">
              <!-- <v-expansion-panel-title>
                <v-icon>mdi-chevron-down</v-icon>
                パネルのタイトル
              </v-expansion-panel-title> -->
              <v-expansion-panel-title  class="pa-0" @click="isOpen = !isOpen">
                <template v-slot:actions>
                  <v-icon color="rgba(255,0,0,1)">mdi-minus</v-icon>
                </template>
                <v-icon>{{ isOpen ?  "mdi-chevron-down" : "mdi-chevron-right"}}</v-icon>
                <v-icon>mdi-pasta</v-icon>
                和風ハンバーグ
              </v-expansion-panel-title>
              <v-expansion-panel-text class="d-flex justify-space-between" @click="selectitem('合い挽き肉')">
                <div class="d-flex justify-space-between">
                  <div class="">
                    <v-icon>mdi-food-variant</v-icon>
                    合い挽き肉
                  </div>
                  <v-icon color="rgba(255,0,0,1)">mdi-minus</v-icon>
                </div>
              </v-expansion-panel-text>
              <v-expansion-panel-text class="d-flex justify-space-between" @click="selectitem('合い挽き肉')">
                <div class="d-flex justify-space-between">
                  <div class="">
                    <v-icon>mdi-food-variant</v-icon>
                    玉ねぎ
                  </div>
                  <v-icon color="rgba(0,255,0,1)">mdi-minus</v-icon>
                </div>
              </v-expansion-panel-text>
              <v-expansion-panel-text class="d-flex justify-space-between" @click="selectitem('合い挽き肉')">
                <div class="d-flex justify-space-between">
                  <div class="">
                    <v-icon>mdi-food-variant</v-icon>
                    牛乳
                  </div>
                  <v-icon color="rgba(0,,255,1)">mdi-minus</v-icon>
                </div>
              </v-expansion-panel-text>
             
             
            </v-expansion-panel>
          </v-expansion-panels>
        
      </v-container>
      <v-container>
          <v-card-title class="pa-0 font-weight-bold">調理</v-card-title>
      </v-container>
      <v-container>
          <v-card-title class="pa-0 font-weight-bold">編集</v-card-title>
      </v-container>
    </v-navigation-drawer>
  </v-main>
</template>
<style>
@import 'vuetify/dist/vuetify.min.css';

.custom-expansion-panel  {
  /* 選択時の色を透明にする */
  background-color: transparent !important;
}
.v-expansion-panel-title__overlay{
  background-color: rgba(41, 120, 189, 0);
}
.v-expansion-panel-text__wrapper{
  padding: 8px 0px 8px 24px;
}

</style>