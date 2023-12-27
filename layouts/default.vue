
<script lang="ts" setup>
import { useFilterDialog } from '~/composables/filter-dialog';

const tab = null;
const isOverlay = ref(false);

const filterDialog = useFilterDialog()
// const overlay = () => {
//     if(isOverlay){
//         isOverlay.value = true;
//     }else{
//         isOverlay.value = true;
//     }
// };

const wait = async(ms:number) => {
  return new Promise( resolve => setTimeout(resolve, ms) );
};

const onClickMenuBtn = async() => {
    await wait(5000);
};

onMounted(async() => { 
    await wait(5000);
 });

</script>
<template>
    <div>
        <v-overlay
            v-model:model-value="filterDialog.isOpenFilterDialog.value"
            class="d-flex"
        >
        <v-dialog
            v-model:model-value="filterDialog.isOpenFilterDialog.value"
            width="1024"
      >
        <!-- <template v-slot:activator="isOverlay">
        </template> -->
        <v-card>
          <div class="dialog-header">
            <div class=""></div>
            <div class="header-text">フィルター</div>
            <v-btn
              variant="text"
              @click="filterDialog.closeDialog"
              icon="mdi-close"
            >
            </v-btn>
          </div>
          <v-divider></v-divider>
          <v-spacer></v-spacer>
          <div class="dialog-footer">
            <v-btn
              width="150"
              @click="filterDialog.closeDialog"
              depressed
              color="secondary"
            >
              絞り込み
            </v-btn>
          </div>
        </v-card>
      </v-dialog>
        </v-overlay>
        <v-app-bar :elevation="1" fixed app>
            <v-app-bar-nav-icon variant="text" 
            ></v-app-bar-nav-icon>
            <v-toolbar-title>My files</v-toolbar-title>
            <v-text-field
                density="compact"
                variant="solo"
                label="Search templates"
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
                rounded
            ></v-text-field>
            <div class="header-space"></div>
            <v-btn
                @click="filterDialog.openDialog"
                elevation="1"
                prepend-icon="mdi-tune-variant"
            >フィルター</v-btn>
            <!-- <v-btn
                @click="onClickMenuBtn"
                elevation="1"
                prepend-icon="mdi-tune-variant"
            >TEST</v-btn> -->
            <!-- 左右で隔てるためのタグ -->
            <v-spacer></v-spacer>
            <!-- 右側ボタン -->
            <v-btn variant="text" icon="mdi-dots-horizontal"></v-btn>
            <v-btn variant="text" icon="mdi-account"></v-btn>
            
        </v-app-bar>
        <v-app-bar :elevation="5" fixed app>
        <v-tabs
        v-model="tab"
        color="purple-accent-4"
        align-tabs="center"
        class="app-bar-container"
        >
            <v-tab :value="1">Home</v-tab>
            <v-tab :value="2">City</v-tab>
            <v-tab :value="3">Abstract</v-tab>
            <v-tab :value="1">Landscape</v-tab>
            <v-tab :value="2">City</v-tab>
            <v-tab :value="3">Abstract</v-tab>
            <v-tab :value="1">Landscape</v-tab>
            <v-tab :value="2">City</v-tab>
            <v-tab :value="3">Abstract</v-tab>
            <v-tab :value="3">Abstract</v-tab>
        </v-tabs>
        </v-app-bar>
        
        <slot />
    </div>
</template>
<style>
.app-bar-container{
    margin: auto;
}
.header-space{
    width: 32px;
}
.dialog-header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header-text{
  font-weight: 600;
  margin: 16px;
}
.dialog-footer{
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: right;
}
</style>