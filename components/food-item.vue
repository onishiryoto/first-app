<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color:{
    type: String,
    required: true
  },
  style:{
    type: String,
    required: true
  },
  isActive:{
    type:Boolean,
    required: true
  },
  isOpen:{
    type:Function,
    required: true
  }
})

</script>

<template>
  <div class="d-flex justify-space-between">
    <div class="">
      <v-icon @click="props.isOpen">{{ props.isActive ?  "mdi-chevron-down" : "mdi-chevron-right"}}</v-icon>
        <v-icon>mdi-pasta</v-icon>
        {{name}}
    </div>
    <div class="d-flex align-center">
      <hr class="select-line">
    </div>
  </div>

</template>

<style scoped>
.select-line{
  width: 40px;
  border-color: v-bind(color);
  border-style: v-bind(style);
}
</style>
