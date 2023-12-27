<script lang="ts" setup>
definePageMeta({
  layout: false,
});
</script>

<template>
      <v-row>
        <v-col v-for="n in 24" :key="n" cols="3">
          <v-card class="pa-4 ma-2" height="250" color="blue-lighten-3">
            v-card
          </v-card>
        </v-col>
      </v-row>
</template>

<style scoped></style>
