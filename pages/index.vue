<script lang="ts" setup>
import { validateLocaleAndSetLanguage } from "typescript";
</script>
<template>
  <v-main class="main-container">
    <div class="top-area-container"></div>
    <v-layout column justify-center align-center>
      <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item
          v-for="n in 15"
          :key="n"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
          <v-card
            color="grey-lighten-1"
            :class="['ma-4', selectedClass]"
            height="200"
            width="200"
          >
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
      <!-- <v-card
                class="mx-auto"
                max-width="300"
            >
                <v-list>
                    <v-list-item
                        v-for="(user, i) in res.body"
                        :key="i"
                        :value="user"
                        rounded="shaped"
                    >
                        <template v-slot:prepend>
                            <v-icon icon="mdi-account"></v-icon>
                        </template>
                        <v-list-item-title v-text="user.name"></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-card> -->
    </v-layout>
  </v-main>
</template>
<style>
.main-container {
  width: 80vw;
  margin: 0 auto;
}
.top-area-container {
  background-image: url("../assets/index-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 40vh;
  margin: 0 auto;
}
</style>
